from rest_framework import serializers
from datetime import datetime

class QuestionSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    question = serializers.CharField()
    answer = serializers.CharField()
    user = serializers.CharField()
    
# individual chat message
class ChatMessageSerializer(serializers.Serializer):
    role = serializers.CharField(max_length=50)
    content = serializers.CharField()
    def __str__(self):
        return f"{self.role}: {self.content}"

class ChatHistorySerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    userid = serializers.CharField(max_length=50)
    chat_history = serializers.ListField(child=ChatMessageSerializer())
    created_at = serializers.DateTimeField(default=datetime.now)
    
    
# class ChatMessageSerializer(serializers.Serializer):
#     _id = serializers.CharField(read_only=True)
#     role = serializers.CharField(max_length=50)  # 'user' or 'assistant'
#     content = serializers.CharField()
#     created_at = serializers.DateTimeField()

#     def __str__(self):
#         return f"{self.role}: {self.content[:200]}"
    