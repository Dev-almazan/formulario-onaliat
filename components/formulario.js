
/*Web componentes  calculadora */


class onaliatSection extends HTMLElement {


    connectedCallback() {


        let datos = {
            titulo: this.getAttribute("data-titulo"),
            sub: this.getAttribute("data-sub"),
            desc: this.getAttribute("data-desc"),
            logo : this.getAttribute("data-logo"),
            promo: this.getAttribute("data-promo")
        }

        this.innerHTML = `
            <section>
                    <div>
                            <img src="${datos.logo}" />
                            <h1>${datos.titulo}</h1>
                            <h2>${datos.sub}</h2>
                            <h3>${datos.desc}</h3>
                            <button type="button" id="wps"><img src="https://www.etac.edu.mx/hubfs/Landing-aliat/Trazado%202260.png"  /> INICIAR CONVERSACIÓN</button>
                            <button type="button" id="wfm" ><img src="https://www.etac.edu.mx/hubfs/Landing-aliat/Uni%C3%B3n%2044.png"  /> RECIBIR MÁS INFORMACIÓN</button>
                    </div>
                    <div>
                            <img src="${datos.promo}"  />
                    </div>
            </section>
        `;
    }
}

class onaliatFormulario extends HTMLElement {

    connectedCallback() {


        let datos = {
            marca: this.getAttribute("data-company"),
            modalidad : this.getAttribute("data-modalidad"),
            titulo: this.getAttribute("data-titulo")
        }

        this.innerHTML = `
            <section>
                    <div id="pleca"></div>
                    <div id="formulario">
                        <form>
                        <h1>${datos.titulo}</h1>
                        <!-- Nombre input -->
                        <div id="paso1">
                            <div class="form-div">
                                <label>Nombre completo</label>
                                <input type="text" id="name" class="inputLp"  />
                                <span class="error "></span>
                            </div>
                                <!-- Correo input -->
                                <div class="form-div">
                                    <label>Correo electrónico</label>
                                    <input type="email" id="email" class="inputLp"   />
                                    <span class="error"></span>
                                </div>
                                <!-- Telefono input -->
                                <div class="form-div ">
                                    <label>Teléfono celular</label>
                                    <input type="tel" id="phone" class="inputLp"  />
                                    <span class="error"></span>
                                </div>
                                <div class="aviso">
                                    <span>Al enviar, reconoces haber leído y estar de acuerdo con el <a
                                    style="color:dodgerblue !important ;"
                                    href="https://www.aliatuniversidades.com.mx/aliat/aviso-de-privacidad" target="_blank">aviso
                                    de
                                    privacidad</a></span>
                                </div>
                                <div class="form-div">
                                        <button type="button" onclick="primerPaso()" />CONTINUAR</button>
                                </div>
                        </div>
                        </form>
                     </div>   
            </section>
        `;
    }
}





class contacto  {

    constructor(marca, medio, nombre, correo, telefono, categoria, carrera, modalidad, campus, pageid, precioInicial, precioFinal, porcentajeDescuento,descuentoTotal,calificacion,medioPiloto)
    {
            this.marca = marca,
            this.medio = medio,
            this.nombre = nombre,
            this.correo = correo,
            this.telefono = telefono,
            this.categoria = categoria,
            this.carrera = carrera,
            this.modalidad = modalidad,
            this.campus = campus,1
            this.pageid = pageid,
            this.precioInicial = precioInicial,
            this.precioFinal = precioFinal,
            this.porcentajeDescuento = porcentajeDescuento,
            this.descuentoTotal = descuentoTotal,
            this.calificacion = calificacion
            this.medioPiloto = medioPiloto
    }


    static ocultar(id) {
        document.getElementById(id).style.display = "none"
    }

    static removerResaltes() {

        document.querySelectorAll('.inputLp').forEach(function (div) {

            let element = document.getElementById(div.id);
            if (element.classList.contains("resaltes")) {
                element.classList.remove("resaltes")
            }
        });

    }

    static resaltar(valor) {
        var element = document.getElementById(valor);
        element.classList.add("resaltes");
    }


    static alertas(valor, posicion) {
        /* Mostramos span con la alerta de la validacion de acuerdo al input */

        const error = document.getElementsByClassName('error');

        for (let b = 0; b < error.length; b++) {

            if (error[b] == error[posicion]) {
                error[posicion].innerHTML = valor;
            }
            else {
                error[b].innerHTML = "";
            }

        }

    }
  
}



class apiAliat 
{
    
    static async submitForm(datos, url) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer 2ee90da8-c02e-4c3d-9700-d6200016ee75`
                }
            })
            return response; //Retornamos la promesa
        } catch (error) {
            console.error('Error al conectarse al api', error);
            throw error; // Re-throw for further handling
        }

    }

    static paginaConfirmacion(marca)
    {
        let gracias;
        switch (marca) 
        {
            case 'ETAC':
                gracias = "https://www.etac.edu.mx/typ/gracias-por-registrarte";
            break;
            case 'UTAN':
                gracias = "https://www.utan.edu.mx/typ/gracias-por-registrarte";
            break;
            case 'UNEA':
                gracias = "https://www.unea.edu.mx/typ/gracias-por-registrarte";
            break;
            case 'UVG':
                gracias = "https://www.uvg.edu.mx/typ/gracias-por-registrarte";
            break;
            case 'CEST':
                gracias = "https://www.soycest.mx/typ/gracias-por-registrarte";
            break;
            case 'LA CONCORDIA':
                gracias = "https://www.universidadlaconcordia.edu.mx/typ/gracias-por-registrarte";
            break;
            case 'CORBUSE':
                gracias = "https://www.aliatuniversidades.com.mx/corbuse/typ/gracias-por-agendar-tu-cita-modalidad";
            break;
        }
        return gracias;
    }

    static paginaWhatsApp(marcaAsignada,utmPerformanceb)
    {

        const chatContenido =
            [
                {
                    marca: "ETAC",
                    urlGoogle: "https://api.whatsapp.com/send?phone=5215579722448&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%20%F0%9F%A4%94",
                    urltk: "https://api.whatsapp.com/send?phone=5215579722448&text=¡Hola!%20Vi%20su%20contenido%20en%20TikTok%20y%20quiero%20saber%20más.%20¿Podríamos%20conversar%3F%20🌟%20Gracias.📲%20",
                    urlDirecto: "https://api.whatsapp.com/send?phone=5215579722448&text=%C2%A1Hola!%20Navegu%C3%A9%20por%20su%20sitio%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n.%20%F0%9F%8C%90",
                    UrlPro: "https://api.whatsapp.com/send?phone=5215579722448&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20detalles.%20%F0%9F%8C%9F%0A"
                },
                {
                    marca: "UTAN",
                    urlGoogle: "https://api.whatsapp.com/send?phone=525533994158&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%20%F0%9F%A4%94",
                    urltk: "https://api.whatsapp.com/send?phone=525533994158&text=¡Hola!%20Vi%20su%20contenido%20en%20TikTok%20y%20quiero%20saber%20más.%20¿Podríamos%20conversar%3F%20🌟%20Gracias.📲%20",
                    urlDirecto: "https://api.whatsapp.com/send?phone=525533994158&text=%C2%A1Hola!%20Navegu%C3%A9%20por%20su%20sitio%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n.%20%F0%9F%8C%90",
                    UrlPro: "https://api.whatsapp.com/send?phone=525533994158&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20detalles.%20%F0%9F%8C%9F%0A"
                },
                {
                    marca: "UVG",
                    urlGoogle: "https://api.whatsapp.com/send?phone=5215545013008&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%20%F0%9F%A4%94",
                    urltk: "https://api.whatsapp.com/send?phone=5215545013008&text=¡Hola!%20Vi%20su%20contenido%20en%20TikTok%20y%20quiero%20saber%20más.%20¿Podríamos%20conversar%3F%20🌟%20Gracias.📲%20",
                    urlDirecto: "https://api.whatsapp.com/send?phone=5215545013008&text=%C2%A1Hola!%20Navegu%C3%A9%20por%20su%20sitio%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n.%20%F0%9F%8C%90",
                    UrlPro: "https://api.whatsapp.com/send?phone=5215545013008&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20detalles.%20%F0%9F%8C%9F%0A"
                },
                {
                    marca: "UNEA",
                    urlGoogle: "https://api.whatsapp.com/send?phone=525568676066&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%20%F0%9F%A4%94",
                    urlDirecto: "https://api.whatsapp.com/send?phone=525568676066&text=%C2%A1Hola!%20Navegu%C3%A9%20por%20su%20sitio%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n.%20%F0%9F%8C%90",
                    urltk: "https://api.whatsapp.com/send?phone=525568676066&text=¡Hola!%20Vi%20su%20contenido%20en%20TikTok%20y%20quiero%20saber%20más.%20¿Podríamos%20conversar%3F%20🌟%20Gracias.📲%20",
                    UrlPro: "https://api.whatsapp.com/send?phone=525568676066&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20detalles.%20%F0%9F%8C%9F%0A"
                }

            ];

                let chatMs;
                if (utmPerformanceb == "adwords") {
                    chatMs = chatContenido.filter((chat) => chat.marca === marcaAsignada).length > 0 ? chatContenido.filter((chat) => chat.marca === marcaAsignada)[0].urlGoogle : "";
                }
                else if (utmPerformanceb == "pro") {
      
                    chatMs = chatContenido.filter((chat) => chat.marca === marcaAsignada).length > 0 ? chatContenido.filter((chat) => chat.marca === marcaAsignada)[0].UrlPro : "";
                }
                else if (utmPerformanceb == "tiktok") {
                    chatMs = chatContenido.filter((chat) => chat.marca === marcaAsignada).length > 0 ? chatContenido.filter((chat) => chat.marca === marcaAsignada)[0].urltk : "";
                }
                else {
                    chatMs = chatContenido.filter((chat) => chat.marca === marcaAsignada).length > 0 ? chatContenido.filter((chat) => chat.marca === marcaAsignada)[0].urlDirecto : "";
                }
                return chatMs;    
    }




}
