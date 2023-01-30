from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Article

# Serialiseur pour l'objet User
class UserSerializer(serializers.ModelSerializer):
    # Ajout de nouveaux champs pour stocker le prénom et le nom de famille
    name = serializers.SerializerMethodField(read_only=True)
    lastname = serializers.SerializerMethodField(read_only=True)
    # Ajout de nouveau champ pour savoir si l'utilisateur est administrateur
    isAdmin = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = User
        # Liste des champs à inclure dans la représentation sérialisée
        fields=['id', 'username', 'email', 'name', 'lastname','isAdmin']
        
    def get_name(self, obj):
        # Récupération du prénom
        return obj.first_name
    
    def get_lastname(self, obj):
        # Récupération du nom de famille
        return obj.last_name  
    
    def get_isAdmin(self, obj):
        # Récupération de l'informations sur le statut d'administrateur de l'utilisateur
        return obj.is_staff
    

# Serialiseur pour l'objet User qui inclut le token
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = User
        # Liste des champs à inclure dans la représentation sérialisée
        fields=['id', 'username', 'email', 'name', 'lastname','isAdmin', 'token']
        
    def get_token(self, obj):
        # Récupération du token
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


# Serialiseur pour l'objet Article
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        # Inclusion de tous les champs dans la représentation sérialisée
        fields='__all__'
