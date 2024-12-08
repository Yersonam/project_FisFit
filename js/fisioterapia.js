document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled'); // Fija el nav y agrega fondo
        } else {
            navbar.classList.remove('scrolled'); // Restaura el estado original
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// JavaScript para abrir el modal y cargar el video
document.querySelectorAll('.image-link').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();  // Evitar la acción predeterminada del enlace
        const videoSrc = item.getAttribute('href'); // Usamos el href del enlace para el video
        
        // Cambiar la fuente del video en el modal
        const videoPlayer = document.getElementById('video-player');
        const videoSource = document.getElementById('video-source');
        videoSource.setAttribute('src', videoSrc);
        videoPlayer.load();
        videoPlayer.play();
        
        // Mostrar el modal
        document.getElementById('video-modal').style.display = 'flex'; // Cambiar a 'flex' para centrar
    });
});

// Cerrar el modal al hacer clic en el botón de cerrar
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('video-modal').style.display = 'none';
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.pause(); // Detener el video cuando se cierra el modal
});
