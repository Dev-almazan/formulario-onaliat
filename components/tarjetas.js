
/*Web componentes  calculadora */


class onaliatCardFooter extends HTMLElement {

    /*Escuchamos valores */
    static get observedAttributes() { 
        return ["data-titulo", "data-subtitulo"]; 
    }

    constructor() {
        super();
        this.titulo = this.getAttribute("data-titulo"),
        this.sub = this.getAttribute("data-subtitulo")
    }

    /*Inicializamos componente */
    connectedCallback() {
        this.contenido();
    }

    /*actualizamos componente */
    attributeChangedCallback(name, old, newValue) 
    {
        if (name === "data-titulo") 
        {
         this.titulo = newValue;
        } else if(name === "data-subtitulo") 
        {
         this.sub = newValue;
        }
        this.contenido();
    }

    contenido()
    {
        this.innerHTML = `
                    <div>
                            <h2>${this.titulo}</h2>
                            <h3>${this.sub}</h3>
                    </div>

                      
        `
    }

}

class onaliatTarjeta extends HTMLElement {
    

    constructor(){
        super();
        this.titulo= this.getAttribute("data-titulo"),
        this.sub = this.getAttribute("data-subtitulo")
    }


    static RenderCard(uno,dos) 
    {
        if (!customElements.get('onaliat-card-footer')) 
        {
            customElements.define('onaliat-card-footer',onaliatCardFooter);
        }

        document.getElementById("onaliatFooterCard").dataset.titulo = uno
        document.getElementById("onaliatFooterCard").dataset.subtitulo = dos
        
    }


    connectedCallback() {
        
        this.innerHTML = `
            <article>
                    <h2>${this.titulo}</h2>
                    <h3>${this.sub}</h3>
                    <section>
                        <div onclick="onaliatTarjeta.RenderCard('Donde quieras, cuando quieras: 100% online','Programas en línea que jamás duermen.')">
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(2).svg" />
                        </div>
                        <div onclick="onaliatTarjeta.RenderCard('Donde','Programas')">
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(1).svg" />
                        </div>                        
                        <div>
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(8).svg" />
                        </div>                        
                        <div>
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(7).svg" />
                        </div>                        
                        <div>
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(6).svg" />
                        </div>                        
                        <div>
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(5).svg" />
                        </div>                        
                        <div>
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(3).svg" />
                        </div>                        
                        <div>
                            <img src="https://www.etac.edu.mx/hubfs/Landing-aliat/card%20(4).svg" />
                        </div>                        
                    </section>   
                    <onaliat-card-footer id="onaliatFooterCard" data-titulo="Donde quieras, cuando quieras: 100% online" data-subtitulo="Programas en línea que jamás duermen."><onaliat-card-footer>     
            </article>
            
        `;
        customElements.define("onaliat-card-footer", onaliatCardFooter);
    }

}


