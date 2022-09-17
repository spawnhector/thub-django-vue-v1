from django import forms

from post.models import Post
class CreatePostForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['title'].widget.attrs['class'] = 'create-post-title effect-3'
        self.fields['body'].widget.attrs['class'] = 'create-post-body effect-3'
        self.fields['body'].label = 'Content'
        self.fields['body'].widget.attrs['rows'] = '1'
    class Meta:
        model=Post
        fields = ['title','body']
        
    