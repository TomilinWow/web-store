from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Category(models.Model):

    name = models.CharField('Category', max_length=100)
    url = models.SlugField(unique=True, max_length=150)
    def __str__(self):
        return self.name

class Product(models.Model):

    name = models.CharField('Name', max_length=150)
    url = models.SlugField(unique=True, max_length=150)
    image = models.ImageField('Image')
    description = models.TextField('Description', null=True)
    price = models.DecimalField('Price', max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, verbose_name='products', on_delete=models.CASCADE)
    data_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class City(models.Model):
    city = models.CharField('City', max_length=40, unique=True)

    def __str__(self):
        return self.city

class Order(models.Model):

    created_at = models.DateTimeField(auto_now_add=True, verbose_name='created_at')
    cart = models.ManyToManyField(Product, verbose_name='cart', null=True, blank=True)
    location = models.ForeignKey(City, verbose_name='city', on_delete=models.CASCADE)

    def get_products(self, obj):
        return "\n".join([p.name for p in obj.cart.all()])

    def __str__(self):
        return str(self.id)