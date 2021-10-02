from . import views
from django.urls import path

urlpatterns = [
    path('addItem/<int:product_id>/', views.AddCart.as_view()),
    path('getCartInfo/', views.GetCartInfo.as_view()),
    path('getLengthCart/', views.GetCartLength.as_view()),
]
