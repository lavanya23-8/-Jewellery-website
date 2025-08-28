// Sample users with usernames and passwords
const users = [
    { username: "Nissi", password: "Nissi" },
    { username: "Ashlee", password: "Ashlee" },
    { username: "Lavanya", password: "Lavanya" }
];

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check for valid username and password
    const user = users.find(cred => cred.username === username && cred.password === password);

    if (user) {
        // Successful login
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";

        // Redirect to another page upon successful login
        window.location.href = "http://127.0.0.1:5500/home.html"; // Change "welcome.html" to the desired page
    } else {
        // Invalid login
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
    }
}
if (user) {
    errorMessage.textContent = "Login successful!";
    errorMessage.style.color = "green";
    
    // Redirect after a brief delay
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/home.html";
    }, 1000); // 1000 milliseconds = 1 second delay
}
// visibility eye icon
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
        
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
       
    }
}
