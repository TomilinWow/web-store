from django.http import HttpResponse
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from cart.cart import Cart
from .models import Category, Product, City, Order
from .serializers import CategoryListSerializer, ProductListSerializer, CityListSerializer, \
    SetOrderSerializer, GetOrderSerializer
from .service import ProductFilter


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

class CityListView(APIView):

    def get(self, request):
        city = City.objects.all()
        serializer = CityListSerializer(city, many=True)
        return Response(serializer.data)

class ProductListView(generics.ListAPIView):
    pagination_class = ProductPagination
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    filter_backends = (OrderingFilter, DjangoFilterBackend)
    filterset_class = ProductFilter
    filter_fields = ('category', 'category__name')
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

@api_view(['GET'])
def cookies(request):
    if request.method == 'GET':
        if 'location' in request.COOKIES:
            value = request.COOKIES['location']
            response = HttpResponse(value)
            return response
        else:
            response = HttpResponse(status=400)
            return response

@api_view(['POST'])
def set_cookies(request, pk):
    if request.method == 'POST':
        if 'location' in request.COOKIES:
            value = request.COOKIES['location']
            response = HttpResponse('Yes, no cookie')
            return response
        else:
            response = HttpResponse('Yes, there is a cookie')
            city = City.objects.get(id=pk)
            response.set_cookie('location', city)
            return response

@api_view(['POST'])
def set_order(request, pk):
    if request.method == 'POST':
        cart = Cart(request)
        order = SetOrderSerializer(data={
            'cart': cart.get_cart(),
            'location': pk
        })
        if order.is_valid():
            order.save()
            return HttpResponse(status=200)

        return HttpResponse(status=400)

class OrdersDetailView(APIView):

    def get(self, request):
        orders = Order.objects.all()
        serializer = GetOrderSerializer(orders, many=True)
        return Response(serializer.data)


class OrdersListView(APIView):

    def delete(self, request):
        orders = Order.objects.all()
        orders.delete()
        return Response(status=200)