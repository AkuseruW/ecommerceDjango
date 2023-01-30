from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404
from base.models import Article
from base.serializers import ArticleSerializer


@api_view(['GET'])
def getArticles(request):
    # Obtenir tous les articles
    articles = Article.objects.all()
    # Serialiser les articles
    serializer = ArticleSerializer(articles, many=True)
    # Renvoyer les articles serialisés en tant que réponse
    return Response(serializer.data)


@api_view(['GET'])
def getArticle(request, slug=None):
    # Obtenir un article en fonction de son slug
    article = get_object_or_404(Article, slug=slug)
    # Serialiser l'article
    serializer = ArticleSerializer(article, many=False)
    # Renvoyer l'article serialisé en tant que réponse
    return Response(serializer.data)
