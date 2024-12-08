// Selección de elementos
const navMenu = document.querySelector('.nav__bars');
const navLinksMenu = document.querySelector('.nav__link--menu');
const navClose = document.querySelector('.nav__close');
const heroCTA = document.querySelector('.cta');
const botonesMasInfo = document.querySelectorAll('.boton, .boton2');

// Función para abrir el menú
navMenu.addEventListener('click', () => {
    navLinksMenu.classList.add('show'); // Muestra el menú con fondo negro
    navClose.style.setProperty('--show', 'block'); // Muestra el ícono de cierre
    document.body.classList.add('menu-open'); // Desactiva el scroll
  });
  
  // Función para cerrar el menú
navClose.addEventListener('click', () => {
    navLinksMenu.classList.remove('show'); // Oculta el menú
    navClose.style.setProperty('--show', 'none'); // Oculta el ícono de cierre
    document.body.classList.remove('menu-open'); // Restaura el scroll
  });

// Función del botón "Comienza Ahora"
heroCTA.addEventListener('click', (event) => {
  event.preventDefault();
  alert('¡Gracias por tu interés! Pronto nos pondremos en contacto contigo.');
});

// Animación en los botones "Más información"
botonesMasInfo.forEach((boton) => {
  boton.addEventListener('mouseover', () => {
    boton.style.transform = 'scale(1.1)';
    boton.style.transition = 'transform 0.3s ease';
  });
  boton.addEventListener('mouseout', () => {
    boton.style.transform = 'scale(1)';
  });
});
// Array de testimonios (puedes agregar más)
const testimoniosData = [
  { text: "Gracias a FisFit, pude recuperar mi movilidad y sentirme mucho mejor. El equipo es increíblemente atento y profesional, me acompañaron en cada paso del proceso. ¡Recomiendo totalmente su servicio!", user: "Helida Huaman" },
  { text: "Un servicio excelente, el tratamiento fue muy efectivo y los resultados superaron mis expectativas. ¡Muchas gracias por todo!", user: "Carlos Lopez" },
  { text: "FisFit me ayudó a mejorar mi calidad de vida, no solo físicamente, sino también emocionalmente. El equipo es muy profesional y cercano. ¡Los recomiendo sin dudar!", user: "Maria Sanchez" },
  { text: "El proceso de rehabilitación fue muy bien acompañado y los resultados fueron sorprendentes. Me siento renovado gracias a todo el equipo de FisFit.", user: "Juan Perez" },
  { text: "El enfoque personalizado de FisFit marcó la diferencia. Cada sesión fue diseñada para mis necesidades específicas y los avances fueron rápidos. ¡Un gran equipo!", user: "Ana Gutierrez" }
];

// Obtener el contenedor de testimonios ya existente en el HTML
const contenedorTestimonios = document.querySelector('.testimonios');

// Limpiar cualquier contenido anterior dentro del contenedor, excepto el primer testimonio
const tituloTestimonios = contenedorTestimonios.querySelector('.title4');  // Título "Testimonios"
contenedorTestimonios.innerHTML = ''; // Limpiar todo

// Añadir el título "Testimonios"

// Crear los testimonios dinámicamente en HTML
testimoniosData.forEach((testimonio, index) => {
  const section = document.createElement('section');
  section.classList.add('testimonials', 'container');
  
  const testimonialText = document.createElement('h1');
  testimonialText.classList.add('testimonio');
  testimonialText.textContent = `"${testimonio.text}"`;

  const userName = document.createElement('p');
  userName.classList.add('users');
  userName.textContent = `-${testimonio.user}`;
  
  // Añadir el título con la clase .title4 para aplicar el estilo
  const testimonioTitle = document.createElement('h1');
  testimonioTitle.classList.add('title4'); // Usamos la clase .title4 ya definida en CSS
  testimonioTitle.textContent = 'Testimonios'; // Título para cada testimonio
  
  section.appendChild(testimonioTitle); // Añadir el título al testimonio
  section.appendChild(testimonialText); // Añadir el texto del testimonio
  section.appendChild(userName); // Añadir el nombre del usuario
  contenedorTestimonios.appendChild(section); // Añadir el testimonio al contenedor
});

// Obtener todas las secciones de testimonios
const testimonios = document.querySelectorAll('.testimonials');
let currentIndex = 0;

// Función para cambiar el testimonio visible
function cambiarTestimonio() {
  // Ocultar el testimonio actual
  testimonios[currentIndex].classList.remove('visible');
  
  // Actualizar el índice del testimonio actual
  currentIndex = (currentIndex + 1) % testimonios.length;

  // Mostrar el siguiente testimonio
  testimonios[currentIndex].classList.add('visible');
}

// Mostrar el primer testimonio (que ya está en HTML)
testimonios[currentIndex].classList.add('visible');

// Inicializar la animación para cambiar los testimonios
setInterval(cambiarTestimonio, 5000); // Cambia cada 5 segundos

// Detectar el evento de scroll
let lastScrollTop = 0; // Variable para recordar la última posición del scroll

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  const body = document.body;
  const scrollPosition = window.scrollY;

  if (scrollPosition > lastScrollTop) {
    // Si estamos haciendo scroll hacia abajo
    body.classList.add('scroll-active'); // Añadir la clase para activar estilos
  } else {
    // Si estamos haciendo scroll hacia arriba (volviendo al top)
    if (scrollPosition <= 0) {
      body.classList.remove('scroll-active'); // Eliminar la clase cuando el scroll vuelva al principio
    }
  }

  // Actualizar la última posición de scroll
  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
});
