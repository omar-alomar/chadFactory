from django.urls import path 
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('users/', views.getUsers, name='users'),
    path('users/<str:pk>/update/', views.updateUser, name='update-note'),
    path('users/<str:pk>/delete/', views.deleteUser, name='delete-note'),
    
    path('users/<str:pk>/', views.getUser, name='user')
]