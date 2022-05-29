// Patrón de Módulo

let modulo = (() => {

    // Variables Privadas y Propiedades

    let contenedor;

    // Métodos Privados

    function privadoMostrarVideos(urlPrivada, idPrivada) {
        if (idPrivada == 'musica') {
            contenedor = document.querySelector('#musica > iframe');
            contenedor.setAttribute('src', urlPrivada);
        } else if (idPrivada == 'peliculas') {
            contenedor = document.querySelector('#pelicula > iframe');
            contenedor.setAttribute('src', urlPrivada);
        } else if (idPrivada == 'series') {
            contenedor = document.querySelector('#series > iframe');
            contenedor.setAttribute('src', idPrivada);
        }
    }
    // API Pública
    return {
        publicoMostrarVideos: function (urlPublica, idPublico) {
            privadoMostrarVideos(urlPublica, idPublico);
        }
    }
});

// Clase Padre protegiendo el atributo con closures

class Videos {
    constructor(url) {
        this._url = url;
        this.getUrl = () => _url;
        this.setUrl = (new_url) => _url = new_url;
    }

    get url() {
        return this.getUrl();
    }

    set url(new_url) {
        this.setUrl(new_url);
    }

    setComienzo() {
        return 'Método para realizar un cambio en la URL del Video'
    }

}

    // Clase Hija

class Reproduccion extends Videos{
    
}