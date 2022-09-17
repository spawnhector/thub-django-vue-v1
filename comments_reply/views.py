from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages

from comments_reply.forms import MakeCommentReplyForm
from comments_reply.models import CommentReply
from post.models import Post

def make_reply(request):
    if request.method == 'POST':
        form = MakeCommentReplyForm(request.POST)
        if form.is_valid():
            message = form.cleaned_data['message']
            comment_id = request.POST['comment_id']
            # Post.objects.all().delete()
            CommentReply.objects.make_reply(user=request.user,message=message,comment_id=comment_id)
            messages.success(request, 'Comment reply made.')
            return HttpResponseRedirect(reverse('profile'))