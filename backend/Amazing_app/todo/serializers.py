from rest_framework import serializers
from .models import Home

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Home
        fields='_all_'