from django.db import models
from post.models import Post

class PostImagesManager(models.Manager):
    def store_post_images(self,file,post_id,**other_fields):
        post = Post(id=post_id)
        image = self.model(file=file)
        image.save()
        post.images.add(image.id)
        
    
class PostImages(models.Model):
    file = models.ImageField(upload_to='images/')
    objects = PostImagesManager()
    def __str__(self):
        return self.file
