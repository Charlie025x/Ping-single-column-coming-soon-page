const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// const validation = () => {
//   if (email.matches(pattern))
//   {
//     form.classList.add("valid")
//     form.classList.remove("invalid")
//   }
//   else{
//     form.classList.remove("valid")
//     form.classList.add("invalid")
//   }
// }

// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (email.value === '' || email.value == null){
//     messages.push('Email is required')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })