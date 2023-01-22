from django.shortcuts import render
from django.http import JsonResponse
from .articles import articles
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/articles/',
        '/api/articles/create/',

        '/api/articles/uploads/',

        '/api/articles/<slug>/reviews/',

        '/api/articles/top/',
        '/api/articles/<slug>/',

        '/api/articles/delete/<slug>/',
        '/api/articles/<update>/<slug>/'
    ]
    return Response(routes)

@api_view(['GET'])
def getArticles(request):
    return Response(articles)

@api_view(['GET'])
def getArticle(request, slug):
    article = next((i for i in articles if i['slug'] == slug), None)
    return Response(article)