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

let a = Number(prompt("A= "))

do 
{
    let a = Number(prompt("A= "))
}


let b = Number(prompt("B= "))

while(typeof a != "number" || b == ""){
    let b = Number(prompt("B= "))
}

let s;
let p;
let d;


s = a+b
p = a*b
d = a%b
alert("S="+s)
alert("P="+p)
alert("D="+d)







