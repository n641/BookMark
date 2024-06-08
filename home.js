const cardElement = document.getElementById('card')
const LogoutBtn = document.getElementById('LogoutBtn')

console.log("ActiveEmail", JSON.parse(localStorage.getItem("@ActiveEmail")));
var ActiveEmail = JSON.parse(localStorage.getItem("@ActiveEmail"));
console.log(ActiveEmail.name);

var myHeading = document.createElement('h1')
myHeading.classList.add('text-info')
var text = document.createTextNode(`Welcome ${ActiveEmail.name}`)
myHeading.appendChild(text)
cardElement.appendChild(myHeading)

LogoutBtn.addEventListener('click' , function (){
    localStorage.removeItem('@ActiveEmail')
    window.location.href = "index.html";

})