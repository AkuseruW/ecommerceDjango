from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from base.serializers import UserSerializer, UserSerializerWithToken


# Classes pour la gestion des tokens
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # Appeler la méthode `validate` du parent
        data = super().validate(attrs)

        # Ajouter des données utilisateur à l'objet `data`
        serializer = UserSerializerWithToken(self.user).data
        for key, value in serializer.items():
            data[key] = value
        # Renvoyer les données utilisateur avec les tokens
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    # Utiliser le `MyTokenObtainPairSerializer` pour valider les demandes d'obtention de token
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)

        # Envoyer un e-mail de confirmation

        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exist'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    # Obtenir le user
    user = request.user
    # Serialiser le user
    serializer = UserSerializer(user, many=False)
    # Renvoyer le user serialisés en tant que réponse
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    # Obtenir tous les users
    users = User.objects.all()
    # Serialiser les users
    serializer = UserSerializer(users, many=True)
    # Renvoyer les users serialisés en tant que réponse
    return Response(serializer.data)
