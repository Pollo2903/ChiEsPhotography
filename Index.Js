document.addEventListener("DOMContentLoaded", function() {
    const folders = document.querySelectorAll(".folder");

    folders.forEach(folder => {
        folder.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            
            // Ocultar todas las secciones
            document.querySelectorAll(".folder-content").forEach(section => {
                section.classList.add("hidden");
            });

            // Mostrar solo la seleccionada
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });
});
function togglePrice(element) {
    // Oculta todos los precios
    document.querySelectorAll(".price").forEach(price => price.classList.add("hidden"));

    // Muestra solo el precio del producto seleccionado
    const price = element.querySelector(".price");
    price.classList.remove("hidden");
}
// Deshabilitar clic derecho
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Bloquear teclas como F12, Ctrl+Shift+I, Ctrl+U, etc.
document.addEventListener("keydown", function(event) {
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

// Esperar a que la página cargue completamente
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const logo = document.getElementById("logo-final");

    // Desvanecer el preloader
    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none"; // Oculta el preloader
        document.getElementById("contenido").style.display = "block"; // Muestra la página
        logo.classList.add("mover-logo"); // Mueve el logo a la esquina
    }, 1200); // Espera 1.5s antes de ocultar el preloader
});
