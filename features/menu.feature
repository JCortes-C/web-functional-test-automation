@menuFuncional
Feature: Validar Funcionalidad de Menú 
    Background:
    Given El usuario se encuentra en la página principal del Login de Swab Labs

    @TC-004
    Scenario: Validar visibilidad de todas las opciones disponibles del menú
        When El usuario inicia sesión correctamente
        And El usuario abre el menú lateral
        Then El usuario visualiza todas las opciones disponibles del menú

    @TC-005
    Scenario: Validar la visualización de productos al seleccionar All Items
        When El usuario inicia sesión correctamente
        And El usuario abre el menú lateral
        And Selecciona la opción All Items
        Then El usuario debe visualizar el catálogo completo de productos
     

    