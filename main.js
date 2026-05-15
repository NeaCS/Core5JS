let botonAgregar = document.getElementById("boton-agregar")
let botonMeGusta = document.getElementById("boton-like")

botonAgregar.addEventListener("click", function() {
  this.remove()
})

botonMeGusta.addEventListener("click", function() {
  alert("Gato Atigrado was liked")
})