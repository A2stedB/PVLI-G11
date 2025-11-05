// main.js

document.addEventListener('DOMContentLoaded', function() {
    const backgroundImages = document.querySelectorAll('.container-background .background');
    // 1. Obtener la capa negra
    const blackOverlay = document.querySelector('.black-overlay'); 
    
    let currentIndex = 0;
    const intervalTime = 10000; // Tiempo total entre cambios (6 segundos)
    const transitionDuration = 1000; // Duración del fade CSS (0.5 segundos)

    if (backgroundImages.length <= 1) {
        return;
    }

    // 2. Función para cambiar a la siguiente imagen con fade-to-black
    function showNextImage() {
        
        // PASO 1: FADE OUT (Hacer la capa negra visible)
        blackOverlay.style.opacity = 1;

        // Esperar la duración de la transición a negro
        setTimeout(() => {
            
            // PASO 2: CAMBIAR LA IMAGEN (en la oscuridad)
            
            // Desactivar la imagen actual
            backgroundImages[currentIndex].classList.remove('active-bg');
            
            // Mover al siguiente índice y hacer que vuelva a 0 si llega al final
            currentIndex = (currentIndex + 1) % backgroundImages.length;
            
            // Activar la nueva imagen (ahora es la visible detrás del negro)
            backgroundImages[currentIndex].classList.add('active-bg');
            
            // PASO 3: FADE IN (Hacer la capa negra invisible)
            // Esto revela la nueva imagen con una transición suave
            blackOverlay.style.opacity = 0;
            
        }, transitionDuration); // El tiempo de espera es igual a la duración del fade CSS
    }

    setInterval(showNextImage, intervalTime);
});