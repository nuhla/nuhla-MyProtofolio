# todo/serializers.py

from rest_framework import serializers
from .models import Project , EducationAndCirtficate,WorkHistory,AboutMe,PersonalInfo,ProjectProtfolio


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'description',
                  'DateOfProject', 'GitGub', 'Link')
        
class EducationAndCirtficateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationAndCirtficate
        fields = ('id', 'title', 'Date',
                  'Period', 'FieldOfStudy', 'Discription')

class WorkHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkHistory
        fields = ('id', 'title', 'Startdate',
                  'Finishdate','Discription')

class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = ('id', 'title', 'text')

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ('id', 'fullname', 'jobtitle','photo','email','github','phone')

class ProjectProtfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectProtfolio
        fields = ('id', 'title', 'PhotoLink','description','project')