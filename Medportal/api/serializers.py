from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

from rest_framework import serializers
from .models import Drug, Prescription

user = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user
        fields = ("id", "email", "password", "first_name", "last_name", "user_type")
        
class DrugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drug
        fields = ['id', 'active_ingrediant', 'purpose', 'brand_name', 'manufacturer_name', 'generic_name', 'product_ndc', 'route', 'substance_name']
        
class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ['id', 'drug', 'user', 'dosage', 'frequency', 'refills', 'start_date', 'end_date', 'notes']