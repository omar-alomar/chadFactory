# Generated by Django 4.1.3 on 2022-12-06 01:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_user_acctype'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nutritionist',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.user')),
                ('ssn', models.TextField(max_length=30, unique=True)),
            ],
            bases=('api.user',),
        ),
        migrations.CreateModel(
            name='Trainer',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.user')),
                ('ssn', models.TextField(max_length=30, unique=True)),
            ],
            bases=('api.user',),
        ),
    ]
