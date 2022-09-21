from msilib.schema import Class
from django.db import models

    
class PostManager(models.Manager):
    def create_text_post(self,user,title,body,category,post_type,**other_fields):
        post = self.model(user=user,title=title,body=body,post_type=post_type,category=category)
        post.save()
        user.post.add(post.id)
    def create_photo_video_post(self,user,category,post_type,**other_fields):
        title = other_fields.get('title')
        post = self.model(user=user,title=title,post_type=post_type,category=category)
        post.save()
        user.post.add(post.id)
        return post
        
class Post(models.Model):
    user = models.ForeignKey('users.NewUser',related_name='post_owner', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200,null=True)
    post_type = models.CharField(max_length=100,null=True)
    category = models.CharField(max_length=100,null=True)
    slug = models.SlugField()
    body = models.TextField()
    likes = models.ManyToManyField('likes.Likes')
    images = models.ManyToManyField('post_image.PostImages')
    comments = models.ManyToManyField('comments.Comments')
    date = models.DateTimeField(auto_now_add=True)
    objects = PostManager()
    class Meta:
        ordering = ['-date']
        
    def __str__(self):
        return self.title
