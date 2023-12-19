from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager
# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=255)
    nif = models.CharField(max_length=20)
    image = models.ImageField(upload_to="teacher_photos/%Y/%m/%d")
    active = models.BooleanField(default=True)
    
    def __str__(self) -> str:
        return self.name
    
class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Put an email address")
        
        user = self.model(
            name=name,
            email=email
        )
        user.set_password(password)
        user.save(using=self.db)
        
        return user
    
    def create_superuser(self, email, name, password=None):
        if not email:
            raise ValueError("Put an email address")
        
        user = self.create_user(
            email=self.normalize_email(email),
            name=name,
            password=password,
        )
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        
        user.save(using=self.db)
        return user
    
    
class User(AbstractBaseUser):
    email = models.EmailField(max_length=100, unique=True)
    name = models.CharField(max_length=255)
    
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)
    
    objects = UserManager()
    
    USERNAME_FIELD = "email"
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True
    
    def __str__(self) -> str:
        return self.name
    
        