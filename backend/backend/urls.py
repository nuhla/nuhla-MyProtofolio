"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include ,re_path                # add this
from rest_framework import routers                    # add this
from projects import views  as projectView
from . import  views
# from projects import urls
router = routers.DefaultRouter()                      # add this
# router.register('projects', views.ProjectView, 'projects') 



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("projects.urls")),
    # path('api/', include(router.urls)),
     path('', views.catchall),
    path('projects', views.catchall),
    path('work', views.catchall),
    path('education', views.catchall),
    path('accounts/', include('allauth.urls')),
]
