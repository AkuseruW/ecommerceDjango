from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('articles/', views.getArticles, name="articles"),
    path('article/<str:slug>/', views.getArticle, name="article"),

]