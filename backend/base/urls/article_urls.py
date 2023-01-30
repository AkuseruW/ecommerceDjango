from django.urls import path
from base.views import article_views as views

urlpatterns = [
    path('', views.getArticles, name="articles"),
    path('<str:slug>/', views.getArticle, name="article"),
]