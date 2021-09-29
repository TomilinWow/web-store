from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Product
from .serializers import CategoryListSerializer, ProductListSerializer

def index(request):
    return render(request, 'index.html', {})

class CategoryListView(APIView):

    def get(self, request):
        category = Category.objects.all()
        serializer = CategoryListSerializer(category, many=True)
        return Response(serializer.data)

class ProductListView(APIView):

    def get(self, request):
        product = Product.objects.all()
        serializer = ProductListSerializer(product, context={'request': request}, many=True)
        return Response(serializer.data)

class ProductDetailView(APIView):

    def get(self, request, pk):
        product = Product.objects.get(id=pk)
        serializer = ProductListSerializer(product, context={'request': request})
        return Response(serializer.data)