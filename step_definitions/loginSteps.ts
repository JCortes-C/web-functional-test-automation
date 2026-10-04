const {   loginPage } = inject() as any;

 // ====================================================================================
    // @TC-002
    Given('El usuario se encuentra en la página principal del Login de Swab Labs', () => {
    loginPage.pagina();
    });

    When('el usuario ingresa el correo {string}', (correo:string) => {
    loginPage.ingresarUsuario(correo);
    });

    Then('el usuario ingresa la contraseña {string}', (password:string) => {
    loginPage.ingresarPassword(password);
    });

    Then('el usuario selecciona el botón de inicio de sesión', () => {
    loginPage.iniciarSesion();
    });

    Then('el sistema debe mostrar el resultado {string}', (resultado:string) => {
    loginPage.validarResultado(resultado);
    });




    

