from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from store.models import Product
from .cart import Cart


class AddCart(APIView):

    def post(self, request, product_id):
        cart = Cart(request)
        product = get_object_or_404(Product, id=product_id)
        cart.add(product)
        return Response({"status": "add"})

class GetCartInfo(APIView):

    def get(self, request):
        cart = Cart(request)
        data = cart.get_cart()
        return Response(data)

class GetCartLength(APIView):

    def get(self, request):
        cart = Cart(request)
        data = cart.get_cart()
        return Response(len(data))
