// Patrón de Módulo

let modulo = (() => {

    // Variables Privadas y Propiedades

    let contenedor;

    // Métodos Privados

    function privadoMostrarMultimedia(urlPrivada, idPrivada) {
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
        publicoMostrarMultimedia: function (urlPublica, idPublico) {
            privadoMostrarMultimedia(urlPublica, idPublico);
        }
    }
});

