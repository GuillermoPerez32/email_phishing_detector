from rest_framework import serializers
from db.models import Email


class EmailSerializer(serializers.ModelSerializer):

    data = serializers.DictField(read_only=True)

    class Meta:
        model = Email
        fields = '__all__'
        read_only_fields = ['uuid', 'date_created',
                            'data', 'phishing']


class EmailDetailSerializer(serializers.ModelSerializer):

    features = serializers.DictField(read_only=True)
    data = serializers.DictField(read_only=True)

    class Meta:
        model = Email
        fields = '__all__'
        read_only_fields = ['uuid', 'date_created',
                            'features', 'data', 'phishing']
