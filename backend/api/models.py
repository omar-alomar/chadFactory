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
   
class Employee(models.Model):
    SSN = models.TextField(max_length=30, unique=True)
    Salary = models.TextField(max_length=30, unique=False)
    YearsOfExp = models.TextField(max_length=30, unique=False)
    MgrSsn = models.TextField(max_length=30, unique=False)

class Member(models.Model):
    Report_Num = models.TextField(max_length=20, unique=True)
    Tier = models.TextField(max_length=15, unique=False)
    Start_Date = models.TextField(max_length=15, unique=False)
    End_Date = models.TextField(max_length=15, unique=False)
    EndGoal = models.TextField(max_length=15, unique=False)
    Trainer_ID = models.TextField(max_length=15, unique=False)
    Nutri_ID = models.TextField(max_length=15, unique=False)


class Guest(models.Model):
    Mem_ID = models.TextField(max_length=15, unique=False)
    Guest_ID = models.TextField(max_length=15, unique=True)
    Guest_Date = models.TextField(max_length=15, unique=False)
    
class Nutritionist(models.Model):
    ID_Nutri = models.TextField(max_length=15, unique=True)
    Ssn_Nutri = models.TextField(max_length=15, unique=False)
 
class Report(models.Model):
    ID_Mem_R = models.TextField(max_length=15, unique=False)
    Num_R = models.TextField(max_length=15, unique=True)
    Activity = models.TextField(max_length=15, unique=False)
    Personal_Best = models.TextField(max_length=15, unique=False)
    PB_Date = models.TextField(max_length=15, unique=False)
    
class Other_Staff(models.Model):
    ID_Other = models.TextField(max_length=15, unique=True)
    Ssn_Other = models.TextField(max_length=15, unique=True)
    Staff_Type = models.TextField(max_length=15, unique=False)
    
class Schedule(models.Model):
    ID_Schedule = models.TextField(max_length=15, unique=True)
    SSN_Schedule = models.TextField(max_length=15, unique=False)
    Work_days = models.TextField(max_length=15, unique=False)
    Shifts = models.TextField(max_length=15, unique=False)
    
class Trainer(models.Model):
    ID_Trainer = models.TextField(max_length=15, unique=False)
    SSN_Trainer = models.TextField(max_length=15, unique=False)
    Skill_Level = models.TextField(max_length=15, unique=False)
    
    def __str__(self):
        return self.username

