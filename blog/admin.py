
from django.contrib import admin
from blog import models


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'create_time', 'modify_time', 'category',)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(models.Article, ArticleAdmin)
admin.site.register(models.Category, CategoryAdmin)