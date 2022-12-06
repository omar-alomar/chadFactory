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

class Trainer(User):
    ssn = models.TextField(max_length=30, unique=True)
    salary = models.FloatField(unique=False, null=True)

    def __str__(self):
      return str(self.id)


class Nutritionist(User):
    ssn = models.TextField(max_length=30, unique=True)
    salary = models.FloatField(unique=False, null=True)

    def __str__(self):
      return str(self.id)

class Member(User):
    tier = models.IntegerField(null=True)
    trainerId = models.ForeignKey(Trainer, null=True, on_delete=models.SET_NULL)
    nutritionistId = models.ForeignKey(Nutritionist, null=True, on_delete=models.SET_NULL)

class Tier(models.Model):
    tier = models.IntegerField(unique=True)
    monthlyFee = models.FloatField(unique=False)
    desc = models.TextField(max_length=256, unique=False, null=True)