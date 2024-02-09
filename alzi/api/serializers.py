from rest_framework import serializers

class QuestionSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    question = serializers.CharField()
    answer = serializers.CharField()
    user = serializers.CharField()