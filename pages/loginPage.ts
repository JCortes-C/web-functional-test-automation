const { I } = inject();

class validarlogin {
    fields = {
        // Titulo inicial de Login 
        username: '//input[@id="user-name"]',
        password: '//input[@id="password"]',
        botonInicioSesion: '//input[@id="login-button"]',
        mensajeError:'.error-message-container',
        tituloPaginaProducto: '//span[normalize-space(text())="Products"]'
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

}

export default new validarlogin(); 



