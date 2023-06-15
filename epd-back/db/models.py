from django.db import models
from django.urls import reverse
from django.core.validators import FileExtensionValidator
from django.utils.translation import gettext_lazy as _
import uuid

# Create your models here.


class Email(models.Model):

    uuid = models.UUIDField(_("uuid"), primary_key=True, default=uuid.uuid4())
    file = models.FileField(_("file"), upload_to='emails/',
                            validators=[FileExtensionValidator(['eml'])])
    date_created = models.DateTimeField(_("date created"), auto_now=True)

    class Meta:
        verbose_name = _("email")
        verbose_name_plural = _("emails")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("email_detail", kwargs={"pk": self.pk})
