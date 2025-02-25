document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("formMessage").textContent = "Thank you for reaching out! I'll get back to you soon.";
        document.getElementById("formMessage").style.color = "#61dafb";
        this.reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill in all fields.";
        document.getElementById("formMessage").style.color = "red";
    }
});
