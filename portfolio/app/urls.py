from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name="home"),
    path('about/',views.about,name="about"),
    path('add/projects/',views.addproject,name="add-projects"),
    path('projects/',views.Projects.as_view(),name="projects"),
    path('projects/<int:pk>/',views.ProjectDetail.as_view(),name="project-details"),
    path('contact/',views.contact,name="contact"),
]