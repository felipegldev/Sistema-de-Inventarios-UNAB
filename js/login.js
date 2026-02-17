/* Se toma el formularios login y llamamos con el boton tipo submit */
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Evita que se recargue la página
    event.preventDefault();

    //Tomamos Email desde el formulario 
    let email = document.getElementById("email").value;
    //Tomamos la pass desde el formulario
    let pass = document.getElementById("pass").value;
    //Mensaje para alertas
    let mensaje = document.getElementById("mensaje");

    // Validación básica
    if (email === "" || pass === "") {
        //Mensaje de color rojo
        mensaje.style.color = "red";
        //Mensaje por pantalla
        mensaje.textContent = "Por favor complete todos los campos.";
        return;
    }

    // Usuario y contraseña provisorios
    let usuarioCorrecto = "admin@unab.cl";
    let passwordCorrecta = "12345";

    //En caso de que el correo y la contraseña sean correctos
    if (email === usuarioCorrecto && pass === passwordCorrecta) {
        //Mensaje de color verde
        mensaje.style.color = "green";
        //Mensaje por pantalla
        mensaje.textContent = "Login correcto. Redirigiendo...";

        setTimeout(() => {
            //Redirecionamos al main
            window.location.href = "index.html";
        }, 1500);

    //Si no
    } else {
        //Mensaje de color rojo
        mensaje.style.color = "red";
        //Mensaje por pantalla
        mensaje.textContent = "Correo o contraseña incorrectos.";
    }
    
});
