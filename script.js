var emailElement = document.getElementById('email')
const form = document.getElementById('form')
const errorMessageElement = document.getElementById('error-message')
const btnSubmit = document.getElementById('btn-submit')
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

        errorMessageElement.style.display = "block"
        btnSubmit.classList.add("btn-down")

    if (emailElement.value.match(pattern)) {
        // success code

        // console.log("email value is: " + emailElement.value)
        // console.log("email matches pattern")
        emailElement.classList.remove("input-error")
        errorMessageElement.innerHTML = "success"
        errorMessageElement.style.color = "green";
    } else if (emailElement.value === "") {
        // empty email code
        errorMessageElement.innerHTML = "please enter your email"
        errorMessageElement.style.color = "var(--clr-light-red)";
        emailElement.classList.add("input-error")
    } else {
        // error code

        // console.log("email value is: " + emailElement.value)
        // console.log("email doesn't match pattern")
        errorMessageElement.innerHTML = "Please provide a valid email address"
        errorMessageElement.style.color = "var(--clr-light-red)";
        emailElement.classList.add("input-error")
    }
})