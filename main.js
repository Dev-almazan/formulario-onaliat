/*Mandamos a llamar componente principal */
customElements.define("onaliat-home", onaliatSection);



document.getElementById("wfm").addEventListener("click",()=>
{
    /*Mandamos a llamar componente formulario */
    customElements.define("onaliat-formulario", onaliatFormulario);
    
})


/*manejo de eventos*/
function primerPaso() {

    contacto.removerResaltes();

    let nombre = document.getElementById('name').value;
    let correo = document.getElementById('email').value;
    let telefono = document.getElementById('phone').value;

    let excorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/;
    let numeros = /^([0-9 ])+$/;
    const letras = /^([á-ú-Á-Ú-a-z-A-Z-ñ ._])+$/;


    if (nombre.length > 55 || letras.test(nombre) === false || nombre.length == 0) {
        contacto.resaltar("name")
        contacto.alertas("Por favor ingresa tú nombre completo", 0);
    }
    else if (correo.length > 55 || excorreo.test(correo) === false || correo.length == 0) {
        contacto.resaltar("email")
        contacto.alertas("Por favor ingresa tú correo electrónico", 1);
    }
    else if (telefono.length != 10 || numeros.test(telefono) === false || telefono.length == 0) {

        contacto.resaltar("phone")
        contacto.alertas("Por favor ingresa número de teléfono celular.", 2);
    }
    else {
        contacto.alertas("", 0);
    }

}
