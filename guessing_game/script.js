const ro_number = Math.round( 1 + Math.random() * 9 )

console.log(ro_number)
do{
    var user_num = prompt("Choose a number")
}while (user_num > 10 || user_num < 1 )

var cond = user_num - ro_number

switch (true){
    case ( cond < 3  && cond > 0):
        alert("Number choosed is high")
        break
    case ( cond > 3 && cond > 0 ):
        alert("Number choosed is too high")
        break
    case ( cond > -3 && cond < 0 ):
        alert("Number choosed is low")
        break
    case ( cond < -3 && cond < 0):
        alert("Number choosed is too low")
    default:
        alert("The two numbers are equal")
}