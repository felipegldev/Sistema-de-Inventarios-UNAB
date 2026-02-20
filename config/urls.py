"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "formularios"

app_name = "ayuda"

app_name = "checklist"

app_name = "inventario"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login, name='login'), #Login
    path('', views.home, name='home'), #Index

    #FORMULARIOS
    path('asignacion_equipo/', views.asignacion_equipo, name="asignacion_equipo"), #Asignacion Equipo
    path('termino_ot/', views.termino_ot, name="termino_ot"), #Termino OT

    #AYUDA
    path('anexos/', views.anexos, name="anexos"), #Anexos
    path('mantencion/', views.mantencion, name="mantencion"), #Mantencion

    #CHECKLIST
    path('sala_lab/', views.sala_lab, name="sala_lab"), #Sala Laboratorios
    path('pc_adm/', views.pc_adm, name="pc_adm"), #PC Administrativo

    #INVENTARIO
    path('inventario/', views.inventario, name="inventario"), #Inventario
]
