from djoser.serializers import UserCreateSerializer, UserSerializer
from django.contrib.auth import get_user_model

from rest_framework import serializers
from .models import Drug, Prescription, UserAccount

user = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user
        fields = ("id", "email", "password", "first_name", "last_name", "user_type", "height_in", "weight_lb", "DOB", "phone_number", "profile_picture_ref", "physician")
        
class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['id', 'first_name', 'last_name', 'email', 'user_type', 'height_in', 'weight_lb', 'DOB', 'phone_number', 'profile_picture_ref', 'physician']
        
class DrugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drug
        fields = ['id', 'active_ingrediant', 'purpose', 'brand_name', 'manufacturer_name', 'generic_name', 'product_ndc', 'route', 'substance_name']
        
class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ['id', 'drug', 'user', 'dosage', 'frequency', 'refills', 'start_date', 'end_date', 'notes']