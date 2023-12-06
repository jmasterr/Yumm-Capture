from django.shortcuts import render
from .serializers import UserSerializer, MyRecipeSerializer, RecipeSerializer
from .models import User, MyRecipe, Recipe
from rest_framework import generics

# Create your views here.
class MyRecipeList(generics.ListCreateAPIView):
    queryset = MyRecipe.objects.all()
    serializer_class = MyRecipeSerializer

class MyRecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MyRecipe.objects.all()
    serializer_class = MyRecipeSerializer

class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer