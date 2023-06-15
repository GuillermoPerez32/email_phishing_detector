from django.urls import path, include
from rest_framework import routers
from .views import EmailViewSet

router = routers.DefaultRouter()
router.register(r'emails', EmailViewSet)

urlpatterns = router.urls
