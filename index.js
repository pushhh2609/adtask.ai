document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded!");

    document.querySelector(".cta-button").addEventListener("click", function () {
        alert("Redirecting to sign-up...");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Feature section loaded!");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
