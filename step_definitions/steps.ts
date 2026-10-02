const { youtubePages } = inject() as any;


Given('El usuario se encuentra en la página principal de YouTube', () => {
  youtubePages.abrirYoutube();
});


When('El usuario escribe {string} en el campo de búsqueda', (cancion: any) => {
  youtubePages.buscarCancion(cancion);
});


When('El usuario hace clic en el botón de Enter y Da clic en la primera canción que aparece en los resultados', () => {
  youtubePages.seleccionarPrimerResultado();
});


Then('Se muestran los resultados relacionados con {string}', () => {
  youtubePages.validarVideo();
});
