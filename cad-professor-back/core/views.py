from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class TeacherViewSet(viewsets.ModelViewSet):
    serializer_class = TeacherSerializers
    queryset = Teacher.objects.all()
    permission_classes = [IsAuthenticated]
