const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

// Example credentials (replace with database check later)
const credentials = {
    username: "admin",
    password: "admin123"
};

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === credentials.username && password === credentials.password){
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        errorMsg.textContent = "Invalid username or password!";
    }
});
