from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Recipe, MyRecipe, User
admin.site.register(User)
admin.site.register(Recipe)
admin.site.register(MyRecipe)