from django.urls import path

from likes.views import like_post

urlpatterns = [
    path('', like_post, name="likePost"),
]