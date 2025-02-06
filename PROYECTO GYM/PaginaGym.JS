// Obtener el botón de menú y el menú desplegable
const botonMenu = document.querySelector('.boton-menu');
const menuDesplegable = document.querySelector('.menu-desplegable');

// Agregar un evento click al botón de menú
botonMenu.addEventListener('click', () => {
  // Alternar la clase "abierto" en el menú desplegable
  menuDesplegable.classList.toggle('abierto');
});

// Obtener todos los enlaces del menú
const enlacesMenu = document.querySelectorAll('.menu-desplegable a');

// Agregar un evento click a cada enlace del menú
enlacesMenu.forEach(enlace => {
  enlace.addEventListener('click', () => {
    // Cerrar el menú desplegable al hacer clic en un enlace
    menuDesplegable.classList.remove('abierto');
  });
});
