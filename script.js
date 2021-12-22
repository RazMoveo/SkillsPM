
document.getElementById("button").addEventListener("click", onClick);

function onClick(){
  document.querySelectorAll('.prio').forEach(function(element) {
  element.classList.remove('prio')
});
}