document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-track]").forEach(el => {
        el.addEventListener("click", () => {
            console.log("Tracked:", el.getAttribute("data-track"));
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ryzgc4ng9o");
        });
    });
});
