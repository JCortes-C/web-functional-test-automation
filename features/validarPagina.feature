
@TC-001-SauceDemo
Feature: Validar acceso a SauceDemo
  Scenario Outline: Validar que se muestra correctamente la pagina de SauceDemo
    Given que el usuario ingresa a la pagina de SauceDemo
    Then el usuario debe de visualizar el Titulo de "<titulo>"
    And el usuario debe de visualizar el formulario de Login

    Examples:
      | titulo    |
      | Swag Labs |
