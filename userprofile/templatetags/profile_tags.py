import json
from django import template
import datetime
from users.models import NewUser
register = template.Library()

@register.simple_tag
def current_time(format_string):
    return datetime.datetime.now().strftime(format_string)

@register.simple_tag
def to_json(obj):
    newList = []
    for comments in list(obj):
        user = NewUser.objects.get(id=comments['user_id'])
        newList.append({
            'date': comments['date'],
            'id': comments['id'],
            'message': comments['message'],
            'user': {
                'full_name': user.full_name,
                'username': user.user_name,
                'avatar': 'https://randomuser.me/api/portraits/med/men/19.jpg'
            }
        })
    data = list(newList)
    return json.dumps(data, indent=4, sort_keys=True, default=str)