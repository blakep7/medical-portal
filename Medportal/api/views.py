# from django.shortcuts import render

# # Create your views here.
# import json
# from django.contrib.auth import authenticate, login, logout
# from django.http import JsonResponse
# from django.views.decorators.csrf import ensure_csrf_cookie
# from django.views.decorators.http import require_POST

# @require_POST
# def login_view(request):
#     data = json.loads(request.body)
#     email = data.get("email")
#     password = data.get("password")
    
#     if email is None or password is None:
#         return JsonResponse({"detail":"Please provide email and password"})
#     user = authenticate(email=email, passowrd=password)
#     if user is None:
#         return JsonResponse({"detail":"invalid credentials"}, status=400)
#     login(request, user)
#     return JsonResponse({"details": "Succesfully logged in!"})

# def logout_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"detail":"You are not logged in!"}, status=400)
#     logout(request)
#     return JsonResponse({"detail":"Succesfully logged out!"})


# @ensure_csrf_cookie
# def session_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"isAuthenticated": False})
#     return JsonResponse({"isAuthenticated": True})

# def whoami_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"isAuthenticated": False})
#     return JsonResponse({"email":request.user.email})