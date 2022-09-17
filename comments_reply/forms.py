from django import forms

from comments_reply.models import CommentReply

class MakeCommentReplyForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['message'].widget.attrs['class'] = 'create-post-body effect-3'
        self.fields['message'].label = ''
        self.fields['message'].widget.attrs['rows'] = '1'
    class Meta:
        model=CommentReply
        fields = ['message']
        
    