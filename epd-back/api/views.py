from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from db.models import Email
from .serializers import EmailSerializer, EmailDetailSerializer
from db.utils.email import predict

# Create your views here.


class EmailViewSet(viewsets.ModelViewSet):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer
    permission_classes = []

    def perform_create(self, serializer):
        return serializer.save(phishing='pending')

    def retrieve(self, request, pk=None):
        queryset = Email.objects.all()
        email = get_object_or_404(queryset, pk=pk)
        serializer = EmailDetailSerializer(email)
        return Response(serializer.data)
