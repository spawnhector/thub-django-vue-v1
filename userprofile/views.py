from django.shortcuts import render
from post.forms import CreatePostForm

from tempData import tempData
def profile(request):
    return render(request,'profile/index.html',{
        "data": tempData(),
        "form": CreatePostForm()
    })
