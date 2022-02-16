var emailElement = document.getElementById('email')
const form = document.getElementById('form')
const errorMessageElement = document.getElementById('error-message')
const btnSubmit = document.getElementById('btn-submit')
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // isEmailValid = false;

    if (emailElement.value.match(pattern)) {
        // success code

        errorMessageElement.style.display = "none"
        console.log("match")
        console.log(emailElement.value)
        // remove .btndown
    } else {
        // error code
        errorMessageElement.style.display = "block"
        console.log("dont match")
        console.log(emailElement.value)
        // add .btndown
    }
    
    // if (!isEmailValid) {
    //     errorMessageElement.style.display = "block"
    // }

    
})