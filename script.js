/* =========================================================
   NEW IDEAS INTERIORS
   WEBSITE FUNCTIONALITY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       FREE QUOTE FORM
       Opens WhatsApp with enquiry details
    ----------------------------------------------------- */

    const quoteForm = document.querySelector(".quote-form");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !phone || !service) {
                alert("Please fill in your name, phone number and required service.");
                return;
            }

            const whatsappNumber = "916394587880";

            const whatsappMessage =
                "Hello New Ideas Interiors,%0A%0A" +
                "I would like to enquire about your interior services.%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A" +
                "Service: " + encodeURIComponent(service) + "%0A" +
                "Requirement: " + encodeURIComponent(message || "Not specified") +
                "%0A%0AThank you.";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }


    /* -----------------------------------------------------
       HEADER WHATSAPP
    ----------------------------------------------------- */

    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    whatsappLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
             * WhatsApp links are already configured.
             * This listener is kept intentionally simple
             * so the links remain reliable on mobile and desktop.
             */

        });

    });


    /* -----------------------------------------------------
       IMAGE FALLBACK
       Prevents broken-image icons while actual images
       are being uploaded.
    ----------------------------------------------------- */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.display = "none";

        });

    });


    /* -----------------------------------------------------
       CURRENT YEAR
       Automatically updates footer year if needed.
    ----------------------------------------------------- */

    const footerYear = document.querySelector(".footer-bottom p");

    if (footerYear) {

        const currentYear = new Date().getFullYear();

        footerYear.textContent =
            "© " +
            currentYear +
            " New Ideas Interiors. All Rights Reserved.";

    }

});
