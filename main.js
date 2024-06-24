/*Mandamos a llamar componente principal */
customElements.define("onaliat-home", onaliatSection);
customElements.define("onaliat-tarjetas", onaliatTarjeta);

const marca = document.getElementById("onaliat-formulario").getAttribute("data-company")
const medio = document.getElementById("onaliat-formulario").getAttribute("data-medio") 
const pageId = document.getElementById("onaliat-formulario").getAttribute("data-pageId")
const modalidad = document.getElementById("onaliat-formulario").getAttribute("data-modalidad")



/*manejo de eventos*/



/*Boton iniciar conversacion whatsapp */
document.getElementById("wps").addEventListener("click", () => {
 
    const paginaWp = apiAliat.paginaWhatsApp("ONALIAT", contacto.extraerUtmMedio());
    window.location.href = paginaWp;

})


/*Boton solicitar Informacion */
document.getElementById("wfm").addEventListener("click",()=>
{
    document.querySelector('body').style.overflowY = 'hidden';
    /*Mandamos a llamar componente formulario */

    if (!customElements.get('onaliat-formulario')) {
        customElements.define('onaliat-formulario', onaliatFormulario);
       
    }
    else
    {
        const componentElement = document.querySelector('onaliat-formulario');
        componentElement.style.display = "";
    }
    

    /*Traemos datos del api de los select*/
    const token = "Bearer 2ee90da8-c02e-4c3d-9700-d6200016ee75";
    const endPointGet = "https://conecta.aliat.mx/api/hubspot/";

    /*Mandamos a llamar  Plan de estudios para renderizar oferta educativa */
    apiAliat.cargarPlanDeEstudios(endPointGet, "?hdb=ofertaEtac",token)
        .then((respuesta) => {
            /*Creamos opcion de select categoria */
            contacto.renderCategoria(respuesta, modalidad, "categoria")
            /*Creamos opcion de select carrera*/
            document.getElementById("categoria").addEventListener("change", function () {
                contacto.renderCarrer(respuesta, this.value, modalidad, "carrera")
            })

        })
        .catch((error) => {
            console.error("Error al acceder al  response data", error);
    });

    
})




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
        contacto.ActualizarPaso("paso2","paso1");
    }

}

function segundoPaso() {

    contacto.removerResaltes();

    let categoria = document.getElementById('categoria');
    let carrera = document.getElementById('carrera');
    const letras = /^([á-ú-Á-Ú-a-z-A-Z-ñ ._])+$/;

    if (categoria.length == 0 || letras.test(categoria.value) === false) {
        contacto.resaltar("categoria")
        contacto.alertas("Elige una opción", 3);
    }
    else if (carrera.length == 0 || letras.test(carrera.value) === false) {
        contacto.resaltar("carrera")
        contacto.alertas("Elige una opción", 4);
    }
    else {
        contacto.alertas("", 0);
        //instanciamos el objeto lead
        const Lead = new contacto(marca,medio,
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("phone").value,
            document.getElementById("categoria").value,
            document.getElementById("carrera").value,
            "On Aliat", "CES ", pageId,"","","","","","")

        //llamamos funcion para envio de formulario que nos retorna la promesa
        apiAliat.submitForm(Lead, "https://conecta.aliat.mx/api/hubspot/")
            .then((respuesta) => {

                if (respuesta.status == 200) {
                    //deacuerdo al medio seleccionado redireccionamos
                    const paginatyp = apiAliat.paginaConfirmacion("ONALIAT");
                    window.location.href = paginatyp + contacto.extraerUtmMedio();
                 }
                else {
                    respuesta.json().then(respuesta => {
                        alert(respuesta)
                    })
                }

            })
    }

}
