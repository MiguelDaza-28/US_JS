# Lista de Notas Dinámica 📝

Este proyecto consiste en una aplicación web interactiva que permite crear y eliminar notas personales en tiempo real mediante la manipulación del DOM en JavaScript, asegurando que la información no se pierda al recargar la página gracias al almacenamiento local (`LocalStorage`).

## 🎯 Objetivos de la Práctica

* **Selección del DOM**: Uso práctico de métodos fundamentales como `getElementById` y `querySelector`.
* **Modificación en Tiempo Real**: Creación dinámica de elementos de lista (`<li>`) y botones con `appendChild` y eliminación mediante `removeChild`.
* **Persistencia de Datos**: Uso de `localStorage` (`setItem` y `getItem`) junto con `JSON.stringify` y `JSON.parse` para mantener tus notas guardadas en el navegador.
* **Flujo Controlado**: Validación básica para bloquear el ingreso de notas vacías.

---

## 🛠️ Estructura del Proyecto

El proyecto está compuesto por dos archivos principales:

1. **`manipulacion_dom.html`**: Contiene la interfaz gráfica base (el campo de texto, el botón de agregar y el contenedor de la lista).
2. **`manipulacion_dom.js`**: Contiene toda la lógica de control, los eventos de escucha, el arreglo en memoria y la conexión con el almacenamiento del navegador.

---

## 🚀 Instrucciones para Ejecutar y Probar

1. Descarga o clona ambos archivos (`manipulacion_dom.html` y `manipulacion_dom.js`) dentro de la misma carpeta.
2. Abre el archivo `manipulacion_dom.html` en tu navegador web.
3. Abre las Herramientas de Desarrollador (**Clic derecho -> Inspeccionar** o presionando la tecla **F12**) y dirígete a la pestaña **Consola** para monitorizar los registros del sistema.

### Generando tus Evidencias de Entrega:
* **Paso 1**: Revisa la consola al cargar por primera vez; verás las referencias de los elementos HTML seleccionados.
* **Paso 2**: Escribe una nota y haz clic en "Agregar". Observa cómo aparece en la pantalla y la consola confirma la acción.
* **Paso 3**: Recarga la página (usando el botón circular del navegador 🔄 o el atajo `Ctrl + R`). Notarás que tus notas siguen ahí y la consola indicará cuántas notas se recuperaron con éxito.
* **Paso 4**: Ve a la pestaña **Application** (o Almacenamiento) en las herramientas del navegador, despliega **Local Storage** y captura el registro guardado bajo la clave `"notas"`.
* **Paso 5**: Elimina una nota usando su botón correspondiente y verifica el mensaje de confirmación impreso en consola.
