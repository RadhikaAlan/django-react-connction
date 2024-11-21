from django.urls import path
from .import views

urlpatterns = [
    path('product-list',views.showall,name='product-list'),
]