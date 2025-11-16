/*document.getElementById("body_h1").innerHTML = "Yahya";
document.getElementById("Body_p").innerHTML = "Hello my name is Yahya Sammoud and i'm 17 years old";*/


 

/*let name;
document.getElementById("Mysubmit").onclick = function(){
    name = document.getElementById("Mytext").value;
    document.getElementById("Myh1").textContent = "hello " + name ;
};*/

const number= document.getElementById("count");

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

var count = 0

increase.onclick = function(){
    count += 1;
    number.innerHTML = count;

}
decrease.onclick = function(){
    count -= 1 
    number.innerHTML = count 

}

reset.onclick = function(){
    count = 0
    number.innerHTML = 0;

}







