// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  // Obtener el valor del input y eliminamos espacios en blanco
  let amigo = document.getElementById("amigo").value.trim();

  // Validar que el campo no este vacio
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Validar que el nombre no exista en la lista
  if (amigos.includes(amigo)) {
    alert("Esta amigo ya esta en la lista");
    document.getElementById("amigo").value = "";
    return;
  }

  // Agregar el nombre al array
  amigos.push(amigo);

  // Limpiar el input
  document.getElementById("amigo").value = "";

  // Actualizar la lista
  mostrarAmigos();
}

function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista antes de volver a mostrar
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

console.log(amigos);
