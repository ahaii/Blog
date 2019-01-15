from django.http import HttpResponse
from django.shortcuts import render
from blog.models import Category


def index(request):
    categorys = Category.objects.all()
    return render(request, 'index.html', {'categorys': categorys})

