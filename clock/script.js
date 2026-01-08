const display = document.getElementById("h1")

function clock(){
    var date = new Date()

    var hour = String(date.getHours())
    var minutes = String(date.getMinutes())
    if (minutes < 10 ){
        minutes = "0" + minutes
    }
    var seconds = String(date.getSeconds())
    if (seconds < 10){
        seconds = "0" +seconds
    }
    display.innerHTML = `${hour}:${minutes}:${seconds}`
}
clock()
setInterval(clock, 1000)