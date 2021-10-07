from rest_framework import serializers
from .models import Category, Product, City, Order


class CategoryListSerializer(serializers.ModelSerializer):
    """List of category"""

    class Meta:
        model = Category
        fields = ("id", "name")

class CityListSerializer(serializers.ModelSerializer):
    """List of category"""

    class Meta:
        model = City
        fields = ("id", "city")

class SetOrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ("id", "created_at", "cart", "location")

class GetOrderSerializer(serializers.ModelSerializer):
    location = serializers.SlugRelatedField(slug_field='city', read_only=True)
    cart = serializers.SlugRelatedField(many=True, queryset=Product.objects.all(), slug_field='name')
    class Meta:
        model = Order
        fields = ("id", "created_at", "cart", "location")


class ProductListSerializer(serializers.ModelSerializer):
    """List of products"""

    category = serializers.SlugRelatedField(slug_field="name", read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ("id", "name", "image", "description", "price", "category", "data_added")

    def get_image(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url)

