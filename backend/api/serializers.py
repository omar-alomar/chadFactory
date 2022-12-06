from rest_framework.serializers import ModelSerializer
from .models import *

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields= '__all__'

class TrainerSerializer(ModelSerializer):
    class Meta:
        model = Trainer
        fields= '__all__'

class NutritionistSerializer(ModelSerializer):
    class Meta:
        model = Nutritionist
        fields= '__all__'

class MemberSerializer(ModelSerializer):
    class Meta:
        model = Member
        fields= '__all__'

class TierSerializer(ModelSerializer):
    class Meta:
        model = Tier
        fields= '__all__'