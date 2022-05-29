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

