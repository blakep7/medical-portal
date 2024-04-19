from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None, user_type=None):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, user_type=user_type)

        user.set_password(password)
        user.save(using=self._db)

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    USER_TYPES = (
        ('patient', 'Patient'),
        ('doctor', 'Doctor'),
    )
    user_type = models.CharField(max_length=10, choices=USER_TYPES, blank=True, null=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_first_name(self):
        return self.first_name
    
    def get_last_name(self):
        return self.last_name
    
    def __str__(self):
        return self.email
    
class Drug(models.Model):
    active_ingrediant = models.CharField(max_length=255)
    purpose = models.CharField(max_length=255)
    brand_name = models.CharField(max_length=255)
    manufacturer_name = models.CharField(max_length=255)
    generic_name = models.CharField(max_length=255)
    product_ndc = models.CharField(max_length=255)
    route = models.CharField(max_length=255)
    substance_name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.brand_name + ' (' + self.product_ndc + ')'
    
class Prescription(models.Model):
    drug = models.ForeignKey(Drug, on_delete=models.CASCADE)
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    dosage = models.CharField(max_length=255)
    frequency = models.CharField(max_length=255)
    refills = models.IntegerField()
    start_date = models.DateField()
    end_date = models.DateField()
    notes = models.TextField()
    
    def __str__(self):
        return self.drug.brand_name + ' - ' + self.user.email