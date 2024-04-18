from django.urls import path
from . import views

urlpatterns = [
    path(
        # This is the home page
        '', 
        # This points to a function 'index' found views.py
        views.index
        # This is the name of the path
        name='index')

]