from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Product
from .serializers import CategoryListSerializer, ProductListSerializer

def index(request):
    return render(request, 'index.html', {})

class ProductPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 100

class CategoryListView(APIView):

    def get(self, request):
        category = Category.objects.all()
        serializer = CategoryListSerializer(category, many=True)
        return Response(serializer.data)

# class ProductListView(APIView):
#
#     pagination_class = ProductPagination
#     def get(self, request):
#         product = Product.objects.all()
#         serializer = ProductListSerializer(product, context={'request': request}, many=True)
#         return Response(serializer.data)

class ProductListView(generics.ListAPIView):
    pagination_class = ProductPagination
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    filter_backends = (OrderingFilter, DjangoFilterBackend)
    filter_fields = ('category',)
    ordering_fields = ('price', 'name')

class ProductDetailView(APIView):

    def get(self, request, pk):
        product = Product.objects.get(id=pk)
        serializer = ProductListSerializer(product, context={'request': request})
        return Response(serializer.data)

class SearchProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = ProductPagination
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = (['name'])

