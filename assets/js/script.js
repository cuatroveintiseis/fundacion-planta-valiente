// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Formulario
$(document).ready(function () {
    $("#enviarCorreo").click(function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto del botón
        alert("El mensaje fue enviado correctamente...");
    });
});

// Contadores
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    console.log('Contadores encontrados:', counters.length); // Debería mostrar 3

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    } else {
        counters.forEach(counter => animateCounter(counter));
    }

    // Iniciar animación si la sección está visible al cargar
    const section = document.querySelector('.counter-section');
    if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            counters.forEach(counter => animateCounter(counter));
        }
    }
});