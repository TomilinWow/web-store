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

# class CartProduct(models.Model):
#
#     user = models.ForeignKey('Customer', verbose_name='customer', on_delete=models.CASCADE)
#     cart = models.ForeignKey('Cart', verbose_name='cart', on_delete=models.CASCADE, related_name='cart')
#     quantity = models.PositiveIntegerField(default=1, verbose_name='quantity_product')
#     product = models.ForeignKey(Product, verbose_name='product', on_delete=models.CASCADE, null=True)
#     price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='price')
#
#     def __str__(self):
#         return f"Product: {self.product.title}"
#
#
# class Cart(models.Model):
#
#     customer = models.ForeignKey('Customer', null=True, verbose_name='customer', on_delete=models.CASCADE)
#     products = models.ManyToManyField(CartProduct, null=True, related_name='products_related')
#     count_products = models.PositiveIntegerField(default=0)
#     price = models.DecimalField('Price',max_digits=9, default=0, decimal_places=2)
#
#     def __str__(self):
#         return str(self.id)
#
#
# class Customer(models.Model):
#
#     user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
#     image = models.ImageField('Image', upload_to='user/', blank=True)
#     phone = models.CharField('Phone', max_length=20, null=True, blank=True)
#     email = models.CharField('Email', max_length=150)
#     location = models.CharField('Location', max_length=250, null=True, blank=True)
#
#     def __str__(self):
#         return f"User: {self.user.first_name}"
#
#
# class Order(models.Model):
#
#     customer = models.ForeignKey(Customer, verbose_name='customer', on_delete=models.CASCADE)
#     created_at = models.DateTimeField(auto_now_add=True, verbose_name='created_at')
#     cart = models.ForeignKey(Cart, verbose_name='cart', on_delete=models.CASCADE, null=True, blank=True)
#
#     def __str__(self):
#         return str(self.id)
