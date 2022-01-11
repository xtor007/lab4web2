function play() {
  localStorage.removeItem("messages");
  let button = document.getElementById("playButton");
  button.classList.add("_notVisible");
  let work = document.getElementById("work");
  work.classList.remove("_notVisible");
  addEvent("Button play was clicked");
}

function start() {
  let button = document.getElementById("startButton");
  button.classList.add("_notVisible");
  let newButton = document.getElementById("stopButton");
  newButton.classList.remove("_notVisible");
  let pos1 = 0
  let pos2 = 0
  let diff1 = 3
  let diff2 = 2
  let ball1 = document.getElementById("ball1")
  let ball2 = document.getElementById("ball2")
  addEvent("Button start was clicked")
  let id = setInterval(frame,10)
  function frame() {
    if (pos1 === 99) {
      diff1 *= -1
      addEvent("Ball 1 touched the right edge")
    }
    if (pos2 === 98) {
      diff2 *= -1
      addEvent("Ball 2 touched the bottom")
    }
    pos1+=diff1
    pos2+=diff2
    ball1.style.left = pos1 + "%"
    ball2.style.top = pos2 + "%"
    if (pos1 === 0) {
      diff1 *= -1
      addEvent("Ball 1 touched the left edge")
    }
    if (pos2 === 0) {
      diff2 *= -1
      addEvent("Ball 2 touched the top")
    }
    if ((pos1===51) && ((pos2===50) || (pos2===48))) {
      clearInterval(id);
    }
  }
}

function addEvent(message) {
  let now = new Date();
  let newEvent = message + " " + now;
  let block3 = document.getElementById("forMessages");
  block3.innerHTML = `<p>${newEvent}</p>`
  let prev = localStorage.getItem('messages')
  if (prev === null) {
    localStorage.setItem('messages',newEvent)
  } else {
    localStorage.setItem('messages',prev+"\n"+newEvent)
  }
}
