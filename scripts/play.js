let isStop = false

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
      let button = document.getElementById("stopButton");
      button.classList.add("_notVisible");
      addEvent("Animation end");
      clearInterval(id);
    }
    if (isStop) {
      clearInterval(id);
    }
  }
}

function stop() {
  let button = document.getElementById("stopButton");
  button.classList.add("_notVisible");
  let newButton = document.getElementById("reloadButton");
  newButton.classList.remove("_notVisible");
  isStop = true;
  addEvent("Button stop was clicked");
}

function reload() {
  ball1.style.left = "0%"
  ball2.style.top = "0%"
  let button = document.getElementById("reloadButton");
  button.classList.add("_notVisible");
  let newButton = document.getElementById("startButton");
  newButton.classList.remove("_notVisible");
  isStop = false;
  addEvent("Button reload was clicked");
}


function closeAn() {
  let block3 = document.getElementById("forMessages");
  block3.innerHTML = ''
  let block5 = document.getElementById("workplace");
  block5.innerHTML = '<ol>' + localStorage.getItem('messages') + '</ol>';
  isStop = true;
}

function addEvent(message) {
  let now = new Date();
  let newEvent = message + " " + now;
  let block3 = document.getElementById("forMessages");
  block3.innerHTML = `<p>${newEvent}</p>`
  let prev = localStorage.getItem('messages')
  let newLi = '<li>' + newEvent + '</li>'
  if (prev === null) {
    localStorage.setItem('messages',newLi)
  } else {
    localStorage.setItem('messages',prev+newLi)
  }
}
