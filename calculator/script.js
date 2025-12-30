const natija = document.getElementById("natija")


function clear_dsiplay(){
    natija.innerHTML = ""
}
function del(){
    natija.innerHTML = String(natija.innerHTML.substring(0,natija.innerHTML.length - 1))
    }

function appendtd(n){
    natija.innerHTML +=n
}
function pre_cal(type){
    switch(type){
        case "+":
            return Number(equa.substring(0,equa.indexOf(type))) + Number(equa.substring(equa.indexOf(type)+1,equa.length)) 
        case "*":
            return Number(equa.substring(0,equa.indexOf(type))) * Number(equa.substring(equa.indexOf(type)+1,equa.length))
        case "-":
            return Number(equa.substring(0,equa.indexOf(type))) - Number(equa.substring(equa.indexOf(type)+1,equa.length))
        case "/":
            return Number(equa.substring(0,equa.indexOf(type))) / Number(equa.substring(equa.indexOf(type)+1,equa.length))


    }
    

}
function calculate(){
    equa = String(natija.innerHTML)
    if (equa.indexOf("+") != -1){
        equa = pre_cal("+")
        natija.innerHTML = equa
    }
    else if (equa.indexOf("*") != -1){
        equa = pre_cal("*")
        natija.innerHTML = equa
    }
    else if (equa.indexOf("-") != -1){
        equa = pre_cal("-")
        natija.innerHTML = equa 
    }
    else if (equa.indexOf("/") != -1 ){
        equa = pre_cal("/")
        natija.innerHTML = equa
    }
}