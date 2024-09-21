const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn = document.querySelector('.sign-in'),
      $loginEmail = document.getElementById('login-email'),
      $loginPassword = document.getElementById('login-password'),
      $btnLogin = document.getElementById('btn-login'),
      $errorMessage = document.getElementById('error-message'),
      $successMessage = document.getElementById('success-message');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

// Validación de inicio de sesión
$btnLogin.addEventListener('click', () => {
    const email = $loginEmail.value;
    const password = $loginPassword.value;

    if (email === "user123" && password === "12345usuario") {
        $successMessage.style.display = "block"; // Muestra el mensaje de éxito
        $errorMessage.style.display = "none"; // Oculta el mensaje de error
        setTimeout(() => {
            window.location.href = "menu.html"; // Redirige a la página del menú
        }, 1000); // Espera 1 segundo antes de redirigir
    } else {
        $errorMessage.style.display = "block"; // Muestra el mensaje de error
        $successMessage.style.display = "none"; // Oculta el mensaje de éxito
    }
});
