from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.shortcuts import render, redirect

def redirect_to_404(request):
    return redirect(to='/404', permanent=True)

def index_view(request):
    return render(request, 'dist/index.html')

urlpatterns = [
    path('api/', include('api.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('admin/', admin.site.urls),
    path('', index_view, name='index'),
    path('prescriptions/', index_view, name='index'),
    path('prescriptions', index_view, name='index'),
    path('prescriptions_manage/', index_view, name='index'),
    path('prescriptions_manage', index_view, name='index'),
    path('404', index_view, name='index'),
    path('404/', index_view, name='index'),
]

urlpatterns += [re_path(r'^.*', redirect_to_404)]