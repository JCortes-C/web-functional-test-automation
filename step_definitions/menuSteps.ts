const { validarOpcionesMenu } = inject() as any;

// ====================================================================================
    Given('El usuario se encuentra en la página principal del Login de Swab Labs', () => {
    validarOpcionesMenu.pagina();
    });

     //====================================================================================
    // @TC-004
    When('El usuario inicia sesión correctamente',() => {
        validarOpcionesMenu.ingresarCredenciales();
   });

   Then('El usuario abre el menú lateral', () => {
      validarOpcionesMenu.menuLateral();
   });

   Then('El usuario visualiza todas las opciones disponibles del menú', () => {
      validarOpcionesMenu.opcionesDisponibles();
   });

   // =====================================================================================
    // TC-005
  Then('Selecciona la opción All Items', () => {
      validarOpcionesMenu. opcionAllItemns();
   });
   Then('El usuario debe visualizar el catálogo completo de productos', () => {
      validarOpcionesMenu.validarCatalogoProductos();
   });