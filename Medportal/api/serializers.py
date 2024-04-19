from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

user = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user
        fields = ("id", "email", "password", "first_name", "last_name", "user_type")