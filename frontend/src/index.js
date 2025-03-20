const btn = document.querySelector(".btn");
// const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
// const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorLogin = document.getElementById("error-login");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailError.innerHTML != "" || passwordError.innerHTML != "") {
        emailError.innerHTML = passwordError.innerHTML = "";
    }
    validateForm();
    if (validateForm()) {
        // alert("yeas")
        // console.log(username.value.trim(),email.value.trim(),password.value.trim());   
        callLoginApi( email.value.trim(), password.value.trim(), errorLogin)
    }

});

const validateForm = () => {
    let isValid = true;
    // if (username.value.trim() === '') {
    //     usernameError.innerHTML = 'Username is required';
    //     isValid = false;
    // }
    if (email.value.trim() === '') {
        emailError.innerHTML = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        emailError.innerHTML = 'Invalid email format';
        isValid = false;
    }
    if (password.value.trim() === '') {
        passwordError.innerHTML = 'Password is required';
        isValid = false;
    } else if (password.value.trim().length < 6) {
        passwordError.innerHTML = 'Password must be at least 6 characters';
        isValid = false;
    }
    return isValid;
}

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const callLoginApi = async (email, password, errorLogin) => {
    const res = await fetch('http://localhost:8800/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    const json = await res.text();
    const obj = await JSON.parse(json);
    console.log(obj.message);
    
    if (obj.message === 'login successful') {
        window.location.href = './cart.html';
        localStorage.setItem('login', obj.email);
    }
    else {
        errorLogin.innerHTML = obj.message;
    }

}