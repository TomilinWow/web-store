from decimal import Decimal
from django.conf import settings

class Cart(object):

    def __init__(self, request):
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            cart = self.session[settings.CART_SESSION_ID] = {}
        self.cart = cart

    def get_cart(self):
        return self.cart

    def get_products(self):
        new_cart = []
        for item in self.cart:
            new_cart.append(self.cart[item])
        return new_cart

    def get_quantity(self):
        sum = 0
        for item in self.cart.values():
            sum += item['quantity']
        return sum

    def decrease(self, product):
        product_id = str(product.id)
        if self.cart[product_id]['quantity'] == 0:
            pass
        else:
            self.cart[product_id]['quantity'] -= 1
        self.save()

    def add(self, product):
        product_id = str(product.id)
        if product_id not in self.cart:
            self.cart[product_id] = {'id': product.id,
                                     'name': product.name,
                                     'quantity': 1,
                                     'price': str(product.price)}
        else:
            self.cart[product_id]['quantity'] += 1
        self.save()

    def save(self):
        self.session.modified = True

    def get_total_price(self):
        return sum(Decimal(item['price']) * item['quantity'] for item in self.cart.values())

    def remove(self, product):
        product_id = str(product.id)
        if product_id in self.cart:
            del self.cart[product_id]
            self.save()

    def clear(self):
        del self.session[settings.CART_SESSION_ID]
        self.save()
