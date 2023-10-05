var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var button = document.querySelector(".random");

function RandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomGradient() {
    body.style.background = "linear-gradient(to right," + RandomColor() + " ," + RandomColor() + ")";
    css.textContent = body.style.background
}

function gradientPicker() {

    body.style.background = "linear-gradient(to right," + color1.value + " ," + color2.value + ")";
    css.textContent = body.style.background
}




color1.addEventListener("input", gradientPicker);

color2.addEventListener("input", gradientPicker);

button.addEventListener("click", randomGradient);