urlpatterns = [
    # ... your other url patterns ...
    path('social-auth/', include('social_django.urls', namespace='social')),
]