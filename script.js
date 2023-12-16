function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthParagraph = document.getElementById("password-strength");

    // Define the password strength criteria
    const minLength = 8;
    const maxLength = 12;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@#$%^&*]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    // Check if the password meets the criteria
    if (password.length >= minLength && password.length <= maxLength && hasNumber && hasSpecialChar && hasUpperCase && hasLowerCase) {
        strengthParagraph.textContent = "Password strength: Strong";
        strengthParagraph.className = "strong";
    } else {
        strengthParagraph.textContent = "Password strength: Weak";
        strengthParagraph.className = "weak";
    }
}
