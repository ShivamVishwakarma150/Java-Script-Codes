function init() {
  let x = document.getElementById("mydiv");
  x.onclick = changeColor;
}
function changeColor() {
  this.style.color = "red";
}
window.onload = init;
