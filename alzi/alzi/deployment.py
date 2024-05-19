import os
from .settings import *
from .settings import BASE_DIR

ALLOWED_HOSTS = [os.environ['WEBSITE_HOSTNAME']]
CORS_ORIGIN_WHITELIST = ['https://witty-pebble-0b4c4811e.4.azurestaticapps.net/', 'https://' + os.environ['WEBSITE_HOSTNAME'] ]
CSRF_TRUSTED_ORIGINS = ['https://' + os.environ['WEBSITE_HOSTNAME']]
CORS_ALLOWED_ORIGINS = [
    'https://witty-pebble-0b4c4811e.4.azurestaticapps.net',
    'https://' + os.environ['WEBSITE_HOSTNAME'],
]
CORS_ORIGIN_ALLOW_ALL = True
DEBUG = False

OPENAI_SECRET_KEY = os.environ['OPENAI_SECRET_KEY']

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

CORS_ALLOWED_ORIGINS = ['https://witty-pebble-0b4c4811e.4.azurestaticapps.net']

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
    },
}

STATIC_ROOT = BASE_DIR + '/static_files'

