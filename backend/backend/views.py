from django.shortcuts import render
from rest_framework import viewsets          # add this
     # add this
                   # add this
from django.views.generic import TemplateView


catchall = TemplateView.as_view(template_name='index.html')