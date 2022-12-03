from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30, unique=False)
    email = models.EmailField(max_length=60, unique=True)
    address = models.CharField(max_length=60, unique=False)
    phone = models.CharField(max_length=20, unique=True)
    fname = models.CharField(max_length=15, unique=False)
    lname = models.CharField(max_length=20, unique=False)
    created = models.DateTimeField(auto_now_add=True)