# Generated by Django 3.1.4 on 2020-12-03 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutme',
            name='text',
            field=models.CharField(max_length=700),
        ),
    ]