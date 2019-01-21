from django.http import HttpResponse
from django.shortcuts import render
from django.core import serializers
from blog.models import Category, Article


def index(request):
    categorys_obj = Category.objects.all()
    articles_obj = Article.objects.all().order_by('-modify_time')
    return render(request, 'index.html', {'categorys': categorys_obj, 'articles': articles_obj})


def category_detail(request, cid):
    articles_obj = Article.objects.filter(category_id=cid)
    serializer_data = serializers.serialize("json", articles_obj)
    print(serializer_data)
    return HttpResponse(serializer_data)
