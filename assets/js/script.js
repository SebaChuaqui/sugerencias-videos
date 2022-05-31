let modulo = (() => {

    let container;

    function privateMostrarMultimedia(urlPrivada, idPrivado) {
        if (idPrivado == 'musica') {
            container = document.querySelector('#musica > iframe');
            container.setAttribute('src', urlPrivada);
        } else if (idPrivado == 'peliculas') {
            container = document.querySelector('#peliculas > iframe');
            container.setAttribute('src', urlPrivada);
        } else if (idPrivado == 'series') {
            container = document.querySelector('#series > iframe');
            container.setAttribute('src', urlPrivada);
        }
    }

    return {
        publicMostrarMultimedia: function (urlPublica, idPublico) {
            privateMostrarMultimedia(urlPublica, idPublico);
        },
    }
})();

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;
    }

    get url() {
        return this.getUrl();
    }

    set url(nueva_url) {
        this.setUrl(nueva_url);
    }

    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

class Video extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    get id() {
        return this._id;
    }

    playMultimedia() {
        modulo.publicMostrarMultimedia(this.url, this.id);
    }

    setInicio(tiempo_inicio) {
        this.url = `${this.url}?start=${tiempo_inicio}`;
    }
}

let musica1 = new Video('https://www.youtube.com/embed/fJ9rUzIMcZQ', 'musica');
let pelicula1 = new Video('https://www.youtube.com/embed/2lJ2F7VeM1s', 'peliculas');
let serie1 = new Video('https://www.youtube.com/embed/bNMGev-SNMw', 'series');

serie1.setInicio(85);

let btn1 = document.querySelector('#headingOne > h2 > button');
btn1.addEventListener('click', musica1.playMultimedia());

let btn2 = document.querySelector('#headingTwo > h2 > button');
btn2.addEventListener('click', pelicula1.playMultimedia());

let btn3 = document.querySelector('#headingThree > h2 > button');
btn3.addEventListener('click', serie1.playMultimedia());