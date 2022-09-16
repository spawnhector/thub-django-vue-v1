from django.shortcuts import render
from django.views import View
from post.forms import CreatePostForm
from post.models import Post
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages

class MakePostClass(View):
    def get(self, request):
        return HttpResponse('make post')
    
    def post(self, request):
        return HttpResponseRedirect(reverse('profile'))
    
    
def make_post(request):
    if request.method == 'POST':
        form = CreatePostForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data['title']
            body = form.cleaned_data['body']
            Post.objects.create_post(title,body, user=request.user)
            messages.success(request, 'Post Created.')
            return HttpResponseRedirect(reverse('profile'))
    return HttpResponseRedirect(reverse('profile'))