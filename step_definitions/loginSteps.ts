const {   loginPage } = inject() as any;

 // ====================================================================================
    
    Given('El usuario se encuentra en la página principal del Login de Swab Labs', () => {
    loginPage.pagina();
    });
 // ====================================================================================
 // @TC-002
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

   //   ====================================================================================
    // @TC-003
    When('el usuario ingresa el usuario {string}', (usuario: string) => {
    loginPage.ingresarUsuario(usuario);
   });

   Then('el usuario ingresa la contraseña {string}', (password: string) => {
      loginPage.ingresarPassword(password);
   });

   // Then('el usuario selecciona el botón de inicio de sesión', () => {
   //    loginPage.iniciarSesion();
   // });

   Then('el usuario abre el menú lateral', () => {
      loginPage.abrirMenu();
   });

   Then('el usuario selecciona la opción de cerrar sesión', () => {
      loginPage.cerrarSesion();
   });

   Then('el sistema debe redirigir al usuario a la página de login', () => {
      loginPage.validarPaginaLogin();
   });




    

