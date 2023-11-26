from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework import viewsets
from rest_framework.response import Response
from db.models import Email
from .serializers import EmailSerializer, EmailDetailSerializer, MetricsSerializer
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


class MetricsApiView(viewsets.ViewSet):
    def list(self, request):
        total = Email.objects.count()
        count_phishing = Email.objects.filter(phishing='yes').count()
        count_not_phishing = Email.objects.filter(phishing='no').count()
        data = {
            'total_phishing': count_phishing,
            'total_not_phishing': count_not_phishing,
            'total': total
        }
        serializer = MetricsSerializer(data)
        return Response(serializer.data)
