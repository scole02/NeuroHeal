# https://github.com/mongomock/mongomock
from django.urls import reverse
from rest_framework.test import APIRequestFactory, APITestCase
from rest_framework import status
from unittest.mock import patch
from .views import QuestionAPIView, ChatMessageAPIView

class QuestionAPITestCase(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = QuestionAPIView.as_view()
        self.uri = '/api/question/'
        self.question_data = {'_id': '507f1f77bcf86cd799439011', 'question': 'What is the capital of France?', 'answer': 'Paris'}

    # @patch('api.mongo.db.questions.find_one')
    # def test_get_question(self, mock_find_one):
    #     mock_find_one.return_value = self.question_data
    #     request = self.factory.get(self.uri + '65c1c1b61667dd1ce79b0c8a/')
    #     response = self.view(request, id='65c1c1b61667dd1ce79b0c8a')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertEqual(response.data['question'], self.question_data['question'])

    # @patch('api.views.db.questions.insert_one')
    # def test_post_question(self, mock_insert_one):
    #     mock_insert_one.return_value.inserted_id = self.question_data['_id']
    #     request = self.factory.post(self.uri, self.question_data, format='json')
    #     response = self.view(request)
    #     self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    #     mock_insert_one.assert_called_once()

    # @patch('questions.views.db.questions.replace_one')
    # @patch('questions.views.db.questions.find_one')
    # def test_put_question(self, mock_find_one, mock_replace_one):
    #     updated_data = {'question': 'Updated Question', 'answer': 'Updated Answer'}
    #     mock_find_one.return_value = self.question_data
    #     request = self.factory.put(self.uri + '507f1f77bcf86cd799439011/', updated_data, format='json')
    #     response = self.view(request, id='507f1f77bcf86cd799439011')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     mock_replace_one.assert_called_once()

class ChatMessageAPITestCase(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = ChatMessageAPIView.as_view()
        self.url = '/api/getchat/'
        self.chat_data = {'_id': '507f1f77bcf86cd799439011', 'role': 'assistant', 'content': 'Hi', 'created_at': '2024-02-08 11-36-30'}
        self.test_data = {
                            "_id": "507f1f77bcf86cd799439011",
                            "userid": "kendra",
                            "chat_history": [{
                                "role": "user",
                                "content": "Hi",
                                "created_at": "2024-02-08T20:32:33.782863"       
                            }, {
                                "role": "hello",
                                "content": "Hi",
                                "created_at": "2024-02-08T20:39:33.782863"            
                            }]
                        }

    @patch('api.mongo.db.chatmessages.find_one')
    def test_get_chat(self, mock_find_one):
        mock_find_one.return_value = self.chat_data
        request = self.factory.get(self.url + '507f1f77bcf86cd799439011/')
        response = self.view(request, id='507f1f77bcf86cd799439011')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['content'], self.chat_data['content'])