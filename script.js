// Add animations for smooth scrolling and fade-in effects

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll(".timeline-item, .grid-item");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

//email



document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah reload halaman

        // Kirim form ke EmailJS
        emailjs.sendForm("service_kst2u22", "template_k8o66nj", this)
            .then(() => {
                alert("Pesan berhasil dikirim!");
                this.reset(); // Membersihkan form setelah dikirim
            })
            .catch(error => {
                alert("Gagal mengirim pesan. Coba lagi nanti.");
                console.error("Error: ", error);
            });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Toggle navbar visibility on hamburger menu click
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
});
