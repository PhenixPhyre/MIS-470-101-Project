function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
    console.log("Login function triggered"); 

    // Mock credentials
    const validEmail = "user"; // Mock username 
    const validPassword = "password"; // Mock password 

    // Get values from form fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Entered Username:", email); 
    console.log("Entered Password:", password); 

    // Check credentials
    if (email === validEmail && password === validPassword) {
        console.log("Credentials are valid"); 
        document.getElementById("loginMessage").textContent = "Login successful!";
        document.getElementById("loginMessage").style.color = "green";

       
        setTimeout(() => {
            window.location.href = "/pages/profile.html"; // Redirect path to profile page
        }, 1000);
    } else {
        console.log("Credentials are invalid"); 
        document.getElementById("loginMessage").textContent = "Invalid email or password.";
        document.getElementById("loginMessage").style.color = "red";
    }
}