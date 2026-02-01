
function generate(){
    let code = document.getElementById("code")
    for (let i =0 ;i<10;i++){
        code.value += String.fromCharCode(Math.round(97 + Math.random() *25 - (32 *Math.round(Math.random()))))
    }
}

function valider(){
    let code = document.getElementById("code")
    let rep = document.getElementById("rep")
    let maj = 0
    for (let i = 0;i<code.value.length;i++){
        if (code.value[i]<"Z" && code.value[i]> "A"){
            maj+=1
        }
    

    }
    console.log(maj)
    if (rep.value == maj){
        alert("You're not a rorbot")
    }
    else{
        alert("You're a robot")
    }



}