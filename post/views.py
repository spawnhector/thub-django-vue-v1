from django.shortcuts import render
from django.views import View
from post.forms import CreatePostForm
from post.models import Post
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
    
def make_post(request):
    if request.method == 'POST':
        form = CreatePostForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data['title']
            body = form.cleaned_data['body']
            post_type = request.POST['post_type']
            Post.objects.create_post(user=request.user,title=title,body=body,post_type=post_type)
            messages.success(request, 'Post Created.')
            return HttpResponseRedirect(reverse('profile'))
    return HttpResponseRedirect(reverse('profile'))