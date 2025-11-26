const display = document.getElementById("natija")

const ce = document.getElementById("ce")

function appendtd(input){
    display.innerHTML += input
}

function calculate(){
    display.innerHTML = eval(display.innerHTML)
}
ce.onclick = function(){
    display.innerHTML =""
}