from django.db import models

# Create your models here.
class Link(models.Model):
    linkedin = models.URLField(max_length=200,null=True,blank=True)
    github = models.URLField(max_length=200,null=True,blank=True)
    facebook = models.URLField(max_length=200,null=True,blank=True)
    instagram = models.URLField(max_length=200,null=True,blank = True)

class About(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True)
    aboutme = models.TextField(null=True,blank=True)
    birthday = models.DateField(null=True,blank=True)
    phone = models.IntegerField(null=True,blank=True)
    city = models.CharField(max_length=100,null=True,blank=True)
    age = models.IntegerField(null=True,blank=True)
    degree = models.CharField(max_length=100,blank=True,null=True)
    gmail = models.EmailField(null=True,blank=True)
    freelance = models.CharField(max_length=100,null=True,blank=True)

class fact(models.Model):
    client = models.IntegerField()
    project = models.IntegerField()

class Project(models.Model):
    title = models.CharField(max_length=100,null=True,blank=True)
    subtitle = models.CharField(max_length=100,null=True,blank = True)
    details = models.TextField(null=True,blank=True)
    gitlink = models.URLField(null=True,blank=True)
    category = models.CharField(max_length=100,null=True,blank=True)
    client = models.CharField(max_length=100,null=True,blank=True)
    projecturl = models.URLField(max_length=100,null=True,blank=True)
    image = models.ImageField(upload_to='images/')
    sdate = models.DateField(null=True,blank=True)
    edate = models.DateField(null=True,blank=True)
    duration = models.IntegerField(null=True,blank=True)