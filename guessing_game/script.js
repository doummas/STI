const ro_number = Math.round( 1 + Math.random() * 9 )

console.log(ro_number)
running = true
function choose(){
do{
    window.user_num = prompt("Choose a number")
}while (user_num > 10 || user_num < 1 )
}
function ela (u,r){
    return u-r
}

choose()


while (running){
    switch (true){
    case ( ela(user_num,ro_number) < 3  && ela(user_num,ro_number) > 0):
        alert("Number choosed is high")
        choose()
        break
    case ( ela(user_num,ro_number) > 3 && ela(user_num,ro_number) > 0 ):
        alert("Number choosed is too high")
        choose()
        break
    case ( ela(user_num,ro_number) > -3 && ela(user_num,ro_number) < 0 ):
        alert("Number choosed is low")
        choose()
        break
    case ( ela(user_num,ro_number) < -3 && ela(user_num,ro_number) < 0):
        alert("Number choosed is too low")
        choose()
        break
    default:
        alert("The two numbers are equal")
        running = false
        break
}
}
