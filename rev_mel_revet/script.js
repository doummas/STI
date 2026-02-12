function valider(){
    let nom = document.getElementById("n").value.toUpperCase()
    console.log( !np_val(nom))
    if (nom.length < 3 || !np_val(nom)){
        alert("Nom invalide")
    }
    let prenom = document.getElementById("p").value.toUpperCase()
    if (prenom.length < 3 || !np_val(prenom)){
        alert("preNom invalide")
    }
    let tel = (document.getElementById("tel").value)
    if (tel.length !=8 || Number(tel[0]) <= 1 )
        alert("Numero c'est pas")
    let addr = document.getElementById("addr").value.toUpperCase()
    if (addr.length < 10 || !np_val(addr)){
        alert("adresse invalide")
    }
    let pass = document.getElementById("pass").value.toUpperCase()
    console.log(ps_val(pass))
    if (pass.length<6 || ps_val(pass)){
        alert("password policy incorrect")
    }
    let repass = document.getElementById("repass").value.toUpperCase()
    if (repass!=pass){
        alert("password and confirmation are not the same")
    }
        
}

function ps_val(ch){
    i=0
    while (i<ch.length && (("A"<=ch[i] && ch[i]<= "Z"))){
        i=i+1
    }
    return i!=ch.length
}
function np_val(ch){
    let i =0 
    while (i<ch.length && ((ch[i]>= "A" && ch[i]<="Z" ) || ch[i]==" ")){
        i=i+1
    }
    return i==ch.length
}