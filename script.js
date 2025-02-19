// Fondo espacial animado
const canvas = document.getElementById("spaceCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

// Carrusel de imágenes en cada proyecto
document.querySelectorAll(".carrusel").forEach(carrusel => {
    let images = carrusel.querySelectorAll("img");
    let index = 0;

    function showNextImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    images[0].classList.add("active");
    setInterval(showNextImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const tecnologias = {
        "HTML": "Me capacite en cursos Gratuitos de Udemy y realice el Curso de Argentina Programa Completo. Ademas de realizar varias Paginas de manera Freelance",
        "CSS": "Me capacite en cursos Gratuitos de Udemy y realice el Curso de Argentina Programa Completo. Ademas de realizar varias Paginas de manera Freelance",
        "JavaScript": "Me capacite en cursos Gratuitos de Udemy y realice el Curso de Argentina Programa Completo. Ademas de realizar varias Paginas de manera Freelance",
        "Unity": "Motor de videojuegos popular para 2D y 3D. Me capacite en la Universidad Nacional de José Clemente Paz y de forma autodidacta para mejorar mis habilidades",
        "Godot": "Motor de videojuegos open-source para desarrollo 2D y 3D. Me capacite de manera Autodidacta, siguiendo tutoriales. Hoy es unas de mis tecnologias preferidas",
        "GoogleTools": "Herramientas de Google como Drive, Docs, Sites entre otras. Realice la pagina web de la empresa MCMasterClean con estas tecnologias, hoy en dia sigue activa",
        "Paquete de Offices": "Suite de herramientas como Word, Excel y PowerPoint."
    };

    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.querySelector(".close");

    document.querySelectorAll(".tecnologias-list li").forEach(li => {
        li.addEventListener("click", () => {
            const tecnologia = li.getAttribute("data-tec");
            popupTitle.textContent = tecnologia;
            popupText.textContent = tecnologias[tecnologia] || "No hay información disponible.";
            popup.style.display = "block";
        });
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
document.getElementById("contacto-link").addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el enlace funcione por defecto

        var email = "alejandro.jorge.banegas@gmail.com";
        var subject = "Asunto";
        var body = "Hola, Alejandro.";

        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // Si es un dispositivo móvil, abrir la app de correo predeterminada
            window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        } else {
            // Si es PC, abrir Gmail en el navegador
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body), "_blank");
        }
    });
