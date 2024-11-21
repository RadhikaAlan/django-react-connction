from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import productserializer
from .models import Product
# Create your views here.


@api_view(['GET'])
def showall(request):
    products=Product.objects.filter(id=1)
    serializer=productserializer(products,many=True)
    return Response(serializer.data)