# Gestión de Datos en JavaScript 📊

Este proyecto es una práctica sencilla para aprender a utilizar estructuras de datos en JavaScript: **Objetos**, **Sets** (Conjuntos) y **Maps** (Mapas). El programa simula un inventario básico, elimina números duplicados y organiza productos por categorías.

## 🎯 ¿Qué aprenderás con este código?

* **Objetos**: Guardar datos agrupados (como el ID, nombre y precio de un producto).
* **Sets**: Almacenar listas de datos sin que se repita ningún valor.
* **Maps**: Relacionar una palabra clave con un valor (por ejemplo, Categoría -> Producto).
* **Bucles sencillos**: Usar `for...in`, `for...of` y `forEach` para leer los datos en la consola.
* **Validación**: Detectar con un `if` si un producto no tiene precio o le falta información.

---

## 🛠️ Contenido del Archivo (`gestion_datos.js`)

### Task 1: El Objeto de Productos
* Creamos una lista de productos donde cada uno tiene `id`, `nombre` y `precio`.

### Task 2: El uso del Set
* Creamos una lista de números. Verás cómo JavaScript borra los repetidos automáticamente.
* Aprendemos a usar `.add()` para agregar, `.has()` para buscar y `.delete()` para borrar.

### Task 3: El uso del Map
* Creamos un mapa que conecta una **Categoría** (ej. Tecnología) con el **Nombre** de un producto.

### Task 4 y 5: Validación y Muestreo
* El código revisa que los productos tengan datos válidos. Si un precio es menor a 0, muestra un error rojo en la consola (`console.error`).
* Muestra de forma limpia toda la información en la consola del navegador.

---

## 🚀 Cómo probar el proyecto

1. Guarda el código en un archivo llamado `gestion_datos.js`.
2. Vincúlalo a tu archivo HTML agregando esta línea antes de terminar el `</body>`:

```html
<script src="gestion_datos.js"></script>
```

3. Abre tu página web en el navegador.
4. Presiona la tecla **F12** (o haz clic derecho y selecciona **Inspeccionar**) y ve a la pestaña **Consola** para ver los resultados.
