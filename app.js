/*Mandamos a llamar componentes */
customElements.define("calculadora-header", CalculadoraHeader);
customElements.define("calculadora-pasos", CalculadoraPasos);
customElements.define("calculadora-progreso", CalculadoraProgress);
customElements.define("calculadora-resultados", PlanSection);

let ResultData , catalogoApi;
let marcaAsignada = document.getElementById("calculadora").dataset.company
let modalidadAs = document.getElementById("calculadora").dataset.modalidad
let pageId = document.getElementById("calculadora").dataset.page
const ulrparametrosz = window.location.search;
const parametrosz = new URLSearchParams(ulrparametrosz);
const utmPerformancez = parametrosz.get("utm_source") ? parametrosz.get("utm_source") : "default";
let utmMediosZ = "?medio=" + utmPerformancez ;
let medioAsig = 'calculadora';  

const token = "Bearer 2ee90da8-c02e-4c3d-9700-d6200016ee75";
const endPointGet = "https://conecta.aliat.mx/api/hubspot/";

switch (marcaAsignada) {
    case "ETAC":
        catalogoApi = "OfertaEtac";
    break;
    case "UNEA":
        catalogoApi = "OfertaUnea";
    break;
    case "UVG":
        catalogoApi = "OfertaUvg";
    break;
    case "UTAN":
        catalogoApi = "OfertaUtan";
    break;
    case "CONCORDIA":
        catalogoApi = "OfertaUlc";
    break;
    case "CEST":
        catalogoApi = "OfertaCest";
    break;
    case "CORBUSE":
        catalogoApi = "OfertaCorbuse";
    break;
}

/*funciones*/

const actualizarPlanSection = (categoria,modalidad,carrera,idComponente) => {
    document.getElementById(idComponente).dataset.categoria = categoria
    document.getElementById(idComponente).dataset.modalidad = modalidad
    document.getElementById(idComponente).dataset.carrera = carrera
}

function handlePreviousButtonClick() {
    document.getElementById("calculadora-header").style.display = "";
    document.getElementById("Aviso").style.display = "";
    actualizarUI("75%", "Paso 3 de 4","plan-section","LegalAviso", "paso3", "sec-btn-3")
   
}

const quitarDuplicados = (valores) => {
    valores = [...new Set(valores)]
    return valores;
}

const renderInputRange=()=>
{
        const sliderEl = document.querySelector("#range")
        const sliderValue = document.querySelector(".value")
        const rangeIcon = document.querySelector("#range-icon")
        const marginLeft = parseFloat(window.getComputedStyle(rangeIcon).marginLeft); //obtenemos el % de margin left inicial para que este en medio

        sliderEl.addEventListener("input", (event) => {
                        const tempSliderValue = event.target.value;
                        sliderValue.textContent = tempSliderValue ;
                        let progress = ((tempSliderValue - 6) / (10 - 6)) * 100
                        sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
                        let progressIcon = (progress / 100) * marginLeft * 2;
                        rangeIcon.style.marginLeft = `${progressIcon}%`;
                    })
}

async function cargarPlanDeEstudios(url, parametros, token) {
    try 
    {
        const respuesta = await fetch(url + parametros, {
            method: 'GET',
            headers: {
                'Authorization': `${token}`,
                'content-type': 'application/json'
            }
        });

    
        ResultData= await respuesta.json();
    }
    catch (error) 
    {
        console.error("Error al hacer el conect a api ", error);
    }
}

const crearOptions = (data, idSelect) => {
    const select = document.getElementById(idSelect);
    select.options.length = 1;
    const uniqueData = quitarDuplicados(data);
    uniqueData.forEach(item => {
        const option = document.createElement("option");
        option.value = option.text = item;
        select.appendChild(option);
    });
};


const renderCategoria = (datos,modalidad,idselect) => 
{
                const datosApi  = datos.results.filter(datos =>  datos.values.modalidad.name  == modalidad)
                let data = [];
                datosApi.forEach(element => {
                    data.push(element.values.nivel_de_interes.name)
                }); 
                crearOptions(data,idselect)
}

const renderCarrer = (datos,categoria,modalidad,select) => 
{
                const datosApi = datos.results.filter(datos => datos.values.modalidad.name == modalidad && datos.values.nivel_de_interes.name == categoria)
                let data = [];
                datosApi.forEach(element => {
                    data.push(element.values.name)
                });
                crearOptions(data,select)
}


const actualizarUI = (nuevoProgreso, nuevoPaso, ocultarSec, ocultarBtn, mostrarSec,mostrarBtn)=>
{
    document.getElementById("next-paso").innerText = nuevoPaso;
    document.getElementById("progreso-w").setAttribute("style",`width:${nuevoProgreso};`);
    document.getElementById(ocultarSec).style.display = "none";
    document.getElementById(ocultarBtn).style.display = "none";
    document.getElementById(mostrarSec).style.display="grid";
    document.getElementById(mostrarBtn).style.display = "grid";
}

const alertas = (valor, posicion) => {
    /* Mostramos span con la alerta de la validacion de acuerdo al input */

    const error = document.getElementsByClassName('error');

    for (b = 0; b < error.length; b++) {

        if (error[b] == error[posicion]) {
            error[posicion].innerHTML = valor;
        }
        else {
            error[b].innerHTML = "";
        }

    }

}



const removerResaltes = () => {

    document.querySelectorAll('.inputLp').forEach(function (div) {

        let element = document.getElementById(div.id);
        if (element.classList.contains("resaltes")) {
            element.classList.remove("resaltes")
        }
    });

}

const resaltar = (valor) => {
    var element = document.getElementById(valor);
    element.classList.add("resaltes");
}


/*manejo de eventos*/
document.getElementById("btn-next1").addEventListener("click",function()
{

                removerResaltes();

                let nombre = document.getElementById('name').value;
                let correo = document.getElementById('email').value;
                let telefono = document.getElementById('phone').value;

                let excorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/;
                let numeros = /^([0-9 ])+$/;
                const letras = /^([á-ú-Á-Ú-a-z-A-Z-ñ ._])+$/;


                if (nombre.length > 55 || letras.test(nombre) === false || nombre.length == 0) {
                    resaltar("name")
                    alertas("Por favor ingresa tú nombre completo", 0);
                }
                else if (correo.length > 55 || excorreo.test(correo) === false || correo.length == 0) {
                    resaltar("email")
                    alertas("Por favor ingresa tú correo electrónico", 1);
                }
                else if (telefono.length != 10 || numeros.test(telefono) === false || telefono.length == 0) {

                    resaltar("phone")
                    alertas("Por favor ingresa número de teléfono celular.", 2);
                }
                else
                {
                    alertas("", 0);
                    actualizarUI("50%", "Paso 2 de 4", "paso1", "btn-next1", "paso2","sec-btn-2") 
                }  

})

document.getElementById("btn-next2").addEventListener("click", function () {

                removerResaltes();

                let categoria = document.getElementById('categoria');
                let carrera = document.getElementById('carrera');
                const letras = /^([á-ú-Á-Ú-a-z-A-Z-ñ ._])+$/;

                if (categoria.length == 0 || letras.test(categoria.value) === false) 
                {
                    resaltar("categoria")
                    alertas("Elige una opción",3);
                }
                else if (carrera.length == 0 || letras.test(carrera.value) === false) 
                {
                    resaltar("carrera")
                    alertas("Elige una opción", 4);
                }
                else
                {
                    alertas("", 0);
                    actualizarUI("75%", "Paso 3 de 4", "paso2", "sec-btn-2", "paso3", "sec-btn-3") 
                    
                }
                

})

document.getElementById("btn-next3").addEventListener("click", function (e) 
{   
    document.getElementById("Aviso").style.display = "none";
    document.getElementById("calculadora-header").style.display = "none";
    actualizarPlanSection(document.getElementById("categoria").value, "En Línea", document.getElementById("carrera").value, "plan-section");
    actualizarUI("100%", "Paso 4 de 4", "paso3", "sec-btn-3","LegalAviso","plan-section");
    /*Despues de renderizar pagina  */
})

document.getElementById("btn-previus").addEventListener("click", function () 
{
    actualizarUI("25%", "Paso 1 de 4", "paso2", "sec-btn-2", "paso1", "btn-next1") 
})
document.getElementById("btn-previusb").addEventListener("click", function () 
{
    actualizarUI("50%", "Paso 2 de 4", "paso3", "sec-btn-3", "paso2", "sec-btn-2") 
})


cargarPlanDeEstudios(endPointGet,"?hdb="+catalogoApi,token)
    .then(() => {

        renderCategoria(ResultData,modalidadAs,"categoria")
        renderInputRange();

        document.getElementById("categoria").addEventListener("change", function () {
            renderCarrer(ResultData,this.value,modalidadAs,"carrera")
        })

    })
    .catch((error) => {
        console.error("Error al acceder al  response data", error);
    });


    /*Mandamos a llamar funcion que detorana el redirect en la pantalla resultados */
    function handleSubmit(medioPiloto){

        //instanciamos el objeto lead
        const Lead = new contacto(marcaAsignada, medioAsig,
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("phone").value,
            document.getElementById("categoria").value,
            document.getElementById("carrera").value,
            "On Aliat", "CES ", pageId,
            document.getElementById("calcResultados").dataset.precioinicial,
            PlanSection.Formatonumber(document.getElementById("plan-section").dataset.preciofinal),
            document.getElementById("calcResultados").dataset.porcentajedescuento,
            document.getElementById("calcResultados").dataset.descuentototal,
            document.getElementById("range").value,medioPiloto)
            console.log(Lead)

            //llamamos funcion para envio de formulario que nos retorna la promesa
            apiAliat.submitForm(Lead,endPointGet, utmMediosZ)
            .then((respuesta) => {

                if(respuesta.status == 200)
                {
                        //deacuerdo al medio seleccionado redireccionamos
                        if(Lead.medioPiloto == "Llamada")
                        {
                            const paginatyp = apiAliat.paginaConfirmacion(Lead.marca);
                            window.location.href = paginatyp + utmMediosZ;
                        }
                        else
                        {
                            const paginaWp = apiAliat.paginaWhatsApp(Lead.marca,utmPerformancez);
                            window.location.href = paginaWp;
                        }
                }
                else
                {
                    respuesta.json().then(respuesta=>{
                        alert(respuesta)
                    })
                }

            })
            .catch((respuesta) => {
                    console.error("Error reportado por el api", respuesta);
            });
                
        
    }