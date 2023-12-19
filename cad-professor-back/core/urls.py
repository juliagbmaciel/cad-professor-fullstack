from django.urls import path
from .views import *


urlpatterns = [
    path("teacher", TeacherViewSet.as_view({"get":"list", "post":"create"})),
    path("teacher_id/<int:pk>", TeacherViewSet.as_view({"patch":"retrieve", 'delete':"destroy", 'get':"retrieve"}))
]


