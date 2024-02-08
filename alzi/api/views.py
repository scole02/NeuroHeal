from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from bson import ObjectId
from .serializers import QuestionSerializer
from .mongo import db
import requests
import json

OPENAI_API_KEY = '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'

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

class QuestionsAPIView(APIView):
    """
    List all questions, or create a new question.
    """
    
    def get(self, request, format=None):
        questions_collection = db.questions
        questions = list(questions_collection.find({}))
        # Serialize the queryset
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)

class QuestionAPIView(APIView):
    """
    Retrieve, update or delete a question instance.
    """
    def get(self, request, id, format=None):
        questions_collection = db.questions
        question = questions_collection.find_one({"_id": ObjectId(id)})
        if question is not None:
            serializer = QuestionSerializer(question)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        print(request.data)
        if 'user' in request.data.keys():
            print(f"ERROR: User {request.data['user']} present in POST request")
        else: 
            request.data['user'] = 'Sam'
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            questions_collection = db.questions
            question = serializer.validated_data
            result = questions_collection.insert_one(question)
            if result.inserted_id:
                question['_id'] = str(result.inserted_id)  # Convert ObjectId to string
                return Response(question, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id, format=None): # For updating a question answer pair
        try:
            questions_collection = db.questions
            # Ensure the _id is valid ObjectId, return 404 if not
            try:
                question_id = ObjectId(id)
            except bson_errors.InvalidId:
                return Response({"message": "Invalid question ID."}, status=status.HTTP_404_NOT_FOUND)

            question = questions_collection.find_one({"_id": question_id})
            if question is None:
                return Response({"message": "Question not found."}, status=status.HTTP_404_NOT_FOUND)
            
            # Full update logic
            update_data = request.data
            # Ensure we don't try to update the immutable _id field
            update_data.pop('_id', None)
            result = questions_collection.replace_one({"_id": question_id}, update_data)
            if result.modified_count:
                updated_question = questions_collection.find_one({"_id": question_id})
                serializer = QuestionSerializer(updated_question)
                return Response(serializer.data)
            else:
                return Response({"message": "No changes made to the question."}, status=status.HTTP_304_NOT_MODIFIED)

        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_200_OK)
        

def create_chat_body(body, stream=False):
    # Text messages are stored inside request body using the Deep Chat JSON format:
    # https://deepchat.dev/docs/connect
    chat_body = {
        "messages": [
            {
                "role": "assistant" if message["role"] == "ai" else message["role"],
                "content": message["text"]
            } for message in body["messages"]
        ],
        "model": body["model"]
    }
    if stream:
        chat_body["stream"] = True
    return chat_body

@api_view(['POST'])
def chat(body):
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
    }
    print(body.data)
    chat_body = create_chat_body(body.data)
    response = requests.post(
        "https://api.openai.com/v1/chat/completions", json=chat_body, headers=headers)
    json_response = response.json()
    if "error" in json_response:
        raise Exception(json_response["error"]["message"])
    result = json_response["choices"][0]["message"]["content"]
    # Sends response back to Deep Chat using the Response format:
    # https://deepchat.dev/docs/connect/#Response
    return Response({"text": result}, status=status.HTTP_200_OK)

@api_view(['POST'])
def chat_stream(body):
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
    }
    chat_body = create_chat_body(body, stream=True)
    response = requests.post(
        "https://api.openai.com/v1/chat/completions", json=chat_body, headers=headers, stream=True)
    
    def generate():
            # increase chunk size if getting errors for long messages
            for chunk in response.iter_content(chunk_size=2048):
                if chunk:
                    if not(chunk.decode().strip().startswith("data")):
                        errorMessage = json.loads(chunk.decode())["error"]["message"]
                        print("Error in the retrieved stream chunk:", errorMessage)
                        # this exception is not caught, however it signals to the user that there was an error
                        raise Exception(errorMessage)
                    lines = chunk.decode().split("\n")
                    filtered_lines = list(
                        filter(lambda line: line.strip(), lines))
                    for line in filtered_lines:
                        data = line.replace("data:", "").replace(
                            "[DONE]", "").replace("data: [DONE]", "").strip()
                        if data:
                            try:
                                result = json.loads(data)
                                content = result["choices"][0].get("delta", {}).get("content", "")
                                # Sends response back to Deep Chat using the Response format:
                                # https://deepchat.dev/docs/connect/#Response
                                yield "data: {}\n\n".format(json.dumps({"text": content}))
                            except json.JSONDecodeError:
                                # Incomplete JSON string, continue accumulating lines
                                pass
    return Response(generate(), mimetype="text/event-stream", status=status.HTTP_200_OK)


