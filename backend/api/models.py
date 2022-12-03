from django.db import models

# Create your models here.
class User(models.Model):
    username = models.TextField(max_length=30, unique=True)
    password = models.TextField(max_length=30, unique=False)
    email = models.EmailField(max_length=60, unique=True)
    address = models.TextField(max_length=60, unique=False)
    phone = models.TextField(max_length=20, unique=True)
    fname = models.TextField(max_length=15, unique=False)
    lname = models.TextField(max_length=20, unique=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    accType = models.CharField(max_length=1, unique=False, default='A')

    def __str__(self):
        return self.username