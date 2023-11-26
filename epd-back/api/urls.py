from django.urls import path, include
from rest_framework import routers
from .views import EmailViewSet, MetricsApiView

router = routers.DefaultRouter()
router.register(r'emails', EmailViewSet)


urlpatterns = [
    path('metrics/', MetricsApiView.as_view({'get': 'list'})),
] + router.urls
