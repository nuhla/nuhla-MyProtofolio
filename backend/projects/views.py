from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer,ProjectProtfolioSerializer,PersonalInfoSerializer,AboutMeSerializer,WorkHistorySerializer ,EducationAndCirtficateSerializer     # add this
from .models import Project,ProjectProtfolio, PersonalInfo,AboutMe,WorkHistory, EducationAndCirtficate              # add this
from django.views.generic import TemplateView

class ProjectView(viewsets.ModelViewSet):       # add this
    serializer_class = TodoSerializer          # add this
    queryset = Project.objects.all()

class ProjectProtfolioView(viewsets.ModelViewSet):       # add this
    serializer_class = ProjectProtfolioSerializer          # add this
    queryset = ProjectProtfolio.objects.all()

class PersonalInfoView(viewsets.ModelViewSet):       # add this
    serializer_class = PersonalInfoSerializer          # add this
    queryset = PersonalInfo.objects.all()
    
class AboutMeView(viewsets.ModelViewSet):       # add this
    serializer_class = AboutMeSerializer          # add this
    queryset = AboutMe.objects.all()

class WorkHistoryView(viewsets.ModelViewSet):       # add this
    serializer_class = WorkHistorySerializer          # add this
    queryset = WorkHistory.objects.all()
    
class EducationAndCirtficateView(viewsets.ModelViewSet):       # add this
    serializer_class = EducationAndCirtficateSerializer          # add this
    queryset = EducationAndCirtficate.objects.all()
