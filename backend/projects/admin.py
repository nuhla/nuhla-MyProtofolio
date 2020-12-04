from django.contrib import admin

from .models import Project , ProjectProtfolio,AboutMe,PersonalInfo,ProjectProtfolio ,EducationAndCirtficate ,WorkHistory# add this


class ProjectsAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'description',
                    'DateOfProject', 'GitGub', 'Link')  # add this
    
class ProjectProtfolioAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'PhotoLink',
                    'description', 'project')  # add this
    
class EducationAndCirtficateAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'Date',
                    'Period', 'FieldOfStudy','Discription')  # add this

class WorkHistoryAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'Startdate',
                    'Finishdate','Discription')  # add this
    
class AboutMeAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'text','id'
                    )  # add this
class PersonalInfoAdmin(admin.ModelAdmin):  # add this
    list_display = ('fullname', 'jobtitle','photo','email','github','phone')  # add this



# Register your models here.
admin.site.register(Project, ProjectsAdmin)
admin.site.register(ProjectProtfolio, ProjectProtfolioAdmin)
admin.site.register(EducationAndCirtficate, EducationAndCirtficateAdmin)
admin.site.register(WorkHistory, WorkHistoryAdmin)
admin.site.register(AboutMe, AboutMeAdmin)
admin.site.register(PersonalInfo, PersonalInfoAdmin)

