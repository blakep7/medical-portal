from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.shortcuts import render

def index_view(request):
    return render(request, 'dist/index.html')

urlpatterns = [
    path('api/', include('api.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('admin/', admin.site.urls),
    path('', index_view, name='index'),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]