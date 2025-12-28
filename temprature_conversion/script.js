const display = document.getElementById("display")
const to_fahrenheit = document.getElementById("celsius")
const to_clesius = document.getElementById("fahrenheit")
const result = document.getElementById("result")
let temp
function conver(){
    if (to_fahrenheit.checked){
        temp = Number(display.value) * 1.8 + 32
        result.innerHTML=temp + "°C"
    }
    else if (to_clesius.checked){
        temp  = Number((display.value) - 32 ) / 1.8
        result.innerHTML=temp + "°F"
    }
    else {
        result.innerHTML = " Select a unit"
    }
    

}

