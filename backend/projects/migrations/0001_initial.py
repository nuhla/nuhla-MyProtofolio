# Generated by Django 3.1.4 on 2020-12-02 20:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutMe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('text', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='EducationAndCirtficate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('Date', models.DateField()),
                ('Period', models.IntegerField()),
                ('FieldOfStudy', models.CharField(max_length=200)),
                ('Discription', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='PersonalInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=200)),
                ('jobtitle', models.CharField(max_length=200)),
                ('photo', models.CharField(max_length=600)),
                ('email', models.CharField(max_length=30)),
                ('github', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('DateOfProject', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=2000)),
                ('GitGub', models.CharField(max_length=200)),
                ('Link', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='WorkHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('Startdate', models.DateField()),
                ('Finishdate', models.DateField()),
                ('Discription', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='ProjectProtfolio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('PhotoLink', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=2000)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.project')),
            ],
        ),
    ]
