from django.urls import path
from . import views

from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path
from .views import DoctorListCreate, DoctorRetrieveUpdateDestroy

urlpatterns = [
    path('drug/', views.drug_list),
    path('drug', views.drug_list),
    path('drug/<int:id>', views.drug_detail),
    path('prescription/', views.prescription_list),
    path('prescription', views.prescription_list),
    path('prescription/<int:id>', views.prescription_detail),
    path('doctor/', DoctorListCreate.as_view(), name='doctor-list-create'),
    path('doctor/<int:pk>/', DoctorRetrieveUpdateDestroy.as_view(), name='doctor-retrieve-update-destroy'),
    path('user/', views.user_list),
    path('user', views.user_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)