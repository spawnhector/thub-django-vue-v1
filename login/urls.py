from django.urls import path
from .views import index,loginUsers,signUpUsers,logout
urlpatterns = [
    path('', index, name="index"),
    path('login/', loginUsers, name="loginUsers"),
    path('signup/', signUpUsers, name="signUpUsers"),
    path('logout/', logout, name="logout"),
]