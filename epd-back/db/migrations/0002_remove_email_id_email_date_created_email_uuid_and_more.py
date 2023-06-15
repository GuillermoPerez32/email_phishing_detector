# Generated by Django 4.2.2 on 2023-06-15 14:07

import django.core.validators
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='email',
            name='id',
        ),
        migrations.AddField(
            model_name='email',
            name='date_created',
            field=models.DateTimeField(auto_now=True, verbose_name='date created'),
        ),
        migrations.AddField(
            model_name='email',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('268c3f39-79d4-4071-882d-1eb28c545bcb'), primary_key=True, serialize=False, verbose_name='uuid'),
        ),
        migrations.AlterField(
            model_name='email',
            name='file',
            field=models.FileField(upload_to='emails/', validators=[django.core.validators.FileExtensionValidator(['eml'])], verbose_name='file'),
        ),
    ]
