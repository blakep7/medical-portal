# Generated by Django 5.0.4 on 2024-04-29 04:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_useraccount_dob_alter_useraccount_height_in_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='physician',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='profile_picture_ref',
        ),
    ]
