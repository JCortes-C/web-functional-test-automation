const { I } = inject();

class validarOpcionesMenu {

    fields = {
        username: '//input[@id="user-name"]',
        password: '//input[@id="password"]',
        botonInicioSesion: '//input[@id="login-button"]',
        botonMenu: '//button[@id="react-burger-menu-btn"]',
        allItems : '//a[@id="inventory_sidebar_link"]',
        dynamicCatalog: '//a[@id="dynamic_catalog_sidebar_link"]',
        about: '//a[@id="about_sidebar_link"]',
        logout: '//a[@id="logout_sidebar_link"]',
        resetAppState: '//a[@id="reset_sidebar_link"]',

        tituloProductos: '//span[@class="title" and @data-test="title" and normalize-space(text())="Products"]',
        sauceLabsBackpack: '//div[normalize-space(text())="Sauce Labs Backpack"]',
        sauceLabsBikeLight: '//div[normalize-space(text())="Sauce Labs Bike Light"]',
        sauceLabsBoltTShirt: '//div[normalize-space(text())="Sauce Labs Bolt T-Shirt"]',
        sauceLabsFleeceJacket: '//div[normalize-space(text())="Sauce Labs Fleece Jacket"]',
        sauceLabsOnesie: '//div[normalize-space(text())="Sauce Labs Onesie"]',
        TestallTheThingsTShirtRed: '//div[normalize-space(text())="Test.allTheThings() T-Shirt (Red)"]',
    }
    

    // Página Principal
    pagina(){
        I.amOnPage('/');
    }

    // =====================================================================================
    // TC-004
    ingresarCredenciales() {
        I.fillField(this.fields.username, "standard_user");
        I.fillField(this.fields.password, "secret_sauce");
        I.click( this.fields.botonInicioSesion)

    }

    menuLateral(){
        I.seeElement( this.fields.botonMenu);
        I.click( this.fields.botonMenu );
    }

    opcionesDisponibles(){
        I.waitForVisible( this.fields.allItems)
        I.seeElement( this.fields.allItems);
        I.seeElement( this.fields.dynamicCatalog);
        I.seeElement( this.fields.about);
        I.seeElement( this.fields.logout);
        I.seeElement( this.fields.resetAppState)
    }
    // =====================================================================================
    // TC-005
    opcionAllItemns(){
        I.waitForVisible( this.fields.allItems);
        I.click( this.fields.allItems)
    }

    validarCatalogoProductos(){
        I.waitForVisible( this.fields.tituloProductos)
        I.seeElement( this.fields.tituloProductos);
        I.waitForVisible( this.fields.sauceLabsBackpack)
        I.seeElement( this.fields.sauceLabsBackpack);
        I.waitForVisible( this.fields.sauceLabsBikeLight)
        I.seeElement( this.fields.sauceLabsBikeLight);
        I.waitForVisible( this.fields.sauceLabsBoltTShirt)
        I.seeElement( this.fields.sauceLabsBoltTShirt);
        I.waitForVisible( this.fields.sauceLabsFleeceJacket)
        I.seeElement( this.fields.sauceLabsFleeceJacket);
        I.waitForVisible( this.fields.sauceLabsOnesie)
        I.seeElement( this.fields.sauceLabsOnesie);
        I.waitForVisible( this.fields.TestallTheThingsTShirtRed)
        I.seeElement( this.fields.TestallTheThingsTShirtRed);
    }

}

export default new validarOpcionesMenu(); 