# Generated by Django 4.1.3 on 2022-12-06 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_tier_desc'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='salary',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='nutritionist',
            name='salary',
            field=models.FloatField(null=True),
        ),
    ]
