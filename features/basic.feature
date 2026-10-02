@youtube
Feature: Búsqueda de una canción en YouTube

  Scenario: Buscar una canción
    Given El usuario se encuentra en la página principal de YouTube
    When El usuario escribe "Bohemian Rhapsody" en el campo de búsqueda
    And El usuario hace clic en el botón de Enter y Da clic en la primera canción que aparece en los resultados
    Then Se muestran los resultados relacionados con "Bohemian Rhapsody"