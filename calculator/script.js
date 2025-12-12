const display = document.getElementById("natija")

const ce = document.getElementById("ce")

function appendtd(input){
    
    display.innerHTML += input
    
}

function calculate(input){
    console.log()
}
ce.onclick = function(){
    display.innerHTML =""
}

calculate()