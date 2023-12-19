from rest_framework import serializers
from .models import *


class TeacherSerializers(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'
        

    