const display = document.getElementById("display")
function getChar(){
    var l = []
    var u = []
    var sy = "!@#$%^&*()_-+=[]{}|;:,.<>?/" 
    var s = []
    var n = []
    for (let i = 97; i<123 ; i++){
        l.push(String.fromCharCode(i))
    }
    for (let i = 65 ; i<91 ; i++){
        u.push(String.fromCharCode(i))
    }
    for (let i = 0 ;i<sy.length;i++){
        s = sy.split("")
    }
    for (let i = 0 ; i<10 ;i++){
        n.push(String(i))
    }
    return [l, u, s, n]
}

function generate(){
    const [l, u, s, n] = getChar()
    const len = Number(document.getElementById("length").value)
    const display = document.getElementById("display")
    var somme = 0
    /*const upper = Number(document.getElementsByName("uppercase"))
    const lower = Number(document.getElementsByName("lowercase"))
    let numbers = Number(document.getElementsByName("numbers"))
    let symbole = Number(document.getElementsByName("symbole"))*/
    const radios = document.getElementsByTagName("input")
    for (let i = 0 ; i<radios.length; i++){
        if (radios[i].checked){
            somme+= Number(radios[i].value)
        }
    }
    console.log(somme)
    if (somme == 1 || somme == 2 || somme == 4 || somme == 8){
        display.innerHTML = "The password must contain at least two options"
    }
    
    switch (somme){
        case 15 :
            new_arr = [...l,...u,...n,...s]
            random_pass(new_arr,len)
            break
        case 7 :
            new_arr = [...l,...u,...n]
            random_pass(new_arr,len)
            break
        case 3 :
            new_arr = [...l,...u]
            random_pass(new_arr,len)
            break
        case 5 :
            new_arr = [...l,...n]
            random_pass(new_arr,len)
            break
        case 9 :
            new_arr = [...l,...s]
            random_pass(new_arr,len)
            break
        case 13 :
            new_arr = [...l,...n,...s]
            random_pass(new_arr,len)
            break
        case 6 :
            new_arr = [...u,...n]
            random_pass(new_arr,len)
            break
        case 10 :
            new_arr = [...u,...s]
            random_pass(new_arr,len)
            break
        case 11:
            new_arr = [...l,...u,...s]
            random_pass(new_arr,len)
            break
        case 14 :
            new_arr = [...u,...n,...s]
            random_pass(new_arr,len)
            break
        case 12 :
            new_arr = [...n,...s]
            random_pass(new_arr,len) 
            break           
    }

}

function random_pass(arr,len){
    let pass = ""
    for (let i = 0 ; i<len ; i++){
        pass += arr[Math.round(Math.random() * arr.length  - 0.5)]
    }
    display.innerHTML = pass
}