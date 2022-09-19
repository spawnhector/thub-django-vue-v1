from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
from likes.models import Likes

def like_post(request):
    if request.method == 'POST':
        post_id = request.POST['post_id']
        result = Likes.objects.store_like(user=request.user,post_id=post_id)
        messages.success(request, result)
        return HttpResponseRedirect(reverse('profile'))