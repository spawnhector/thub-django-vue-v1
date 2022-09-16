from django import forms

from post.models import Post
class CreatePostForm(forms.ModelForm):
    # title = forms.CharField(max_length=200)
    # body = forms.CharField(max_length=200)
    class Meta:
        model=Post
        fields = ['title','body']
        
    