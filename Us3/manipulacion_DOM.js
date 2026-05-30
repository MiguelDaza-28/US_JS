// Selección de elementos del DOM

// Usamos getElementById y querySelector como solicita el criterio de aceptación
const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotas = document.getElementById("listaNotas");

// Comprobamos e inspeccionamos las referencias en la consola
console.log("--- Elementos seleccionados con éxito ---");
console.log("Input:", inputNota);
console.log("Botón:", btnAgregar);
console.log("Lista UL:", listaNotas);

// Arreglo en memoria global para manejar las notas 5)
let notas = [];


// Funciones de LocalStorage

// Función para guardar las notas actuales en el almacenamiento local
function guardarEnLocalStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
}

// Función encargada de dibujar visualmente el estado actual del arreglo en el DOM
function renderizarNotas() {
    // Limpiamos la lista por completo antes de volver a dibujar
    listaNotas.innerHTML = "";

    // Recorremos el arreglo de notas
    notas.forEach((textoNota, indice) => {
        // Crear el elemento li de la nota
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = textoNota + " "; // Modificamos contenido con textContent

        // Crear el botón de eliminar adjunto
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        // Evento para remover la nota
        btnEliminar.addEventListener("click", () => {
            // Eliminamos la nota del arreglo usando su índice
            notas.splice(indice, 1);
            
            // Actualizamos el LocalStorage con el nuevo arreglo
            guardarEnLocalStorage();
            
            // Usamos removeChild desde el nodo padre (ul) para quitar el li del DOM
            listaNotas.removeChild(nuevoLi);
            
            console.log(`Nota eliminada: "${textoNota}"`);
        });

        // Agregamos el botón de eliminar dentro del li
        nuevoLi.appendChild(btnEliminar);

        // Agregamos el li completo dentro de la lista ul
        listaNotas.appendChild(nuevoLi);
    });
}

// Función que se ejecuta automáticamente cuando la página carga por primera vez
function cargarNotasIniciales() {
    const notasGuardadas = localStorage.getItem("notas");

    // Si existen notas en LocalStorage, las recuperamos
    if (notasGuardadas) {
        notas = JSON.parse(notasGuardadas);
        console.log(`Se cargaron con éxito ${notas.length} notas desde Local Storage.`);
    } else {
        console.log("No se encontraron notas previas en Local Storage.");
    }

    // Dibujamos las notas recuperadas en pantalla
    renderizarNotas();
}


// Agregar notas al hacer Click

btnAgregar.addEventListener("click", () => {
    const textoInyectado = inputNota.value.trim();

    // Validación básica para evitar guardar textos vacíos
    if (textoInyectado === "") {
        alert("Error: No puedes agregar una nota vacía.");
        return;
    }

    // Añadimos el nuevo texto al arreglo en memoria
    notas.push(textoInyectado);

    // Guardamos la lista actualizada en LocalStorage
    guardarEnLocalStorage();

    // Volvemos a dibujar la interfaz en pantalla
    renderizarNotas();

    console.log(`Nota agregada con éxito: "${textoInyectado}"`);

    // Limpiamos el campo y regresamos el foco del teclado
    inputNota.value = "";
    inputNota.focus();
});


// Ejecutamos la carga inicial de datos al encender el script
cargarNotasIniciales();
