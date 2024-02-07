from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from bson import ObjectId
from .serializers import QuestionSerializer
from .mongo import db

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
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)