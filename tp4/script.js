/*const hello = "hello "


alert("Bienvenue dans notre site")

var name = prompt("What's your name")
const title = document.getElementById("titre")

title.innerHTML+= "Bienvenue dans notre site"
alert(hello + name )

*/


/*tp1
const inp = document.getElementById("np").value;

const outp = document.getElementById("tp1_out")
const button1 = document.getElementById("tp1_sub")
function afficher (){
    outp.innerHTML = inp 
}

button1.onclick = afficher()*/







/*ex2*/


/*const output = document.getElementById("output")
const b =document.getElementById("b")

var n1;
var n2;
const somme = document.getElementById("output");

b.onclick = function () {
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value

    somme.innerHTML = Number(n2)+Number(n1)

}*/


/*do 
{
    let a = Number(prompt("A= "))
}
while (isNaN == false)

do 
{
    let b = Number(prompt("B= "))
}
while (isNaN == false)


let s;
let p;
let d;


s = a+b
p = a*b
d = a%b
alert("S="+s)
alert("P="+p)
alert("D="+d)*/






/*TPPPPPP22222*/

/*function saisir(){
    let a = prompt("Donner A")
    return a
}

function pair(x){
    if (x % 2 == 0 ){
    alert(`${x} est pair`)
}
else {
    alert(`${x} est impaire`)
}
}
a=saisir()
pair(a)*/

function saisir(){
    do{
      var a = prompt("Donner A")  
    }while (0>a || a>2 || a=="")
    return a
}

function joue(a){
    let b = Math.round(Math.random() *(2))
    /*if (Math.abs(a-b) == 2){
        alert("le joueur qui a proposé le plus grand nombre gagne")
    }
    else if (Math.abs(a-b) == 1){
        alert("le joueur qui a proposé le plus petit nombre gagne")
    }
    else{
        alert("qu’aucun joueur n’a gagné.")
    }*/
   var diff = Math.abs(a-b)
   switch(diff){
    case 1:
        if (a>b){
            alert("Utilisateur gagne")
        }
        else{
            alert("l'ordinateur gagne")
        }
    break
    case 2 :
        if (b<a){
            alert(" ordinateur  rb7")
        }
        else{
            alert("rb7t")
        }
        break
    default : alert("7ad mrb7")
   }
   

}

a=saisir()
joue(a)



