# Generated by Django 5.0.4 on 2024-04-19 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='role',
            field=models.CharField(choices=[('doctor', 'Doctor'), ('patient', 'Patient')], default='patient', max_length=10),
        ),
    ]