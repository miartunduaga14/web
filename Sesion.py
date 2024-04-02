MIDDLEWARE = [
    # ...
    'django.contrib.sessions.middleware.SessionMiddleware',
    # ...
]

from django.http import HttpResponse
from django.shortcuts import render

def contar_visitas(request):
    # Intenta obtener el valor de 'visitas' de la sesión
    num_visitas = request.session.get('visitas', 0) + 1
    # Actualiza el valor de 'visitas' en la sesión
    request.session['visitas'] = num_visitas
    
    # Responde con el número de visitas
    return HttpResponse(f"Esta página ha sido visitada {num_visitas} veces.")

from django.urls import path
from . import views

urlpatterns = [
    path('visitas/', views.contar_visitas, name='contar_visitas'),
]
