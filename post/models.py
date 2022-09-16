from msilib.schema import Class
from django.db import models
# from likes.models import Likes
    
class PostManager(models.Manager):
    def create_post(self,title,body,**other_fields):
        user = other_fields.get('user')
        post = self.model(title=title,body=body)
        post.save()
        user.post.add(post.id)
        
class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField()
    body = models.TextField()
    likes = models.ManyToManyField('likes.Likes')
    date = models.DateTimeField(auto_now_add=True)
    objects = PostManager()
    class Meta:
        ordering = ['-date']
        
    def __str__(self):
        return self.title
