# Generated by Django 5.0.4 on 2024-04-19 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_useraccount_role'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='user_type',
            field=models.CharField(blank=True, choices=[('patient', 'Patient'), ('doctor', 'Doctor')], max_length=10, null=True),
        ),
    ]
