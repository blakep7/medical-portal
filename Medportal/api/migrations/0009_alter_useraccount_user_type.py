# Generated by Django 5.0.3 on 2024-04-19 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_useraccount_user_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='user_type',
            field=models.CharField(default=''),
        ),
    ]