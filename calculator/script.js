const display = document.getElementById("natija")

const ce = document.getElementById("ce")

function appendtd(input){
    display.innerHTML += input
}

function calculate(){
    display.textContent = eval(display.textContent)
}
ce.onclick = function(){
    display.innerHTML =""
}