function play() {
  let button = document.getElementById("playButton");
  button.classList.add("_notVisible");
  let work = document.getElementById("work");
  work.classList.remove("_notVisible");
  addEvent("Button play was clicked");
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
