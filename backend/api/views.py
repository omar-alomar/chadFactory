from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer

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
    user = User.objects.get(username=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)