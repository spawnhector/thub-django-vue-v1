from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
from comments.forms import MakeCommentForm
from comments.models import Comments

def make_comment(request):
    if request.method == 'POST':
        form = MakeCommentForm(request.POST)
        if form.is_valid():
            message = form.cleaned_data['message']
            post_id = request.POST['post_id']
            Comments.objects.make_comment(user=request.user,message=message,post_id=post_id)
            messages.success(request, 'Comment made.')
            return HttpResponseRedirect(reverse('profile'))