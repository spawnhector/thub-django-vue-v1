from django.shortcuts import render
from comments_reply.forms import MakeCommentReplyForm
from post.forms import CreatePhotoVideoPostForm, CreatePostForm
from comments.forms import MakeCommentForm
from tempData import tempData

def profile(request):
    return render(request,'profile/index.html',{
        "data": tempData(),
        "form": CreatePostForm().render('django/forms/widgets/createTextPostForm.html'),
        "photoVideoPostForm": CreatePhotoVideoPostForm(),
        "commentForm": MakeCommentForm(),
        "commentReplyForm": MakeCommentReplyForm(),
    })
