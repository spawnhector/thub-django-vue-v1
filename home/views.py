from django.shortcuts import render
from tempData import tempData

def home(request):
    return render(request, 'landing/index.html', {
        "data": tempData()
    })
