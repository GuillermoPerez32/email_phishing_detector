from django.db import models
from django.urls import reverse
from django.core.validators import FileExtensionValidator
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from .utils.email import get_features, get_mail_data, predict, get_prediction_features
import uuid

# Create your models here.


class Email(models.Model):

    uuid = models.UUIDField(_("uuid"), primary_key=True,
                            default=uuid.uuid4, unique=True)
    file = models.FileField(_("file"), upload_to='emails/',)
    date_created = models.DateTimeField(_("date created"), auto_now=True)
    phishing = models.CharField(_("phishing"), max_length=10)

    class Meta:
        verbose_name = _("email")
        verbose_name_plural = _("emails")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("email_detail", kwargs={"pk": self.pk})

    @property
    def features(self):
        features = get_features(self.file.path)
        return features

    @property
    def data(self):
        features = get_mail_data(self.file.path)
        return features

    @property
    def predict_features(self):
        features = get_prediction_features(self.file.path)
        return features


@receiver(post_save, sender=Email)
def make_prediction(sender, instance, created, **kwargs):
    if created:
        try:
            predict_features = instance.predict_features
            prediction = predict(predict_features)
            instance.phishing = prediction
            instance.save()
        except Exception as e:
            instance.phishing = 'error'
            instance.save()
            print(e)
