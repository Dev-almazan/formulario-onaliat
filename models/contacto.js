

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
            this.campus = campus,
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

    static ActualizarPaso(idMostrar,idOcultar) {
        document.getElementById(idOcultar).style.display = "none"
        document.getElementById(idMostrar).style.display = "initial"
    }

    static removerResaltes() {

        document.querySelectorAll('.inputLp').forEach(function (div) {

            let element = document.getElementById(div.id);
            if (element.classList.contains("resaltes")) {
                element.classList.remove("resaltes")
            }
        });

    }


    static extraerUtmMedio(){
        const ulrparametrosz = window.location.search;
        const parametrosz = new URLSearchParams(ulrparametrosz);
        const utmPerformancez = parametrosz.get("utm_source") ? parametrosz.get("utm_source") : "default";
        return "?medio=" + utmPerformancez;
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

    static quitarDuplicados = (valores) => {
        valores = [...new Set(valores)]
        return valores;
    }

    static crearOptions = (data, idSelect) => {
        const select = document.getElementById(idSelect);
        select.options.length = 1;
        const uniqueData = contacto.quitarDuplicados(data);
        uniqueData.forEach(item => {
            const option = document.createElement("option");
            option.value = option.text = item;
            select.appendChild(option);
        });
    };

    static renderCategoria = (datos, modalidad, idselect) => {
        const datosApi = datos.results.filter(datos => datos.values.modalidad.name == modalidad)
        let data = [];
        datosApi.forEach(element => {
            data.push(element.values.nivel_de_interes.name)
        });
        contacto.crearOptions(data,idselect)
    }

    static renderCarrer = (datos, categoria, modalidad, select) => {
        const datosApi = datos.results.filter(datos => datos.values.modalidad.name == modalidad && datos.values.nivel_de_interes.name == categoria)
        let data = [];
        datosApi.forEach(element => {
            data.push(element.values.name)
        });
        contacto.crearOptions(data, select)
    }
    
}

