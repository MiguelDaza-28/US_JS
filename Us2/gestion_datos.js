// Creamos un objeto que contiene tres productos simples
const misProductos = {
    producto1: { id: "P01", nombre: "Laptop", precio: 800 },
    producto2: { id: "P02", nombre: "Mouse", precio: 20 },
    producto3: { id: "P03", nombre: "Teclado", precio: -5 } // Precio inválido para la prueba
};


// Uso de Set en JavaScript

console.log("TRABAJANDO CON SETS");

// 1. Crear el Set con números repetidos
const miSet = new Set([10, 20, 20, 30, 40, 40]);

// 2. Mostrar el Set (verás que elimina los duplicados automáticamente)
console.log("Contenido del Set:", miSet);

// 3. Agregar un nuevo número
miSet.add(50);

// 4. Verificar si existe un número (devuelve true o false)
console.log("¿Existe el 30?:", miSet.has(30));

// 5. Eliminar un número
miSet.delete(10);

// 6. Recorrer el Set con for...of
console.log("Valores del Set:");
for (const valor of miSet) {
    console.log("Número:", valor);
}


// Creación de un Map

console.log("\n TRABAJANDO CON MAPS");

// Creamos el Map para relacionar Categoría -> Nombre del producto
const categorias = new Map();

categorias.set("Tecnología", misProductos.producto1.nombre);
categorias.set("Accesorios", misProductos.producto2.nombre);

console.log("Map creado correctamente.");


// Validación básica de datos

console.log("\n VALIDACIÓN");

// Validamos cada producto de forma directa antes de mostrarlos
for (const clave in misProductos) {
    const prod = misProductos[clave];

    // Comprobamos que tenga id, nombre y que el precio sea mayor a 0
    if (!prod.id || !prod.nombre || prod.precio <= 0) {
        console.error(`Error: El producto '${clave}' tiene datos inválidos.`);
    }
}


// Iteración (Recorrer las estructuras)

console.log("\n--- TASK 4: MOSTRAR DATOS ---");

// 1. Recorrer Objeto usando for...in
console.log("\n[Objeto] Listado de productos:");
for (const clave in misProductos) {
    console.log(`Clave: ${clave} -> Nombre: ${misProductos[clave].nombre}, Precio: $${misProductos[clave].precio}`);
}

// Muestra simple de métodos de objetos (Object.values)
console.log("\n[Método de Objeto] Solo los valores:");
console.log(Object.values(misProductos));

// 2. Recorrer el Set usando for...of
console.log("\n[Set] Elementos del Set actual:");
for (const elemento of miSet) {
    console.log("Elemento único:", elemento);
}

// 3. Recorrer el Map usando forEach()
console.log("\n[Map] Categorías y productos:");
categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});
