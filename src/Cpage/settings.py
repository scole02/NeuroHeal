from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

SECRET_KEY = os.getenv('DJANGO_SECRET_KEY')
DATABASES = {
    'default': {
        'ENGINE': 'django',
        'NAME': 'Cluster0',
        # If you're using MongoDB Atlas, specify connection string like this:
        'CLIENT': {
           'host': 'mongodb+srv://Laks:<password>@cluster0.n2wztiz.mongodb.net/?retryWrites=true&w=majority'
        }
    }
}

INSTALLED_APPS = [
    # ... your other apps ...
    'social_django',
]

AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '744521071622-nct40pk2aek3ppiduk17qrcf667gmf97.apps.googleusercontent.com'    # Google Consumer Key
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = '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'  # Google Consumer Secret 