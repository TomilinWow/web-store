from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from store.models import Product
from .cart import Cart


class InteractionWithCartGet(APIView):

    def get(self, request):
        cart = Cart(request)
        data = cart.get_cart()
        return Response(data)

class InteractionWithCartPost(APIView):

    def post(self, request, product_id):
        cart = Cart(request)
        product = get_object_or_404(Product, id=product_id)
        cart.add(product)
        return Response({"status": "add"})


class GetCartLength(APIView):

    def get(self, request):
        cart = Cart(request)
        data = cart.get_quantity()
        return Response(data)

class DeleteCart(APIView):

    def delete(self, request):
        cart = Cart(request)
        cart.clear()
        return Response({'status': 'delete'})

class DeleteCartItem(APIView):

    def delete(self, request, product_id):
        cart = Cart(request)
        product = get_object_or_404(Product, id=product_id)
        cart.remove(product)
        return Response({'status': 'delete'})

class TotalPriceCart(APIView):

    def get(self, request):
        cart = Cart(request)
        data = cart.get_total_price()
        return Response(data)

class DecreaseCountItem(APIView):

    def delete(self, request, product_id):
        cart = Cart(request)
        product = get_object_or_404(Product, id=product_id)
        cart.decrease(product)
        return Response({'status': 'decrease'})