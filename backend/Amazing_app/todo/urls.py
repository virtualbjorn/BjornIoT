from django.urls import include
from django.conf.urls import url
from .views import HomeViewSet

urlpatterns=[
    url(r'^todo/$', HomeViewSet.as_view({
        'get':'list',
    'post':'create',
    }))
]