function verifyLogin() {

    const message = document.getElementById("error");
    message.style.color = 'red';
    message.style.fontSize = "large";
    
    if (validateName(message) && validatePhone(message) && validateEmail(message) && validatePassword(message) ) {
        message.style.color = 'green';
        message.innerHTML = 'User Registered Successfully!';
    }
}


function validateName(message) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;

    if (name.trim() === "" || email.trim() === "" || number.trim() === "" || password.trim() === "") {
      message.innerHTML="Field cannot be empty!";
      return false;
    }
    return true;
}

function validatePassword(message) {
    let password = document.getElementById("password").value
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password)) {
      message.innerHTML="Password must be atleast  8 characters, including a letter and a number.";
      return false;
    }
    return true;
}


function validateEmail(message) {
    let email= document.getElementById("email").value
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      message.innerHTML = "Invalid email format.";
      return false;
    }
    return true;
}
  
function validatePhone(message) {
    let phone = document.getElementById("number").value;
    let regex = /^\d{10}$/;
    if (!regex.test(phone)) {
      message.innerHTML = "Phone number must be exactly 10 digits.";
      return false;
    }
    return true;
}
