function valider(){
    let cin = String(document.getElementById("CIN").value)
    if (cin.length != 8 || (cin.indexOf("06") != 0 && cin.indexOf("01") != 0)){
        alert("CIN n'est pas valide")
    }

    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let np = nom + " " + prenom
    if(isNaN(np) == false || nom.length < 3 || prenom.length < 3){
        alert("Nom ou prenom n'est pas valide")
    }


    let email = document.getElementById("email").value
    v = "AEYUIO"
    if (v.indexOf(email[0]) == -1 || email.indexOf("@") == -1){
        alert("email invalid")

    }

    if (!choi){
        alert("Obligatoire de choisir une voiture")
    }
    let du = document.getElementsByName("du")

    somme = 0
    for (let i =0 ; i<du.length;i++){
        if (du[i].checked){
            window.somme += Number(du[i].value)
        }
    }
        if (somme == 0){
        alert("il faut choisir la duree")
    }
}

function choi(){

    return true
}


    
