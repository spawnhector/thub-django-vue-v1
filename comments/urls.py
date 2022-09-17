from django.urls import path
from comments.views import make_comment

urlpatterns = [
    path('', make_comment, name="makeComments"),
]