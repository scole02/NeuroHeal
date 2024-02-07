from django.urls import path
from .views import QuestionsAPIView, QuestionAPIView

urlpatterns = [
    path('questions/', QuestionsAPIView.as_view(), name='get_questions'),
    path('question/', QuestionAPIView.as_view(), name='question-create'),
    path('question/<id>/', QuestionAPIView.as_view(), name='question-detail'),  # Assuming _id is used as the identifier

]