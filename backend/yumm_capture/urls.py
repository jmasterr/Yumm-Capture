from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('my_recipes/', views.MyRecipeList.as_view(), name='my_recipes_list'),
    path('my_recipe/<int:pk>', views.MyRecipeDetail.as_view(), name='my_recipe_detail'),
    path('recipes/', views.RecipeList.as_view(), name='recipes_list'),
    path('recipe/<int:pk>', views.RecipeDetail.as_view(), name='recipe_detail'),
    path('users/', views.UserList.as_view(), name='users_list'),
    path('user/<int:pk>', views.RecipeDetail.as_view(), name='user_detail'),
]