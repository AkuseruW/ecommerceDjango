from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .articles import articles
from .models import Article
from django.shortcuts import get_object_or_404
from .serializers import ArticleSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/articles/',
        '/api/article/create/',

        '/api/article/uploads/',

        '/api/article/<slug>/reviews/',

        '/api/articles/top/',
        '/api/article/<slug>/',

        '/api/article/delete/<slug>/',
        '/api/article/<update>/<slug>/'
    ]
    return Response(routes)

@api_view(['GET'])
def getArticles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getArticle(self, slug=None):
    # articles = Article.objects.all()
    # article = get_object_or_404(articles, slug=slug)
    article = Article.objects.get(slug=slug)
    serializer = ArticleSerializer(article, many=False)
    return Response(serializer.data)