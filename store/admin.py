from django.contrib import admin

from .models import Category, Product, CartProduct, Order, Cart, Customer

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Categories"""
    list_display = ("id", "name", "url")
    list_display_links = ("name",)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    """Products"""
    list_display = ("id", "name", "category", "url", "image", "description", "price", "data_added")
    list_filter = ("category",)
    search_fields = ("name", "category__name")
    save_on_top = True
    save_as = True

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "image", "phone", "email", "location")

@admin.register(CartProduct)
class CartProductAdmin(admin.ModelAdmin):
    """CartsProducts"""
    list_display = ("id", "user", "cart", "price")


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    """Carts"""
    list_display = ("id", "customer", "count_products", "price")


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """Orders"""
    list_display = ("id", "customer", "cart", "created_at")
