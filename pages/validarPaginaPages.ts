const { I } = inject();


class validarPaginAPages {
    fields = {
        // Titulo inicial de Login 
        swagLabs: '//div[@class="login_logo"]',
        formulario: '#login_button_container',
    }
    // Página Principal
    pagina(){
        I.amOnPage('/');
    }
    // ====================================================================================
    // @TC-001-SauceDemo
    validarTituloPaginaInicial(titulo: string) {
        I.see(titulo, this.fields.swagLabs);
        I.seeElement( this.fields.swagLabs);
    }

    validarFormularioPaginaInicial(){
        I.seeElement( this.fields.formulario);
    }


    //====================================================================================
}

export default new validarPaginAPages();