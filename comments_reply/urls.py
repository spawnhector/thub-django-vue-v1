from django.urls import path
from comments_reply.views import make_reply

urlpatterns = [
    path('', make_reply, name="makeCommentReply"),
]