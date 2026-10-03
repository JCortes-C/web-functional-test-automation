const { I } = inject();

class YoutubePage {

    fields = {
        buscador: '//input[@name="search_query"]',
        primerVideo: '//ytd-video-renderer[1]//a[@id="video-title"]',
        tituloVideo: '//*[@id="title"]/h1/yt-formatted-string'
    };

    abrirYoutube() {
        I.amOnPage('/');
    }

    buscarCancion(cancion: string) {
        I.waitForElement(this.fields.buscador, 10);
        I.fillField(this.fields.buscador, cancion);
    }

    seleccionarPrimerResultado() {
        I.pressKey('Enter');
        I.waitForElement(this.fields.primerVideo, 10);
        I.click(this.fields.primerVideo);
    }

    validarVideo() {
        I.wait(10);
        I.waitForElement(this.fields.tituloVideo, 5);
    }
}

export default new YoutubePage();