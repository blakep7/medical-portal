from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q

from django.http import JsonResponse
from functools import wraps

from .models import Drug, Prescription, UserAccount
from .serializers import DrugSerializer, PrescriptionSerializer, UserAccountSerializer


def api_key_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        api_key = request.META.get('HTTP_API_KEY')
        if not api_key or api_key != '1234567890':  # This should be a secret key that is only known to the client and the server stored in a table a linked to a user account
            return Response({'error': 'Invalid API key'}, status=401)
        return view_func(request, *args, **kwargs)
    return wrapper

# Create your views here.
# I comment out the first two views to help
@api_view(['GET', 'POST'])              # Specify the allowed HTTP methods
# @api_key_required                       # Apply the custom decorator that is checking for the 'API-Key' header (might remove if i learn how to authenticate API requests with JWT)
@permission_classes([AllowAny])         # Override the default permission classes (because JWT blocks me and idk JWT)
def drug_list(request, format=None):    # Define the view function, takes a request object and an optional format argument (user can specify the format of the response by adding .json to the end of the URL)
    
    if request.method == 'GET':         # Check if the request method is GET
        drugs = Drug.objects.all()      # Get all the drugs from the database
        
        drug_name = request.query_params.get('drug_name', None)     # Get the value of the 'drug_name' query parameter (api/drug/?drug_name=...)
        if drug_name is not None:
            drugs = drugs.filter(brand_name__icontains=drug_name)    # Filter the drugs queryset to only include drugs that have the 'drug_name' in their 'brand_name' field
            
        serializer = DrugSerializer(drugs, many=True)               # Serialize the drugs queryset (convert python objects to JSON)
        return Response(serializer.data)                            # Return the serialized data as a JSON response
    
    if request.method == 'POST':                                                    # Check if the request method is POST
        serializer = DrugSerializer(data=request.data)                              # Create a new DrugSerializer instance with the data from the request (JSON to python object)
        if serializer.is_valid():                                                   # Check if the data is valid (data is from the API call body)
            serializer.save()                                                       # Save the data to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)        # Return the serialized data as a JSON response with a status code of 201 (created)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)      # Return the errors if the data is not valid with a status code of 400 (bad request), tells users what they were missing
        
@api_view(['GET', 'PUT', 'DELETE'])
# @api_key_required
@permission_classes([AllowAny])
def drug_detail(request, id, format=None):          # Define the view function, takes a request object, an id parameter, and an optional format argument (endpoint is api/drug/id/)
    try:
        drug = Drug.objects.get(pk=id)              # Try to get the drug with the specified id from the database
    except Drug.DoesNotExist:                       # If the drug does not exist
        return Response(status=status.HTTP_404_NOT_FOUND)   # Return a 404 (not found) response
    
    if request.method == 'GET':                 # Check if the request method is GET
        serializer = DrugSerializer(drug)       # Serialize the drug object (convert python object to JSON)
        return Response(serializer.data)        # Return the serialized data as a JSON response
    
    elif request.method == 'PUT':               # Check if the request method is PUT
        serializer = DrugSerializer(drug, data=request.data)        # Create a new DrugSerializer instance with the data from the request (JSON to python object)
        if serializer.is_valid():                                   # Check if the data is valid (data is from the API call body)
            serializer.save()                                       # Save the data to the database (update the drug object from the id provided)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':                            # Check if the request method is DELETE
        drug.delete()                                           # Delete the drug object from the database
        return Response(status=status.HTTP_204_NO_CONTENT)      # Return a 204 (no content) response
    
@api_view(['GET', 'POST'])
# @api_key_required
@permission_classes([AllowAny])
def prescription_list(request, format=None):
    
    if request.method == 'GET':
        prescriptions = Prescription.objects.all()
        
        user_id = request.query_params.get('user_id', None)
        if user_id is not None:
            prescriptions = prescriptions.filter(user_id=user_id)
            
        serializer = PrescriptionSerializer(prescriptions, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = PrescriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
# @api_key_required
@permission_classes([AllowAny])
def prescription_detail(request, id, format=None):
    try:
        prescription = Prescription.objects.get(pk=id)
    except Prescription.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = PrescriptionSerializer(prescription)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = PrescriptionSerializer(prescription, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        prescription.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([AllowAny])
def user_list(request, format=None):
    if request.method == 'GET':
        users = UserAccount.objects.all()
        
        user_name = request.query_params.get('user_name', None)
        if user_name is not None:
            user_name = user_name.strip('"').strip("'")
            names = user_name.split(' ')
            
            first_name = names[0] if len(names) >= 1 else ''
            last_name = names[-1] if len(names) >= 2 else ''
            
            if first_name and last_name:
                users = users.filter(Q(first_name__icontains=first_name) & Q(last_name__icontains=last_name))
            else:
                users = users.filter(Q(first_name__icontains=first_name) | Q(last_name__icontains=first_name))
            
        serializer = UserAccountSerializer(users, many=True)
        return Response(serializer.data)