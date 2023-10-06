from rest_framework import serializers
from db.models import Email


class EmailSerializer(serializers.ModelSerializer):

    features = serializers.DictField()
    data = serializers.DictField()

    class Meta:
        model = Email
        fields = '__all__'
        read_only_fields = ['uuid', 'date_created', 'features', 'data']
