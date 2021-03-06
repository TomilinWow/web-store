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


class ProductDetailView(APIView):

    def get(self, request, pk):
        product = Product.objects.get(id=pk)
        serializer = ProductListSerializer(product, context={'request': request})
        return Response(serializer.data)


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


class ProductListView(generics.ListAPIView):
    pagination_class = ProductPagination
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    filter_backends = (OrderingFilter, DjangoFilterBackend)
    filterset_class = ProductFilter
    filter_fields = ('category', 'category__name')
    ordering_fields = ('price', 'name')


class SearchProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = ProductPagination
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = (['name'])


@api_view(['POST'])
def set_order(request):
    if request.method == 'POST':
        cart = Cart(request)

        location = request.COOKIES['location']
        city = City.objects.get(city=location)
        city_data = CityListSerializer(city)

        order = SetOrderSerializer(data={
            'cart': cart.get_cart(),
            'location': city_data.data['id']
        })
        if order.is_valid():
            order.save()
            return HttpResponse(status=200)
        return HttpResponse(status=400)
