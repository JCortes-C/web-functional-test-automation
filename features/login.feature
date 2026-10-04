@loginFuncional
Feature: Validar inicio de sesión en Swag Labs
    Background:
    Given El usuario se encuentra en la página principal del Login de Swab Labs

    @TC-002
    Scenario Outline: Validar inicio de sesión con diferentes credenciales en login de Swab Labs
        When el usuario ingresa el correo "<correo>"
        And el usuario ingresa la contraseña "<password>"
        And el usuario selecciona el botón de inicio de sesión
        Then el sistema debe mostrar el resultado "<resultado>"

      Examples:
      | correo              | password              | resultado                |
      | standard_user       | secret_sauce          | Products                 |
      | standard_user       | contraseña_invalida   | Epic sadface: Username and password do not match any user in this service |
      | correo_invalido     | secret_sauce          | Epic sadface: Username and password do not match any user in this service |
      |                     | secret_sauce          | Epic sadface: Username is required |
      | standard_user       |                       | Epic sadface: Password is required |