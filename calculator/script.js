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
    /*switch(type){
        case "+":
            return Number(equa.substring(0,equa.indexOf(type))) + Number(equa.substring(equa.indexOf(type)+1,equa.length)) 
        case "*":
            return Number(equa.substring(0,equa.indexOf(type))) * Number(equa.substring(equa.indexOf(type)+1,equa.length))
        case "-":
            return Number(equa.substring(0,equa.indexOf(type))) - Number(equa.substring(equa.indexOf(type)+1,equa.length))
        case "/":
            return Number(equa.substring(0,equa.indexOf(type))) / Number(equa.substring(equa.indexOf(type)+1,equa.length))*/
    let arr = []
    let ne = type + natija.innerHTML + type 
    for (let i=1 ; i<ne.length;i++){
        if (ne[i]==type){
            arr.push(Number(ne.substring(0,i)))
            ne = ne.substring(i,)
            i=0
        }
    }


        
    
        
    
    arr.push()
    let soo = 0 ;
    if (type == "+"){
        for (let i=0 ; i<arr.length;i++){
            soo += Number(arr[i])}}

    else if (type == "*"){
        soo = arr[0]
        for (let i=1 ; i<arr.length;i++){
            soo *= Number(arr[i])}}

    else if (type == "/"){
        soo = arr[0]
        for (let i=1 ; i<arr.length;i++){
            soo /=Number(arr[i])}}
            
    else if (type == "-"){
        soo = arr[0]
        for (let i=1 ; i<arr.length;i++){
            soo -=Number(arr[i])}
        }


    console.log(arr)
    return soo
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