from django.shortcuts import redirect,render
from users.models import NewUser
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

def signUpUsers(request):
    full_name = request.POST['fullName']
    user_name = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    createUser = NewUser.objects.create_user(email,user_name,full_name,password)
    createUser.is_staff=False
    createUser.is_superuser=False
    createUser.is_active=True
    createUser.save()  
    return render(request, 'login/index.html', {
        "data": {
            'message': 'user created'
        }
    })

def loginUsers(request):
    email = request.POST['email']
    passw = request.POST['password']
    user = authenticate(request,email=email,password=passw)
    if user is not None:
        login(request,user)  
        return redirect('/')
    else:
        messages.error(request,"Invalid credentials")  
        return render(request, 'login/index.html', {
            "data": {
            }
        })
        
def logout_request(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("/")     

def index(request):          
    return render(request, 'login/index.html', {
        "data": {
        }
    })