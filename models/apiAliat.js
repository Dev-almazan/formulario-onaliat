

class apiAliat 
{

    static async cargarPlanDeEstudios(url, parametros, token) {
        try {
            const respuesta = await fetch(url + parametros, {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`,
                    'content-type': 'application/json'
                }
            });
            return await respuesta.json();
        }
        catch (error) {
            console.error("Error al hacer el conect a api ", error);
        }
    }
    
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
            case 'ONALIAT':
                gracias = "https://www.onaliat.mx/etac/gracias-por-registrarte";
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
                },
                {
                    marca: "ONALIAT",
                    urlGoogle: "https://api.whatsapp.com/send?phone=5215579722448&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20programas%20en%20l%C3%ADnea.%20%20%F0%9F%A4%94",
                    urlDirecto: "https://api.whatsapp.com/send?phone=5215579722448&text=%C2%A1Hola!%20Navegu%C3%A9%20por%20su%20sitio%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20programas%20en%20l%C3%ADnea.%20%F0%9F%8C%90",
                    UrlPro: "https://api.whatsapp.com/send?phone=5215579722448&text=Vengo%20de%20su%20sitio%20web%20y%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20detalles%20sobre%20programas%20en%20l%C3%ADnea.%20%F0%9F%8C%9F%0A"
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
