from django.urls import path
from .views import QuestionsAPIView, QuestionAPIView, chat, chat_stream

urlpatterns = [
    path('questions/', QuestionsAPIView.as_view(), name='get_questions'),
    path('question/', QuestionAPIView.as_view(), name='question-create'),
    path('question/<id>/', QuestionAPIView.as_view(), name='question-detail'),  # Assuming _id is used as the identifier
    path('chat/', chat, name='chat'),
    path('chat-stream/', chat_stream, name='chat-stream'),


]