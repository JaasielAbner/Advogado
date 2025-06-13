document.addEventListener("DOMContentLoaded", () => {
    // Track CTA clicks
    document.querySelectorAll("[data-track]").forEach(el => {
        el.addEventListener("click", () => {
            console.log("Tracked:", el.getAttribute("data-track"));
        });
    });

    // Contact form feedback
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Simple feedback, replace with real submission as needed
            form.reset();
            alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
        });
    }
});
