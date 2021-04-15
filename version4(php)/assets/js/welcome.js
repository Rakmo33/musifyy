function validateForm() {
  const success1 = validateUsername();
  const success2 = validatePassword();
  const success3 = validateEmail();

  if (success1 && success2 && success3) {
    return true;
  } else {
    return false;
  }
}

function validateUsername() {
  const username = document.getElementById("username");
  const error = document.getElementById("usernameError");

  var regex1 = /^[a-zA-Z0-9_]*[a-zA-Z][a-zA-Z0-9_]*$/;
  var regex2 = /(?=.*[a-zA-Z])/;

  if (
    !regex1.test(username.value) ||
    username.value.length < 5 ||
    username.value.length > 15
  ) {
    if (username.value == "") {
      error.innerHTML = "Username cannot be blank";
    } else if (username.value.length < 5) {
      error.innerHTML = "Username should be at least 5 characters long";
    } else if (username.value.length > 15) {
      error.innerHTML = "Username should not be more than 15 characters long";
    } else if (regex2.test(username.value)) {
      error.innerHTML = "No special characters allowed except underscore (_)";
    } else if (!regex2.test(username.value)) {
      error.innerHTML = "Username must contain alphabet(s)";
    }
    username.classList.add("error");
    username.classList.remove("success");
    return false;
  } else {
    username.classList.add("success");
    username.classList.remove("error");
    error.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("emailError");

  var regex2 = /^\w+[\S\w+]*@[a-zA-Z]+\.([a-zA-Z]+\.)?[a-zA-Z]+$/;

  if (
    email.value == "" ||
    !regex2.test(email.value) ||
    email.value.length < 5
  ) {
    email.classList.add("error");
    email.classList.remove("success");

    if (email.value == "") {
      error.innerHTML = "Email cannot be blank";
    } else {
      error.innerHTML = "Invalid Email";
    }

    return false;
  } else {
    email.classList.add("success");
    email.classList.remove("error");
    error.innerHTML = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("password");
  const error = document.getElementById("passwordError");

  var regex3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,20}$/;

  if (password.value == "" || !regex3.test(password.value)) {
    password.classList.add("error");
    password.classList.remove("success");

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

    if (!password.value.match(lowerCaseLetters)) {
      error.innerHTML = "Password must contain lowercase letter(s)";
    }

    // Validate capital letters
    else if (!password.value.match(upperCaseLetters)) {
      error.innerHTML = "Password must contain uppercase letter(s)";
    }

    // Validate numbers
    else if (!password.value.match(numbers)) {
      error.innerHTML = "Password must contain numeric digit(s)";
    }

    // Validate symbols
    else if (!password.value.match(symbols)) {
      error.innerHTML = "Password must contain special character(s)";
    }

    // Validate length
    else if (!password.value.length < 5) {
      error.innerHTML = "Password length should be between 5-20 characters";
    } else {
      error.innerHTML = "";
    }

    return false;
  } else {
    password.classList.add("success");
    password.classList.remove("error");
    error.innerHTML = "";

    return true;
  }
}

function authenticate() {
  const username = document.querySelector("#login-username");
  const password = document.querySelector("#login-password");
  const error1 = document.getElementById("login-usernameError");
  const error2 = document.getElementById("login-passwordError");

  if (username.value == "Qwe_123" && password.value == "Qwe@123") {
    return true;
  } else {
    username.classList.remove("error");
    password.classList.remove("error");
    error1.innerHTML = error2.innerHTML = "";

    if (username.value != "Qwe_123") {
      username.classList.add("error");
      error1.innerHTML =
        username.value == ""
          ? "Username cannot be blank!"
          : "Username does not exist!";
      return false;
    }

    if (password.value != "Qwe@123") {
      password.classList.add("error");
      error2.innerHTML =
        password.value == ""
          ? "Password cannot be blank!"
          : "Incorrect Password!";
    }

    return false;
  }
}

// Rotation of forms on click

const rotateLinks = document.querySelectorAll("#signup-link a");
const form1 = document.querySelector(".login-form-front");
const form2 = document.querySelector(".login-form-back");

rotateLinks.forEach(function (rotateLink) {
  rotateLink.addEventListener("click", function () {
    form1.classList.toggle("rotate");
    form2.classList.toggle("rotate2");
  });
});

const eyes = document.querySelectorAll(".eye");
const pass = document.querySelectorAll(".password");
eyes[0].addEventListener("change", function (e) {
  if (!e.target.checked) {
    pass[0].setAttribute("type", "password");
  } else {
    pass[0].setAttribute("type", "text");
  }
});

eyes[1].addEventListener("change", function (e) {
  if (!e.target.checked) {
    pass[1].setAttribute("type", "password");
  } else {
    pass[1].setAttribute("type", "text");
  }
});
