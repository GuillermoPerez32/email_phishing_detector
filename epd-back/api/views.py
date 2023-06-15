from rest_framework import viewsets
from db.models import Email
from .serializers import EmailSerializer

# Create your views here.


class EmailViewSet(viewsets.ModelViewSet):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer
    permission_classes = []
