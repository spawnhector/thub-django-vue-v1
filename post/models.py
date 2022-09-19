from msilib.schema import Class
from django.db import models
# from likes.models import Likes
    
class PostManager(models.Manager):
    def create_post(self,user,title,body,category,post_type,**other_fields):
        post = self.model(user=user,title=title,body=body,post_type=post_type,category=category)
        post.save()
        user.post.add(post.id)
        
class Post(models.Model):
    user = models.ForeignKey('users.NewUser',related_name='post_owner', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)
    post_type = models.CharField(max_length=100,null=True)
    category = models.CharField(max_length=100,null=True)
    slug = models.SlugField()
    body = models.TextField()
    likes = models.ManyToManyField('likes.Likes')
    comments = models.ManyToManyField('comments.Comments')
    date = models.DateTimeField(auto_now_add=True)
    objects = PostManager()
    class Meta:
        ordering = ['-date']
        
    def __str__(self):
        return self.title
