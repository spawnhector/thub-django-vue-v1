from django.db import models

from post.models import Post

class CommentManager(models.Manager):
    def make_comment(self,user,message,post_id,**other_fields):
        post = Post(id=post_id)
        comment = self.model(user=user,message=message)
        comment.save()
        post.comments.add(comment.id)
      
class Comments(models.Model):
    user = models.ForeignKey('users.NewUser',related_name='comment_owner', on_delete=models.CASCADE, null=True)
    message = models.TextField()
    replies = models.ManyToManyField('comments_reply.CommentReply')
    objects = CommentManager()
    date = models.DateTimeField(auto_now_add=True)
    