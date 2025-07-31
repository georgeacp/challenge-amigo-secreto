// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let amigo = document.getElementById("amigo").value.trim();

  // Validar la entrada
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

  // Actualizar el array de amigos:
  amigos.push(amigo);

  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";

  // Actualizar la lista
  mostrarAmigos();
}

function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    //Agregar elementos a la lista
    listaAmigos.appendChild(li);
  }

  document.getElementByI;
}

function sortearAmigo() {
  // Validad que haya amigos disponibles
  if (amigos.length == 0) {
    alert("La lista esta vacia");
    return;
  }

  // Generar un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);

  //Obtener el nombre sorteado
  let ganador = amigos[indice];

  // Mostrar el resultado
  listaAmigos.innerHTML = "";
  const li = document.createElement("li");
  listaAmigos.appendChild(li);
  li.style.color = "green";
  li.style.fontWeight = "bold";
  li.textContent = `El amigos secreto sorteado es: ${ganador}`;

  // Limpiar lista para nuevos nombres
  amigos = [];
}
