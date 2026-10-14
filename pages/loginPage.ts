const { I } = inject();

class validarlogin {
    fields = {
        // Titulo inicial de Login 
        username: '//input[@id="user-name"]',
        password: '//input[@id="password"]',
        botonInicioSesion: '//input[@id="login-button"]',
        mensajeError:'.error-message-container',
        tituloPaginaProducto: '//span[normalize-space(text())="Products"]',
        botonMenu: '//button[@id="react-burger-menu-btn"]',
        opcionCerrarSesion: '//a[@data-test="logout-sidebar-link"]',
    }
    // Página Principal
    pagina(){
        I.amOnPage('/');
    }

    // =====================================================================================
    // TC-002
     ingresarUsuario(correo: string) {
        I.fillField(this.fields.username, correo);
     }
     ingresarPassword(password: string) {
        I.fillField(this.fields.password, password);
     }
     iniciarSesion() {
        I.click(this.fields.botonInicioSesion);
     }

     validarResultado(resultado:string){
        if (resultado === 'Products') {
            I.seeElement(this.fields.tituloPaginaProducto);
        } else {
            I.see(resultado, this.fields.mensajeError);
        }
     }
     // =====================================================================================
     // TC-003
     // Abrir el menú lateral
    abrirMenu() {
        I.click(this.fields.botonMenu);
    }
    // Seleccionar la opción Logout
    cerrarSesion() {
        I.waitForElement(this.fields.opcionCerrarSesion, 5);
        I.click(this.fields.opcionCerrarSesion);
    }
    // Validar que se muestre la página de login
    validarPaginaLogin() {
        I.seeElement(this.fields.botonInicioSesion);
    }
     // =====================================================================================


}

export default new validarlogin(); 



