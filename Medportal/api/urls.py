from django.urls import path
from . import views

from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

app_ame = 'api'
urlpatterns = [
    path('drug/', views.drug_list),
    path('drug/<int:id>', views.drug_detail),
    path('prescription/', views.prescription_list),
    path('prescription/<int:id>', views.prescription_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)