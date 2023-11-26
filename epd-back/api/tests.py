from rest_framework import status
from rest_framework.test import APITestCase


class TestFileUpload(APITestCase):

    def test_upload_email(self):

        tmp_file = open('api/tests/test.eml', 'rb')

        response = self.client.post(
            '/api/emails/', {'file': tmp_file}, format='multipart')

        self.assertEqual(response.status_code,
                         status.HTTP_201_CREATED)

    def test_upload_email_invalid(self):

        tmp_file = open('api/tests/test.txt', 'rb')

        response = self.client.post(
            '/api/emails/', {'file': tmp_file}, format='multipart')

        self.assertEqual(response.status_code,
                         status.HTTP_400_BAD_REQUEST)

    def test_get_emails(self):
        response = self.client.get('/api/emails/')
        self.assertEqual(response.status_code,
                         status.HTTP_200_OK)
