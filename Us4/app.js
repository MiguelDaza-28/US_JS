// TASK 1 & 2: Selección de Elementos del DOM
const inputNombre = document.getElementById("inputNombre");
const inputPrecio = document.querySelector("#inputPrecio"); // Uso de querySelector solicitado
const btnAgregar = document.getElementById("btnAgregar");
const listaProductos = document.getElementById("listaProductos");
const contenedorMensajes = document.getElementById("contenedorMensajes");

// URL de JSON Server Local
const API_URL = "http://localhost:3000/productos";

// Arreglo global para control y persistencia
let productos = [];

// Función para inyectar alertas estilizadas en el DOM
function lanzarMensaje(texto, esError) {
    if (esError) {
        contenedorMensajes.innerHTML = `<span class="text-red-600 bg-red-50 px-3 py-1 rounded border border-red-200">❌ ${texto}</span>`;
    } else {
        contenedorMensajes.innerHTML = `<span class="text-green-600 bg-green-50 px-3 py-1 rounded border border-green-200">✨ ${texto}</span>`;
    }
    setTimeout(() => contenedorMensajes.innerHTML = "", 3000);
}

// Integración con Fetch API (Operaciones CRUD)

// Obtener productos remotos
async function fetchObtenerProductos() {
    try {
        console.log("⏳ Solicitando lista de productos al servidor (GET)...");
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error("Fallo en la comunicación con el servidor.");
        
        productos = await respuesta.json();
        
        actualizarLocalStorage();
        renderizarProductosDOM();
        console.log("✅ Datos obtenidos y sincronizados desde API:", productos);
    } catch (error) {
        console.error("❌ Error en operación GET:", error.message);
        lanzarMensaje("Servidor offline. Usando base de datos local.", true);
    }
}

// POST: Registrar nuevo producto
async function fetchGuardarProducto(nombre, precio) {
    try {
        console.log("⏳ Enviando nuevo producto al servidor (POST)...");
        const nuevoObjeto = { nombre, precio: parseFloat(precio) };

        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoObjeto)
        });
        if (!respuesta.ok) throw new Error("No se pudo registrar en la base de datos.");

        const productoCreado = await respuesta.json();
        console.log("✅ Servidor registró con éxito (POST):", productoCreado);

        // Agregamos al arreglo global indexado
        productos.push(productoCreado);
        actualizarLocalStorage();
        renderizarProductosDOM();
        lanzarMensaje("Producto agregado correctamente", false);
    } catch (error) {
        console.error("❌ Error en operación POST:", error.message);
        lanzarMensaje("Error al sincronizar con el servidor.", true);
    }
}

// DELETE: Remover producto del sistema
async function fetchEliminarProducto(id, elementoLi) {
    try {
        console.log(`⏳ Solicitando eliminación del ID ${id} (DELETE)...`);
        const respuesta = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!respuesta.ok) throw new Error("No se pudo remover el recurso en el servidor.");

        console.log(`✅ Servidor procesó la baja (DELETE Exitoso) para el ID: ${id}`);
        
        // Sincronización del arreglo y remoción física del DOM
        productos = productos.filter(p => p.id !== id);
        actualizarLocalStorage();
        listaProductos.removeChild(elementoLi); // removeChild() desde el nodo padre
        
        lanzarMensaje("Producto eliminado del inventario", false);
    } catch (error) {
        console.error("❌ Error en operación DELETE:", error.message);
        lanzarMensaje("No se pudo sincronizar la eliminación.", true);
    }
}

// Manipulación Dinámica del DOM y Local Storage

function actualizarLocalStorage() {
    localStorage.setItem("inventario_local", JSON.stringify(productos));
}

function renderizarProductosDOM() {
    listaProductos.innerHTML = ""; // Limpieza del contenedor para evitar duplicados

    productos.forEach(prod => {
        // Creación dinámica del elemento de la lista (<li>) con clases de Tailwind
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-lg hover:shadow-sm transition";

        // Estructura interna de textos (textContent)
        const infoContenedor = document.createElement("div");
        const nombreSpan = document.createElement("span");
        nombreSpan.className = "font-medium text-slate-800 text-sm block";
        nombreSpan.textContent = prod.nombre;

        const precioSpan = document.createElement("span");
        precioSpan.className = "text-xs text-blue-600 font-bold";
        precioSpan.textContent = `$${prod.precio.toFixed(2)}`;

        infoContenedor.appendChild(nombreSpan);
        infoContenedor.appendChild(precioSpan);

        // Creación del Botón “Eliminar” requerido
        const btnEliminar = document.createElement("button");
        btnEliminar.className = "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold px-3 py-1.5 rounded-md transition";
        btnEliminar.textContent = "Eliminar";

        // Evento de eliminación estructurado
        btnEliminar.addEventListener("click", () => {
            fetchEliminarProducto(prod.id, li);
        });

        // Ensamblado estructural usando appendChild()
        li.appendChild(infoContenedor);
        li.appendChild(btnEliminar);
        listaProductos.appendChild(li);
    });
}

// Captura, Validaciones y Eventos de Arranque

btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const precio = inputPrecio.value.trim();

    // Validaciones estrictas de campos para evitar datos vacíos o inconsistentes
    if (nombre === "" || precio === "") {
        console.error("Error: Intentando registrar campos vacíos.");
        lanzarMensaje("Por favor, llena todos los campos.", true);
        return;
    }
    if (parseFloat(precio) <= 0 || isNaN(precio)) {
        console.error("Error: El precio debe ser un número mayor a cero.");
        lanzarMensaje("Ingresa un precio numérico válido.", true);
        return;
    }

    // Si pasa las validaciones, procede al flujo asíncrono POST
    fetchGuardarProducto(nombre, precio);

    // Limpieza de campos y retorno del foco del teclado
    inputNombre.value = "";
    inputPrecio.value = "";
    inputNombre.focus();
});

// Inicialización de la aplicación (Carga automática persistente)
function inicializarSistema() {
    const cacheLocal = localStorage.getItem("inventario_local");

    if (cacheLocal) {
        productos = JSON.parse(cacheLocal);
        renderizarProductosDOM();
        console.log(`📦 Datos cargados automáticamente desde Local Storage (${productos.length} elementos).`);
        // Sincroniza en segundo plano para verificar si hay datos nuevos en la API
        fetchObtenerProductos();
    } else {
        // Primera sesión del usuario: Trae los datos base del servidor
        fetchObtenerProductos();
    }
}

// Arrancar la app
inicializarSistema();