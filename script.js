document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-track]").forEach(el => {
        el.addEventListener("click", () => {
            console.log("Tracked:", el.getAttribute("data-track"));
            // You can enhance this with real analytics tracking if needed.
        });
    });
});
