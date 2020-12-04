from django.db import models
# Create your models here.

# add this


class Project(models.Model):
    title = models.CharField(max_length=200)
    DateOfProject = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)
    GitGub = models.CharField(max_length=200)
    Link = models.CharField(max_length=200)

    def _str_(self):
        return self.title


class ProjectProtfolio(models.Model):
    title = models.CharField(max_length=200)
    PhotoLink = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def _str_(self):
        return self.title

class PersonalInfo(models.Model):
    fullname = models.CharField(max_length=200)
    jobtitle = models.CharField(max_length=200)
    photo = models.CharField(max_length=600)
    email = models.CharField(max_length=30)
    github = models.CharField(max_length=30)
    phone = models.CharField(max_length=20)
    def _str_(self):
        return self.title
    
    
class AboutMe(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField(max_length=700)
    def _str_(self):
        return self.title
    
class WorkHistory(models.Model):
    title = models.CharField(max_length=200)
    Startdate = models.DateField()
    Finishdate = models.DateField()
    Discription = models.CharField(max_length=1000)
    def _str_(self):
        return self.title
    
class EducationAndCirtficate(models.Model):
    title = models.CharField(max_length=200)
    Date = models.DateField()
    Period =  models.IntegerField()
    FieldOfStudy = models.CharField(max_length=200)
    Discription = models.CharField(max_length=200)
    
    def _str_(self):
        return self.title