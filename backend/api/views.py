from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/users',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of all users'
        },
        {
            'Endpoint': '/users/username',
            'method': 'GET',
            'body': None,
            'description': 'Returns an single user object by username'
        },
        {
            'Endpoint': '/admins/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of admins'
        },
        {
            'Endpoint': '/admins/username',
            'method': 'GET',
            'body': None,
            'description': 'Returns an single admin object by username'
        },
        {
            'Endpoint': '/members',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of members'
        },
        {
            'Endpoint': '/members/username',
            'method': 'GET',
            'body': None,
            'description': 'Returns an single member object'
        },
        {
            'Endpoint': '/trainers',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of trainers'
        },
        {
            'Endpoint': '/trainers/username',
            'method': 'GET',
            'body': None,
            'description': 'Returns an single trainer object by username'
        },
        {
            'Endpoint': '/nutritionists',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of nutritionists'
        },
        {
            'Endpoint': '/nutritionists/username',
            'method': 'GET',
            'body': None,
            'description': 'Returns an single nutritionist object by username'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateUser(request, pk):
    data = request.data
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request, pk):
    user = User.objects.get(id=pk)
    user.delete()
    return Response('User deleted successfully.')

@api_view(['GET'])
def login(request, pk):
    user = User.objects.get(username=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    data = request.data
    if (data['accType'] == 'T'):
        trainer = Trainer.objects.create(
            username=data['username'],
            password=data['password'],
            email=data['email'],
            address=data['address'],
            phone=data['phone'],
            fname=data['fname'],
            lname=data['lname'],
            accType=data['accType'],
            ssn=data['ssn'],
            salary=data['salary']
        )
        serializer = TrainerSerializer(trainer, many=False)

    elif (data['accType'] == 'N'):
        nutritionist = Nutritionist.objects.create(
            username=data['username'],
            password=data['password'],
            email=data['email'],
            address=data['address'],
            phone=data['phone'],
            fname=data['fname'],
            lname=data['lname'],
            accType=data['accType'],
            ssn=data['ssn'],
            salary=data['salary']
        )
        serializer = NutritionistSerializer(nutritionist, many=False)
    
    return Response(serializer.data)

@api_view(['GET'])
def getTier(request, pk):
    tier = Tier.objects.get(id=pk)
    serializer = TierSerializer(tier, many=False)
    return Response(serializer.data)