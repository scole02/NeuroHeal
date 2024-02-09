from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from bson import ObjectId
from .serializers import QuestionSerializer, ChatMessageSerializer, ChatHistorySerializer
from .mongo import db
import requests
import json
# from django.utils.timezone import now
from datetime import timedelta, datetime, timezone

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
        
class ChatMessagesAPIView(APIView):
    """
    List all questions, or create a new question.
    """
    
    def get(self, request, format=None):
        chat_collection = db.chatmessages
        messages = list(chat_collection.find({}))
        # Serialize the queryset
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data)

class ChatMessageAPIView(APIView):
    """
    Retrieve, update or delete a question instance.
    """
    def get(self, request, id, format=None):
        chat_collection = db.chatmessages
        chat = chat_collection.find_one({"_id": ObjectId(id)})
        if chat is not None:
            serializer = ChatHistorySerializer(chat)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = ChatHistorySerializer(data=request.data)
        if serializer.is_valid():
            chat_collection = db.chatmessages
            chat = serializer.validated_data
            result = chat_collection.insert_one(chat)
            if result.inserted_id:
                chat['_id'] = str(result.inserted_id)  # Convert ObjectId to string
                return Response(chat, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id, format=None): # For updating a question answer pair
        try:
            chat_collection = db.chatmessages
            # Ensure the _id is valid ObjectId, return 404 if not
            try:
                chat_id = ObjectId(id)
            except bson_errors.InvalidId:
                return Response({"message": "Invalid question ID."}, status=status.HTTP_404_NOT_FOUND)

            chat = chat_collection.find_one({"_id": chat_id})
            if chat is None:
                return Response({"message": "Question not found."}, status=status.HTTP_404_NOT_FOUND)
            
            # Full update logic
            update_data = request.data
            # Ensure we don't try to update the immutable _id field
            update_data.pop('_id', None)
            result = chat_collection.replace_one({"_id": id}, update_data)
            if result.modified_count:
                updated_question = chat_collection.find_one({"_id": id})
                serializer = ChatHistorySerializer(updated_question)
                return Response(serializer.data)
            else:
                return Response({"message": "No changes made to the question."}, status=status.HTTP_304_NOT_MODIFIED)

        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_200_OK)

def create_chat_body(body, stream=False):
    # Text messages are stored inside request body using the Deep Chat JSON format:
    # https://deepchat.dev/docs/connect
    questions_collection = db.questions
    template_questions = list(questions_collection.find({}))
    # Initialize an empty string to hold the template
    template_string = ""

    # Loop through each item in the list to extract questions and answers
    for item in template_questions:
        question = item.get('question', '')
        answer = item.get('answer', '')
        # Append the question and answer to the template string
        template_string += f"Question: {question} Answer: {answer}\n"
    
    print(template_string)
    chat_body = {
        "messages": [
        {
            "role": "system",
            "content": "You are a chatbot to help the memory enhaucement therapy of Alzheimer's patient and ask him/her cognitive questions. Talk in the vibe of daily conversation." 
                        # f"Below are some template questions, you should choose from this, do not expose the answer.\n{template_string}"
        }
        ] + [
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
def login(request):
    if request.method == "POST":
        if request.session.test_cookie_worked():
            request.session.delete_test_cookie()
            return Response("You're logged in.")
        else:
            return Response("Please enable cookies and try again.")
    request.session.set_test_cookie()
    return render(request, "foo/login_form.html")

@api_view(['POST'])
def chat(request):
    # Define session timeout 
    SESSION_TIMEOUT = timedelta(seconds=1)

    # Fetch the latest (last) activity time from the list
    print(request.session.has_key('activity_time'))
    previous_activity = request.session.get('activity_time', [datetime.utcnow().isoformat()])
    last_activity_str = previous_activity[-1]
    
    last_activity = datetime.fromisoformat(last_activity_str)

    time_diff_seconds = (datetime.utcnow() - last_activity).total_seconds()
    print("Last activity:", last_activity)
    print("Current time:", datetime.utcnow())
    
    if time_diff_seconds > SESSION_TIMEOUT.total_seconds():
        # Session has timed out, save chat history to database
        userid = 'anonymous'
        # Assuming the user is authenticated and you can get their ID
        # userid = str(request.user.id) if request.user.is_authenticated else 'anonymous'
        db.chatmessages.insert_one(userid=userid, chat_history=request.data.get('messages', ''))

    request.session['activity_time'] = previous_activity.append(datetime.utcnow().isoformat())
    # request.session.modified = True
    print(previous_activity)
    
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
    }
    chat_body = create_chat_body(request.data)
    
    response = requests.post(
        "https://api.openai.com/v1/chat/completions", json=chat_body, headers=headers)
    
    json_response = response.json()
    if "error" in json_response:
        raise Exception(json_response["error"]["message"])
    result = json_response["choices"][0]["message"]["content"]

    # db.chatmessages.insert_one({"userid": 'anonymous', "chat_history": request.data.get('messages', ''), "created_at": datetime.now()})
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


