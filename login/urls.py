from django.urls import path
from .views import index,loginUsers,signUpUsers,logout_request
urlpatterns = [
    path('', index, name="authIndex"),
    path('login/', loginUsers, name="loginUsers"),
    path('signup/', signUpUsers, name="signUpUsers"),
    path('logout/', logout_request, name="logout"),
]