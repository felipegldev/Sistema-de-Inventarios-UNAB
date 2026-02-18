// Se toma el formularios login y llamamos con el boton tipo submit
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Evita que se recargue la página
    event.preventDefault();

    //Tomamos Email desde el formulario 
    let email = document.getElementById("email").value;
    //Tomamos la pass desde el formulario
    let pass = document.getElementById("pass").value;
    //Mensaje para alertas
    let mensaje = document.getElementById("mensaje");

    //Funcion para validar dominio @unab.cl
    function validarCorreo(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLocaleLowerCase());
    }

    // Validación básica
    if (!email.endWith("@unab.cl") || pass === "") {
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

    //Definimos la constante de un bodo tomando el id="loginBtn"    
    const btn = document.getElementById("loginBtn");
    //Definimos que la constante url redireciona
    const url = btn.dataset.url;

    //Aca definidmos el cambio de url que se define en html
    setTimeout(() => {
        window.location.href = url;
    }, 1500);


    //Si no
    } else {
        //Mensaje de color rojo
        mensaje.style.color = "red";
        //Mensaje por pantalla
        mensaje.textContent = "Correo o contraseña incorrectos.";
    }
    
});
