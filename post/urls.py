from django.urls import path

from post.views import *
urlpatterns = [
    path('', make_post, name="makePost"),
]