# Generated by Django 5.0 on 2023-12-06 02:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyRecipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.TextField()),
                ('type', models.CharField(max_length=100)),
                ('calories', models.CharField(max_length=100)),
                ('aprox_cost_to_make', models.CharField(max_length=100)),
                ('allergy_status', models.BooleanField()),
                ('steps', models.TextField()),
                ('ingredients', models.TextField()),
                ('notes', models.TextField()),
                ('allergy_types', models.TextField()),
                ('time_to_make', models.CharField(max_length=50, null=True)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.TextField()),
                ('type', models.CharField(max_length=100)),
                ('calories', models.CharField(max_length=100)),
                ('aprox_cost_to_make', models.CharField(max_length=100)),
                ('allergy_status', models.BooleanField()),
                ('steps', models.TextField()),
                ('ingredients', models.TextField()),
                ('notes', models.TextField()),
                ('allergy_types', models.TextField()),
                ('time_to_make', models.CharField(max_length=50, null=True)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
                ('myRecipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_recipes', to='yumm_capture.myrecipe')),
                ('recipes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to='yumm_capture.recipe')),
            ],
        ),
    ]
