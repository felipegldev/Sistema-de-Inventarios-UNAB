from django.shortcuts import render, redirect

# VISTA PRINCIPAL (INDEX)
def home(request):
    return render(request, "core/index.html")

# VISTA LOGIN 
def login(request):
    return render(request, "core/login.html")

#VISTA REDIRECIONAMIENTO
def root_redirect(request):
    return redirect('index')

#VISTA FORMULARIOS
def formularios(request):
    return render(request, "core/formularios.html")