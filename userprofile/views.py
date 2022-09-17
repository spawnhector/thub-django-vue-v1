from django.shortcuts import render
from comments_reply.forms import MakeCommentReplyForm
from post.forms import CreatePostForm
from comments.forms import MakeCommentForm

from tempData import tempData
def profile(request):
    return render(request,'profile/index.html',{
        "data": tempData(),
        "form": CreatePostForm(),
        "commentForm": MakeCommentForm(),
        "commentReplyForm": MakeCommentReplyForm()
    })
