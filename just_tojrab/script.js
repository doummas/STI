function verif(){
    let n = document.getElementById("n").value
    
    if (!vn(n) ){
        alert("numero invalid")
    }
    let cin = document.getElementById("cin").value
    if (cin.length != 8 || (cin[0] != "0" && cin[0] != "1")){
        alert("cin invalid")
    }
    let np = document.getElementById("np").value
    if (!np_verif(np)){
        alert("Nom et  prenom invalid")
    }
    let dt = document.getElementById("dt").value
    let d = new Date(dt)
    if (d.getFullYear()>2008){
        alert("under 18")
    }
    let so = Number(document.getElementById("so").value)
    if (so<0){
        alert("solde <0")
    }
    let agence = document.getElementById("agence")
    if ( agence.selectedIndex == -1 ){
        alert("selectionnner une agence")
    }
    let compte = document.getElementsByName("compte") // radio
    let type
    for (let i = 0 ; i<compte.length ; i++){
        if (compte[i].checked){
            type = compte[i].value 
        }
    }
    if (type != "admin" && type != "client"){
        alert("choisr un compte ")
    }
}
function vn(n){
    let i=0
    n=n.toUpperCase()
    while (i<3 && (n[i]<="Z" && n[i]>="A")){
        i=i+1
    }
    if (i<3){
        return false
    }
    i=4
    while (i<n.length && (n[i]<="9" && n[i]>= "0")){
        i=i+1
    }
    return i == n.length && n[3] == "/"
}
function np_verif(np){
    i=0
    np = np.toUpperCase()
    while (i<np.length && (("A"<=np[i] && np[i]<= "Z") || np[i] == " ")){
        i=i+1
    }
    return i == np.length
}