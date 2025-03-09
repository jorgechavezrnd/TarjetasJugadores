// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjetaFrontal = document.querySelector('.tarjeta .frontal');
const tarjetaPosterior = document.querySelector('.tarjeta .posterior');

// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', () => {
  tarjetaFrontal.style.transform = 'rotateY(180deg)';
  tarjetaPosterior.style.transform = 'rotateY(0deg)';
});

// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
  tarjetaPosterior.style.transform = 'rotateY(180deg)';
  tarjetaFrontal.style.transform = 'rotateY(0deg)';
});
