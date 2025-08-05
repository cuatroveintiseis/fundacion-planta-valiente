const translations = {
    es: {
        "title": "Fundación Planta Valiente",
        "navbar.brand": "Fundación Planta Valiente",
        "navbar.home": "Inicio",
        "navbar.about": "Quienes somos",
        "navbar.team": "Equipo",
        "navbar.projects": "Proyectos",
        "navbar.alliances": "Alianzas",
        "navbar.contact": "Contacto",
        "navbar.language": "ES | EN",
        "carousel.slogan1": "EDUCAR PARA TRANSFORMAR",
        "carousel.slogan2": "COMUNIDAD, CONCIENCIA Y ACCIÓN",
        "carousel.slogan3": "AULAS LIBRES",
        "carousel.slogan4": "HACIA RUTAS COSTERAS",
        "carousel.prev": "Previous",
        "carousel.next": "Next",
        "about.title": "¿QUIÉNES SOMOS?",
        "about.text1": "La Fundación Planta Valiente nace con la misión de reconectar a las personas con la naturaleza a través de la educación ambiental. Creemos que la educación es transversal y está presente en todas nuestras acciones, desde cómo nos comunicamos hasta cómo interactuamos con el entorno.",
        "about.text2": "Vivimos en el Antropoceno, una era en la que las acciones humanas han transformado el planeta. Esto nos obliga a actuar de manera urgente y consciente. Por ello, nuestras acciones se centran en movilizar cambios reales y directos a través de la educación y la conciencia ambiental.",
        "about.text3": "Nos movilizamos a nivel nacional, y aspiramos a una visión internacional, porque entendemos que la crisis ambiental es global y requiere un esfuerzo colectivo. A través de acciones como el reciclaje, la limpieza de playas y la educación, buscamos inspirar un cambio en la forma en que las personas se relacionan con el planeta.",
        "counter.beach": "Limpiezas de playas y ríos",
        "counter.volunteers": "Voluntarios involucrados",
        "counter.waste": "Kilos de basura recolectados",
        "team.title": "NUESTRO EQUIPO",
        "team.felipe.name": "Felipe Altamirano",
        "team.felipe.role": "Fundador & CEO",
        "team.victoria.name": "Victoria Cataldo",
        "team.victoria.role": "Directora de arte",
        "team.cesar.name": "Cesar Coumerme",
        "team.cesar.role": "Director deportivo",
        "team.fabian.name": "Fabian González",
        "team.fabian.role": "Socio fundador",
        "projects.title": "PROYECTOS EN ACCIÓN",
        "projects.oil.title": "Campaña recolección de aceite",
        "projects.oil.text": "Recolectamos aceite usado para transformarlo en biodiesel, reduciendo la contaminación y promoviendo la economía circular.",
        "projects.beach.title": "Limpieza de playas",
        "projects.beach.text": "Organizamos jornadas de limpieza en las costas para proteger los ecosistemas marinos y concienciar sobre la contaminación plástica.",
        "projects.carpe.title": "Corporación Educativa Carpe Diem",
        "projects.carpe.text": "La corporación educativa Carpe Diem, es administradora de la escuela Mariano Latorre dónde el director de la fundación se desempeña como Sostenedor.",
        "projects.viewmore": "Ver más",
        "quote.text": "\"La organización territorial como motor de cambio.\"",
        "alliances.title": "ALIANZAS",
        "contact.title": "¿TE GUSTARÍA COLABORAR CON NOSOTROS?",
        "contact.instagram": "@laplantavaliente",
        "contact.whatsapp": "+56 9 9999 9999",
        "footer.copyright": "Fundación Planta Valiente © 2025. Todos los derechos reservados."
    },
    en: {
        "title": "Planta Valiente Foundation",
        "navbar.brand": "Planta Valiente Foundation",
        "navbar.home": "Home",
        "navbar.about": "About Us",
        "navbar.team": "Team",
        "navbar.projects": "Projects",
        "navbar.alliances": "Alliances",
        "navbar.contact": "Contact",
        "navbar.language": "EN | ES",
        "carousel.slogan1": "EDUCATE TO TRANSFORM",
        "carousel.slogan2": "COMMUNITY, CONSCIOUSNESS, AND ACTION",
        "carousel.slogan3": "OPEN CLASSROOMS",
        "carousel.slogan4": "TOWARDS COASTAL ROUTES",
        "carousel.prev": "Previous",
        "carousel.next": "Next",
        "about.title": "WHO WE ARE",
        "about.text1": "Planta Valiente Foundation was born with the mission to reconnect people with nature through environmental education. We believe that education is transversal and present in all our actions, from how we communicate to how we interact with the environment.",
        "about.text2": "We live in the Anthropocene, an era in which human actions have transformed the planet. This compels us to act urgently and consciously. Therefore, our actions focus on mobilizing real and direct change through education and environmental awareness.",
        "about.text3": "We operate nationally and aspire to an international vision, as we understand that the environmental crisis is global and requires a collective effort. Through actions such as recycling, beach cleanups, and education, we seek to inspire a change in how people relate to the planet.",
        "counter.beach": "Beach and river cleanups",
        "counter.volunteers": "Volunteers involved",
        "counter.waste": "Kilograms of waste collected",
        "team.title": "OUR TEAM",
        "team.felipe.name": "Felipe Altamirano",
        "team.felipe.role": "Founder & CEO",
        "team.victoria.name": "Victoria Cataldo",
        "team.victoria.role": "Art Director",
        "team.cesar.name": "Cesar Coumerme",
        "team.cesar.role": "Sports Director",
        "team.fabian.name": "Fabian González",
        "team.fabian.role": "Co-founder",
        "projects.title": "PROJECTS IN ACTION",
        "projects.oil.title": "Oil Collection Campaign",
        "projects.oil.text": "We collect used oil to transform it into biodiesel, reducing pollution and promoting a circular economy.",
        "projects.beach.title": "Beach Cleanups",
        "projects.beach.text": "We organize cleanup days on the coasts to protect marine ecosystems and raise awareness about plastic pollution.",
        "projects.carpe.title": "Carpe Diem Educational Corporation",
        "projects.carpe.text": "The Carpe Diem Educational Corporation manages the Mariano Latorre School, where the foundation's director serves as the Maintainer.",
        "projects.viewmore": "Learn More",
        "quote.text": "\"Territorial organization as a driver of change.\"",
        "alliances.title": "ALLIANCES",
        "contact.title": "WOULD YOU LIKE TO COLLABORATE WITH US?",
        "contact.instagram": "@laplantavaliente",
        "contact.whatsapp": "+56 9 9999 9999",
        "footer.copyright": "Planta Valiente Foundation © 2025. All rights reserved."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key] || element.textContent;
    });
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    const toggleButton = document.getElementById('language-toggle');
    toggleButton.setAttribute('data-lang', lang);
    toggleButton.textContent = translations[lang]['navbar.language'];
}

document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});

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