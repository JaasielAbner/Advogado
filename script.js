// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for header links
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Track CTA clicks
    document.querySelectorAll("[data-track]").forEach(el => {
        el.addEventListener("click", () => {
            console.log("Tracked:", el.getAttribute("data-track"));
        });
    });

    // Contact form feedback + envio via EmailJS
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('service_m6c1yzf', 'template_80608ux', this)
                .then(() => {
                    console.log('SUCCESS!');
                    // Reset form fields
                    this.reset();
                    // Optionally, you can redirect or show a success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = '<p>Mensagem enviada com sucesso! Em breve entraremos em contato.</p>';
                    document.body.appendChild(successMessage);
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, (error) => {
                    console.error('FAILED...', error);
                    alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
                });
        });
    }
    // Cards de áreas de atuação: mostrar descrição ao clicar
    const areaItems = document.querySelectorAll('.area-item');
    if (areaItems.length > 0) {
        areaItems.forEach(card => {
            card.addEventListener('click', function(e) {
                areaItems.forEach(c => {
                    if (c !== card) c.classList.remove('active');
                });
                card.classList.toggle('active');
            });
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.area-item')) {
                areaItems.forEach(c => c.classList.remove('active'));
            }
        });
    }

    // WhatsApp popup logic
    const popup = document.getElementById('whatsappPopup');
    const closeBtn = document.getElementById('closePopup');
    if (popup && closeBtn) {
        // Show popup after 6 seconds
        setTimeout(() => {
            popup.classList.add('show');
        }, 6000);

        // Close on button click
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('show');
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && popup.classList.contains('show')) {
                popup.classList.remove('show');
            }
        });

        // Close on outside click
        popup.addEventListener('mousedown', (e) => {
            if (e.target === popup) {
                popup.classList.remove('show');
            }
        });
    }
});

