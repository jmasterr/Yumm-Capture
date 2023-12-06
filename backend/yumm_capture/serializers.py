from rest_framework import serializers
from .models import Recipe, MyRecipe, User

class MyRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyRecipe
        fields = '__all__'
    
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    myRecipe = MyRecipeSerializer()
    recipes = RecipeSerializer()

    class Meta:
        model = User
        fields = '__all__' 