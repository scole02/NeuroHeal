from django.urls import path
from .views import QuestionsAPIView, QuestionAPIView, ChatMessageAPIView, ChatMessagesAPIView, chat, chat_stream, login

urlpatterns = [
    path('questions/', QuestionsAPIView.as_view(), name='get_questions'),
    path('question/', QuestionAPIView.as_view(), name='question-create'),
    path('question/<id>/', QuestionAPIView.as_view(), name='question-detail'),  # Assuming _id is used as the identifier
    path('chat/', chat, name='chat'),
    path('chat-stream/', chat_stream, name='chat-stream'),
    path('test-login/', login, name='test-session'),
    path('getchat/', ChatMessageAPIView.as_view(), name='post-chat'),
    path('getchat/<id>/', ChatMessageAPIView.as_view(), name='get-chat-response'),
    path('getchats/', ChatMessagesAPIView.as_view(), name='get-all-chat'),
]