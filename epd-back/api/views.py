from rest_framework import viewsets
from db.models import Email
from .serializers import EmailSerializer
from db.utils.email import predict

# Create your views here.


class EmailViewSet(viewsets.ModelViewSet):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer
    permission_classes = []

    def perform_create(self, serializer):
        return serializer.save(phishing=predict())
