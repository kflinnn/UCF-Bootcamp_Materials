function keydownAction(event) {
  // TODO: Complete keydown function
 document.querySelector("#status").innerHTML = "KEYDOWN Event"
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

function keyAction(){
  document.addEventListener("key").innerHTML = "KEY Event"
}