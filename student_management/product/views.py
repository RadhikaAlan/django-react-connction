from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import productserializer
from .models import Product
# Create your views here.


@api_view(['GET'])
def display(request):
    products=Product.objects.get(id=1)
    serializer=productserializer(products,many=False)
    return Response(serializer.data)