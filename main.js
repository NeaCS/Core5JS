let botonAgregar = document.getElementById("boton-agregar")
let botonMeGustaCat = document.getElementById("boton-like-cat")
let botonLogin = document.getElementById("boton-login")
let botonesLike = document.getElementsByClassName("boton-like")

botonAgregar.addEventListener("click", function () {
  this.remove()
})

botonMeGustaCat.addEventListener("click", function () {
  alert("Gato Atigrado was liked")
})

botonLogin.addEventListener("click", function () {
  this.innerHTML = "Cerrar sesión"
})

for (let i = 0; i < botonesLike.length; i++) {
  botonesLike[i].addEventListener("click", function () {
    let numeroLikes = parseInt(this.innerHTML)

    numeroLikes++

    this.innerHTML = numeroLikes + " me gusta"
  })
}
