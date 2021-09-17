from rest_framework import serializers

from .models import Category, Product


class CategoryListSerializer(serializers.ModelSerializer):
    """List of category"""

    class Meta:
        model = Category
        fields = ("name",)

class ProductListSerializer(serializers.ModelSerializer):
    """List of products"""

    category = serializers.SlugRelatedField(slug_field="name", read_only=True)
    class Meta:
        model = Product
        fields = ("name", "image", "description", "price", "category", "data_added")

