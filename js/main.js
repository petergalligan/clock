
function start() {

var today = new Date()

var hours = today.getHours()
  if(hours > 12) {
    hours = (hours - 12)
  }
var minutes = today.getMinutes()
  if (minutes < 10) {
    minutes = ("0" + minutes)
  }
var seconds = today.getSeconds()
  if (seconds < 10) {
    seconds = ("0" + seconds)
  }

document.getElementById("body").textContent = hours + ":" + minutes + ":" + seconds


setTimeout(function () {
        start()
    }, 1000)
}
document.getElementById("body").domEvent('onload', start(), false)



