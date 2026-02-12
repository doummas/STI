function test(){
    let email = document.getElementById("email").value
    let ch1 = email.substring(0,email.indexOf("@"))
    let ch2 = email.substring(email.indexOf("@")+1,email.indexOf("."))
    let ch3 = email.substring(email.indexOf(".")+1,email.length)
    console.log(ch3.length<=4 && ch3.length>=2)
    if (ch1.length<=3 || ch2.length<=3 || val_em(ch1) || val_em(ch2) || !(ch3.length<=4 && ch3.length>=2)){
        alert("email invalid")
    }
    let pass = document.getElementById("pass").value
    console.log(pass_val(pass))
    if (pass.length != 6 || pass_val(pass)){
        alert("password invalide")
    }
    let genre = document.getElementById("genre")
    if (genre.selectedIndex == -1 || genre.selectedIndex == 0 ){
        alert("choisir un genre")
    }
    let inf1 = document.getElementsByName("inf1")
    let s1 = ""
    for (let i =0 ; i<inf1.length;i++){
        if (inf1[i].checked){
            s1=inf1[i]
        }
    }
    let inf2 = document.getElementsByName("inf2")
    let s2 = ""
    for (let i =0 ; i<inf2.length;i++){
        if (inf2[i].checked){
            s2=inf2[i]
        }
    }
    let inf3 = document.getElementsByName("inf3")
    let s3 = ""
    for (let i =0 ; i<inf3.length;i++){
        if (inf3[i].checked){
            s3=inf3[i]
        }
    }
    if (s1 == "" || s2 == "" || s3 == "" ){
        alert("il faut repondre en tous question")
    }
}
function pass_val(pass){
    let m=""
    let M=""
    let n =""
    for (let i =0 ; i<pass.length;i++){
        if (pass[i]<="Z" && pass[i]>="A"){
            M="M"
        }
        if (pass[i]<="z" && pass[i]>="a"){
            m="m"
        }
        if (pass[i]<="9" && pass[i]>="0"){
            n="n"
        }
    }
    return n!="n" ||  m!="m" ||  M!="M"
}
function val_em(ch){
    i=0
    ch= ch.toUpperCase()
    while(i<ch.length && ((ch[i]>="A" && ch[i]<="Z" ) || (ch[i]>="0" && ch[i]<="9") )){
        i=i+1
    }
    return !(i==ch.length)

}