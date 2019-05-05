from django.http import HttpResponse
from django.shortcuts import render
from django.core import serializers
from blog.models import Category, Article


def index(request):
    categories_obj = Category.objects.all()
    articles_obj = Article.objects.all().order_by('-modify_time')
    return render(request, 'index.html', {'categories': categories_obj, 'articles': articles_obj})


def article_detail(request, article_id):
    article_obj = Article.objects.filter(id=article_id)
    return render(request, 'article_detail.html', {'article_obj': article_obj})


def category_detail(request, category_id):
    articles_obj = Article.objects.filter(category_id=category_id)
    serializer_data = serializers.serialize("json", articles_obj)
    print(serializer_data)
    return HttpResponse(serializer_data)
