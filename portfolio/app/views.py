from django.shortcuts import render,redirect
from .models import *
from django.views.generic import ListView,DetailView
from .forms import ProjectForm
# Create your views here.
def index(request):
    links = Link.objects.all()
    context = {
        'links':links
    }
    return render(request,'home.html',context)

def about(request):
    abouts = About.objects.all()
    facts = fact.objects.all()
    context = {
        'abouts':abouts,
        'facts':facts,
    }
    return render(request,'about.html',context)

# def projects(request):
#     return render(request,'projects.html')

class Projects(ListView):
    model = Project
    template_name = 'projects.html'
    context_object_name = 'projects'

# def details(request):
#     return render(request,'details.html')

class ProjectDetail(DetailView):
    model = Project
    template_name = 'details.html'

def addproject(request):
    if request.method == 'POST':
        form = ProjectForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return redirect('projects')
    else:
        form = ProjectForm()
        context ={
            'form':form
        }
        return render(request,'add.html',context)

def contact(request):
    return render(request,'contact.html')