from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# from post.models import Post

class CustomAccountManager(BaseUserManager):
    def create_superuser(self,email,user_name,full_name,password,**other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)
        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assign to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assign to is_superuser=True.')
        return self.create_user(email,user_name,full_name,password,**other_fields)
    
    def create_user(self,email,user_name,full_name,password,**other_fields):
        if not email:
            raise ValueError(_('You must specify your email'))
        
        email = self.normalize_email(email)
        user = self.model(email=email,user_name=user_name,full_name=full_name, **other_fields)
        user.set_password(password)
        user.save()
        return user
    
class NewUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    full_name = models.CharField(max_length=150)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_('aboout'),max_length=150, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    post = models.ManyToManyField('post.Post')
    objects = CustomAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name','full_name']
    def __str__(self):
        return self.user_name
    