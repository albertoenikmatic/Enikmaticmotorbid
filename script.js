document.addEventListener("DOMContentLoaded", function() {
    console.log("Landing Page EnikmaticMotorBid cargada correctamente.");

    // Manejo del formulario de registro
    const form = document.getElementById("registro-form");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (nombre === "" || email === "" || password === "") {
            mensaje.textContent = "Todos los campos son obligatorios.";
            mensaje.style.color = "red";
            return;
        }

        mensaje.textContent = "¡Registro exitoso! 🚀";
        mensaje.style.color = "green";

        // Limpiar campos después de registrar
        form.reset();
    });
});
