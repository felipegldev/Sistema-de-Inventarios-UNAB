let nombre = localStorage.getItem("usuario");

if(nombre){
    document.getElementById("nombreUsuario").textContent = nombre;
}else{
    // Si no hay sesión, vuelve al login
    window.location.href = "login.html";
}
