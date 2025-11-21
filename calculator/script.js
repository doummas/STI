const one = document.getElementById("one")
const nati = document.getElementById("natija")
const two = document.getElementById("two")
var count = 0

one.onclick = function(){
    count += 1
    nati.innerHTML = count

}
two.onclick = function() {
    count +=2
    nati.innerHTML = count
}
