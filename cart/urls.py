from . import views
from django.urls import path

urlpatterns = [
    path('add/<int:product_id>/', views.InteractionWithCartPost.as_view()),
    path('cart/', views.InteractionWithCartGet.as_view()),

    path('clear/', views.DeleteCart.as_view()),
    path('remove/<int:product_id>', views.DeleteCartItem.as_view()),
    path('decrease/<int:product_id>', views.DecreaseCountItem.as_view()),

    path('length/', views.GetCartLength.as_view()),
]
