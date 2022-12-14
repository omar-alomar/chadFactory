# Generated by Django 4.1.3 on 2022-12-06 04:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_member_salary_trainer_salary'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='member',
            name='ssn',
        ),
        migrations.AddField(
            model_name='member',
            name='nutritionistId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.nutritionist'),
        ),
        migrations.AddField(
            model_name='member',
            name='tier',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='member',
            name='trainerId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.trainer'),
        ),
    ]
