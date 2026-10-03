const { validarPagina } = inject() as any;

    // ====================================================================================
    // @TC-001-SauceDemo
    Given(/^que el usuario ingresa a la pagina de SauceDemo$/, () => {
    validarPagina.pagina();
    });

    Then('el usuario debe de visualizar el Titulo de {string}', (titulo: string) => {
    validarPagina.validarTituloPaginaInicial(titulo);
    });

    Then('el usuario debe de visualizar el formulario de Login', () => {
    validarPagina.validarFormularioPaginaInicial()
    });
    // ====================================================================================