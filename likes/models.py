from django.db import models
from post.models import Post

class LikeManager(models.Manager):
    def store_like(self,user,post_id,**other_fields):
        post = Post(id=post_id)
        like = self.model(user=user)
        like.save()
        post.likes.add(like.id)

class Likes(models.Model):
    user = models.ForeignKey('users.NewUser', on_delete=models.CASCADE, null=True)
    objects = LikeManager()
    def __str__(self):
        return self.user