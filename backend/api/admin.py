from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(User)
admin.site.register(Member)
admin.site.register(Trainer)
admin.site.register(Nutritionist)

admin.site.register(Tier)