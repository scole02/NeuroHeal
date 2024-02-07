# https://github.com/mongomock/mongomock
from django.urls import reverse
from rest_framework.test import APIRequestFactory, APITestCase
from rest_framework import status
from unittest.mock import patch
from .views import QuestionAPIView

class QuestionAPITestCase(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = QuestionAPIView.as_view()
        self.uri = '/api/question/'
        self.question_data = {'_id': '507f1f77bcf86cd799439011', 'question': 'What is the capital of France?', 'answer': 'Paris'}

    @patch('api.mongo.db.questions.find_one')
    def test_get_question(self, mock_find_one):
        mock_find_one.return_value = self.question_data
        request = self.factory.get(self.uri + '507f1f77bcf86cd799439011/')
        response = self.view(request, id='507f1f77bcf86cd799439011')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['question'], self.question_data['question'])

    # @patch('questions.views.db.questions.insert_one')
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
