from rest_framework.routers import DefaultRouter
from projects.views import ProjectView ,ProjectProtfolioView,PersonalInfoView,AboutMeView,WorkHistoryView,EducationAndCirtficateView

router = DefaultRouter()
router.register(r'projects', ProjectView, basename='Projects')
router.register(r'educationAndCirtficate', EducationAndCirtficateView, basename='EducationAndCirtficate')
router.register(r'aboutMe', AboutMeView, basename='AboutMe')
router.register(r'jobHistory', WorkHistoryView, basename='JobHistory')
router.register(r'personalIfo', PersonalInfoView, basename='PersonalInformation')
router.register(r'protfolio', ProjectProtfolioView, basename='Protfolio')
urlpatterns = router.urls