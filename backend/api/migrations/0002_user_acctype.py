# Generated by Django 4.1.3 on 2022-12-03 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='accType',
            field=models.CharField(default='A', max_length=1),
        ),
    ]
