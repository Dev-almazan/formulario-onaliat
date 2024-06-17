
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

    static mostrarInicio(){

        const componentElement = document.querySelector('onaliat-formulario'); 
        componentElement.style.display = "none";
        document.querySelector('body').style.overflowY = 'scroll';
    }


    connectedCallback() {


        let datos = {
            marca: this.getAttribute("data-company"),
            modalidad : this.getAttribute("data-modalidad"),
            titulo: this.getAttribute("data-titulo")
        }

        this.innerHTML = `
            <section>
                    <div id="pleca" onclick="onaliatFormulario.mostrarInicio()"></div>
                    <div id="formulario">
                    
                        <form>
                        <img class="cerrar-btn" src="https://www.etac.edu.mx/hubfs/Landing-aliat/equis_blanca.svg" onclick="onaliatFormulario.mostrarInicio()"  />
                        <h1>${datos.titulo}</h1>
                       
                        <div id="paso1">
                            <!-- Nombre input -->
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
                                        <button type="button" class="naranja" onclick="primerPaso()" />CONTINUAR</button>
                                </div>
                        </div>

                        <div id="paso2">
                            <!-- nivel select -->
                            <div class="form-div">
                                <label>Elige el nivel de estudios </label>
                                <select class="inputLp" id="categoria" name="categoria">
                                    <option value="">Selecciona una opción</option>
                                </select>
                                <span class="error "></span>
                            </div>
                            <!-- carrera select -->
                            <div class="form-div">
                                <label>Elige la carrera </label>
                                <select class="inputLp" id="carrera" name="carrera">
                                    <option value="">Selecciona una opción</option>
                                </select>
                                <span class="error "></span>
                            </div>
                              <div class="aviso">
                                    <span>Al enviar, reconoces haber leído y estar de acuerdo con el <a
                                    style="color:dodgerblue !important ;"
                                    href="https://www.aliatuniversidades.com.mx/aliat/aviso-de-privacidad" target="_blank">aviso
                                    de
                                    privacidad</a></span>
                                </div>
                                <div class="form-div">
                                        <button type="button" class="naranja" onclick="segundoPaso()" />ENVIAR</button>
                                        <button type="button" class="lt-naranja" onclick="contacto.ActualizarPaso('paso1','paso2')" />REGRESAR</button>
                                </div>
                        </div>
                        </form>
                     </div>   
            </section>
        `;
    }
}

