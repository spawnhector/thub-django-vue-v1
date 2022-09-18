from django.db import models

from comments.models import Comments

class ReplyManager(models.Manager):
    def make_reply(self,user,message,comment_id,**other_fields):
        comment = Comments(id=comment_id)
        reply = self.model(user=user,message=message)
        reply.save()
        comment.replies.add(reply.id)
        
class CommentReply(models.Model):
    user = models.ForeignKey('users.NewUser',related_name='reply_owner', on_delete=models.CASCADE, null=True)
    message = models.TextField()
    objects = ReplyManager()
    date = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['-date']
