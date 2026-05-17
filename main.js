let botonAgregar = document.getElementById("boton-agregar")
let botonLogin = document.getElementById("boton-login")
let botonesLike = document.getElementsByClassName("boton-like")

botonAgregar.addEventListener("click", function () {
  this.remove()
})

botonLogin.addEventListener("click", function () {
  this.innerHTML = "Cerrar sesión"
})

for (let i = 0; i < botonesLike.length; i++) {
  botonesLike[i].addEventListener("click", function () {
    let numeroLikes = parseInt(this.innerHTML)
    numeroLikes = numeroLikes + 1
    this.innerHTML = numeroLikes + " me gusta"
    if (i === 0) {
      alert("Gato Atigrado was liked")
    } else {
      alert("Golden Retriever was liked")
    }
  })
}

