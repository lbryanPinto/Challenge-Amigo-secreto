let amigos = [];
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(nombre);
  input.value = "";
  mostrarListaAmigos();
}

function mostrarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  if (amigos.length === 0) {
    resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indice];
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}