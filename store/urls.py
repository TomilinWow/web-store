from django.urls import path
from . import views

urlpatterns = [
    path("category/", views.CategoryListView.as_view()),
    path("products/", views.ProductListView.as_view()),
    path("cities/", views.CityListView.as_view()),
    path("products/<int:pk>/", views.ProductDetailView.as_view()),
    path('items', views.SearchProductListView.as_view()),
    path('cookies', views.cookies),
    path('set_cookies/<int:pk>', views.set_cookies),
    path('set_order/<int:pk>', views.set_order),
    path('orders/', views.OrdersDetailView.as_view()),
    path('remove/', views.OrdersListView.as_view())
]
