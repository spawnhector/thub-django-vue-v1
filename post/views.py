from django.shortcuts import render
from django.views import View
from post.forms import CreatePhotoVideoPostForm, CreatePostForm
from post.models import Post
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages

from post_image.models import PostImages

def storeTextPost(request,post_type):
    form = CreatePostForm(request.POST)
    if form.is_valid():
        title = form.cleaned_data['title']
        body = form.cleaned_data['body']
        post_category = request.POST['post_category']
        Post.objects.create_text_post(user=request.user,title=title,body=body,post_type=post_type,category=post_category)

def storePhotoVideoPost(request,post_type):
    form = CreatePhotoVideoPostForm(request.POST,request.FILES)
    if form.is_valid():
        file = form.cleaned_data['file']
        post_category = request.POST['post_category']
        post = Post.objects.create_photo_video_post(user=request.user,post_type=post_type,category=post_category)
        postImage = PostImages.objects.store_post_images(file=file,post_id=post.id)
        
def make_post(request):
    if request.method == 'POST':
        post_type = request.POST['post_type']
        if post_type == 'text':
            storeTextPost(request=request,post_type=post_type)
        if post_type == 'photo_video':
            storePhotoVideoPost(request=request,post_type=post_type)
        
        messages.success(request, 'Post Created')
        return HttpResponseRedirect(reverse('profile'))
    return HttpResponseRedirect(reverse('profile'))