from django.db import models

# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=100)
    image = models.TextField()
    type = models.CharField(max_length=100)
    calories = models.CharField(max_length=100)
    aprox_cost_to_make = models.CharField(max_length=100)
    allergy_status = models.BooleanField()
    steps = models.TextField()
    ingredients = models.TextField()
    notes = models.TextField()
    allergy_types = models.TextField()
    time_to_make = models.CharField(max_length=50, null=True)
    description = models.TextField()

    def __str__(self):
        return self.name

class MyRecipe(models.Model):
    name = models.CharField(max_length=100)
    image = models.TextField()
    type = models.CharField(max_length=100)
    calories = models.CharField(max_length=100)
    aprox_cost_to_make = models.CharField(max_length=100)
    allergy_status = models.BooleanField()
    steps = models.TextField()
    ingredients = models.TextField()
    notes = models.TextField()
    allergy_types = models.TextField()
    time_to_make = models.CharField(max_length=50, null=True)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    myRecipe = models.ForeignKey(MyRecipe, on_delete=models.CASCADE, related_name='my_recipes')
    recipes = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='recipes')