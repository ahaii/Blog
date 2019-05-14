#! _*_ coding:utf8 _*_

from __future__ import unicode_literals

from django.db import models


class Article(models.Model):

    Default_IMG = '/static/img/TESLA.png'

    title = models.CharField(max_length=100, verbose_name='文章标题')
    brief = models.CharField(max_length=200, blank=True, null=True, verbose_name='文章简介')
    author = models.CharField(max_length=10,verbose_name='作者',default='ahaii')
    img = models.ImageField(upload_to='img/%Y/%m/%d', default=Default_IMG,
                            verbose_name='文章图片')
    body = models.TextField(verbose_name='文章内容')
    create_time = models.DateTimeField(verbose_name='创建时间')
    modify_time = models.DateTimeField(verbose_name='修改时间', auto_now=True)
    category = models.ForeignKey('Category', verbose_name='分类')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = '文章'


class Category(models.Model):

    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = '分类'
