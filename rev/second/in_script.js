function valider(){
    let v =0
    let cin = document.getElementById("cin").value
    if (cin.length!=8 && (cin[0] != "0" || cin[0] != "1") ){
        alert("cin non valide")
        return false
    }
    let np = document.getElementById("np").value.toUpperCase()
    console.log()
    
    if ((val_np(np)) || np.length>50 || !("A"<=np[0] || np[0]<="Z" )|| !("A"<=np[np.length-1] || np[np.length-1]<="Z" ) ){
        alert("Nom et prenom non valide")
        return false
    }
    let dt = document.getElementById("dt").value
    let d = new Date(dt)
    console.log(d.getFullYear())
    if (Number(d.getFullYear())>2008 || String(dt).length == 0){
        alert("L'age est invalid")
        return false
    }
    let email = document.getElementById("email").value
    
    if ((!val_np(email)) || email.substring(email.length-3,email.length) != ".tn" || e_val(email)){
        alert("email invalid")
        return false
    }
    let pass = document.getElementById("ps").value
    console.log(ps_val(pass) )
    console.log(pass)
    let sp =document.getElementById("sp")
    if ((ps_val(pass) == false || pass.length<8)){
        sp.innerHTML = "password invalide"
        return false
    }
    conf = document.getElementById("conf").value
    if (conf != pass){
        alert("confirmation invalide")
        return false
    }
    let sport = document.getElementById("sport")
    if (sport.selectedIndex == -1 || sport.selectedIndex == 0){
        alert("Il faut choisir une sport")
        return false
    }
    alert("inscription valide")

}
function ps_val(pass){
    pass = pass.toUpperCase()
    i=0
    while (i<pass.length && (((pass[i]<="Z" && pass[i]>="A" || (pass[i]<="9" && pass[i]>="0"))) )){
        i+=1
    }
    return i== pass.length
}
function e_val(e){
    i=0
    while (i.length && e[i]!="@"){
        i+=1
    }
    return i== e.length

}
function val_np(np){
    let i = 0
    while (i<np.length && np[i] != " "){
        i +=1
    }
    return i==np.length
}


//////// abonnement

function calculer(){
    let age = document.getElementsByName("age")
    let a = ""
    for (let i = 0 ; i<age.length; i++){
        if (age[i].checked){
            a = age[i].value
        }
    }
    console.log(a)
    let abo = document.getElementsByName('abo')
    for (let i = 0 ; i<abo.length; i++){
        if (abo[i].checked){
            a += abo[i].value
        }
    }
    console.log(a)
    let sport = document.getElementById("sport")
    a += sport[sport.selectedIndex].value
    console.log(a)
    let payer = ""
    switch (a){
        case "e1g":
            payer = "40"
            break
        case "e3g":
            payer = "100"
            break
        case "e1k":
            payer = "30"
            break
        case "e3k":
            payer = "80"
            break
        case "a1g":
            payer = '40'
            break
        case "a3g":
            payer = "150"
            break
        case "a1k":
            payer = "40"
            break
        case "a3k":
            payer = "100"
            break



    }
    document.getElementById("payer").innerHTML =payer
    

}
 