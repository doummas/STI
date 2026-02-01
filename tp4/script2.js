function valider(){
    let cin = String(document.getElementById("CIN").value)
    if (cin.length != 8 || (cin.indexOf("06") != 0 && cin.indexOf("01") != 0) && /*!chif(cin)*/ (isNaN(cin) || Number(cin)!=parseInt(cin) )){
        alert("CIN n'est pas valide")
        //return false
    }

    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let np = nom  + prenom
    
    
    if ( !ver(np)  || nom.length < 3 || prenom.length < 3 ){
        alert("Nom ou prenom n'est pas valide")
        
    }


    let email = document.getElementById("email").value
    const  v = "AEYUIO"
    if (v.indexOf(email[0]) == -1 || email.indexOf("@") == -1){
        alert("email invalid")

    }

    let du = document.getElementsByName("du")

    somme = 0
    d=0

    console.log(du[1].value)
    while (d<du.length && !du[d].checked){
        d+=1

    }
    if (d == du.length){
        alert("choisir une duree")
        return false
    }
    /* 2eme maniere
    for (let i =0 ; i<du.length;i++){
        if (du[i].checked){
            somme += Number(du[i].value)
        }
    }
        if (somme == 0){
        alert("il faut choisir la duree")
    }*/
   ///////////////////////////// nrw7 nchoufha
    let choixx = document.getElementById("choixx")
    console.log("Choix: "+choixx.selectedIndex)
    if ( choixx.selectedIndex == -1 ){
        alert("Il faut choisir une voiture")
    // return false
    document.getElementById("mont").value = prix() 

}
    
}

function prix(){
    let somme =0;
    let du = document.getElementsByName("du")
    let prix = document.getElementById("mont")
    let choixx = document.getElementById("choixx")
    
    if ( choixx.selectedIndex == -1 ){
        alert("Il faut choisir une voiture")}
    else {
        for (let i =0 ; i<du.length;i++){
            if (du[i].checked){
                somme += Number(du[i].value)
            }}}
        console.log(choixx)
    prix.value = somme*choixx.value
    prix.readonly = true
    prix.style.backgroundColor="red"
    prix.style.color = "blue" 
    prix.style.fontWeight = "bold"
    }


function ver(np){
    let i=0
    np =  np.toUpperCase()

    while (i<np.length && np[i] >= "A" && np[i]<="Z" ){
        i++
    }
    console.log(np.length == i)
    return np.length == i
}
function chif(np){
    let i=0
    while (i<np.length && np[i] >= "0" && np[i]<="9" ){
        i+=1
    }
    return np.length == i
}

function aff_date(){
    let d=new Date()
    let da = String(d.getDate())
    if (Number(da)<10){
        da = "0" + String(da)

    }
    let m = String(d.getMonth()+1)
    if (Number(m)<10){
        m = "0" + String(m)

    }
    console.log(((d.getDate()))+ "-" +((d.getMonth())) + "-" + String(d.getFullYear()) )
    console.log( String(d.getFullYear()  + "-" +(m) + "-" + (da) ))
    document.getElementById("dt").value = ( String(d.getFullYear()  + "-" +(m) + "-" + (da)))
    document.getElementById("dt").readonly = true
}
function generer(){
    l=[]
    let ca=document.getElementById('ca')
    /*for (let i = 65;i<91;i++){
        l +=(String.fromCharCode(i))
    }
    for (let i = 97; i<123 ; i++){
        l += (String.fromCharCode(i))
    }
    console.log(l)
    for (let i = 0;i<10;i++ ){
        ca.value += l[Math.round(Math.random() *l.length )]
    }   
    ca.disabled = true*/
    for (let i =0; i<10;i++){
        ca.value += String.fromCharCode(Math.round(97+Math.random() * (122-97) - (32 * Math.round(Math.random()))))
    }
    console.log(Math.round(97+Math.random() * (122-97) - (32 * Math.round(Math.random()))))
    console.log(97+Math.random() * (122-97))
}
