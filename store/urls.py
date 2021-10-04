from django.urls import path
from . import views

urlpatterns = [
    path("category/", views.CategoryListView.as_view()),
    path("products/", views.ProductListView.as_view()),
    path("products/<int:pk>/", views.ProductDetailView.as_view()),
    path('items', views.SearchProductListView.as_view())
]