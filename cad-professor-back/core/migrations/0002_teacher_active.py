# Generated by Django 5.0 on 2023-12-19 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
