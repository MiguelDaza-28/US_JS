# Inventario Sincronizado (CRUD + LocalStorage + Tailwind) 🚀

Este proyecto es una aplicación web interactiva para la gestión de un inventario de productos. Demuestra la integración de una interfaz moderna con Tailwind CSS, modificaciones estructurales del DOM en tiempo real, persistencia de datos en el navegador (`LocalStorage`) y sincronización asíncrona con un backend local (CRUD completo) mediante la Fetch API.

## 🎯 Objetivos de la Práctica y Conceptos Consolidados

* **JavaScript Moderno (ES6+)**: Implementación de código limpio utilizando variables `let` y `const`.
* **Manipulación Real del DOM**: Construcción nativa de nodos en pantalla con `appendChild()` y eliminación limpia utilizando `removeChild()`.
* **Persistencia del Lado del Cliente**: Respaldo y recuperación automática de datos mediante el uso de `localStorage`.
* **Conexión Asíncrona**: Comunicación directa con el servidor (`GET`, `POST` y `DELETE`) utilizando `fetch`, `async/await` y control de excepciones mediante bloques `try...catch`.
* **Diseño Ágil con Clases**: Interfaz responsiva y estilizada directamente en el HTML a través de Tailwind CSS (vía Play CDN).

---

## 🛠️ Estructura del Proyecto

La carpeta de mi proyecto contiene los siguientes archivos base:
* `index.html`: Estructura del formulario y lista de elementos, estilizada con Tailwind CSS.
* `app.js`: Contiene las validaciones, la lógica de almacenamiento local y las operaciones CRUD de red.
* `db.json`: Funciona como la base de datos de texto de tu servidor local.

---

## ⚙️ Cómo Ejecutar la Aplicación

Dado que instale `json-server` de forma local dentro de la carpeta del proyecto, debes seguir estos pasos para iniciar el sistema:

1. Abre la terminal de tu sistema directamente en la carpeta donde tienes los archivos del proyecto.
2. Asegúrate de que el archivo `db.json` esté creado y enciende tu servidor local usando el comando `npx`:
   ```bash
   npx json-server --watch db.json
   ```
   *(Mantén esta pestaña de la terminal abierta; para que la base de datos este escuchando activamente en `http://localhost:3000/productos`)*
3. Abre tu archivo `index.html` en el navegador (se recomienda usar la extensión *Live Server* de VS Code).