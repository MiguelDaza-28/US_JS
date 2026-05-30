# portafolio de prácticas: Fundamentos Avanzados de JavaScript 🚀

Este repositorio reúne 4 proyectos prácticos y secuenciales diseñados para consolidar el dominio de JavaScript moderno (ES6+), abarcando desde la lógica condicional básica hasta la sincronización asíncrona con servidores locales mediante operaciones CRUD.

---

## 📂 Resumen de los 4 Ejercicios Realizados

### 1. Sistema Interactivo de Validación (`sistema_interactivo.js`)
* **Propósito**: Consolidar el uso básico de variables, tipos de datos e interacción con el usuario mediante el navegador.
* **Conceptos clave**: Declaración con `let` y `const`, entrada de datos con `prompt()`, control con estructuras `if / else`, y depuración utilizando `console.error()` ante entradas de texto inválidas en el campo de la edad.

### 2. Gestión Avanzada de Datos (`gestion_datos.js`)
* **Propósito**: Aprender a organizar, almacenar y manipular colecciones de información de forma eficiente.
* **Conceptos clave**: Creación de **Objetos** complejos para inventarios, uso de **Sets** para eliminar valores duplicados de forma automática, y uso de **Maps** para asociar categorías. Recorridos con bucles `for...in`, `for...of` y métodos nativos como `forEach()` y `Object.values()`.

### 3. Lista Dinámica y Persistencia Local (`manipulacion_dom.html` / `.js`)
* **Propósito**: Interactuar directamente con la interfaz del navegador y guardar el progreso del usuario localmente.
* **Conceptos clave**: Selección con `getElementById` y `querySelector`, modificación en tiempo real agregando nodos con `appendChild()` y removiéndolos con `removeChild()`. Persistencia de datos nativa con `localStorage` (`setItem` / `getItem`) y conversión con `JSON.stringify()`.

### 4. Inventario Completo Sincronizado con API (`index.html` / `app.js` / `db.json`)
* **Propósito**: Integrar todos los conceptos anteriores en un flujo completo conectado a un backend local estilizado.
* **Conceptos clave**: Consumo de APIs asíncronas mediante la Fetch API con bloques `async/await` y `try...catch` para operaciones **CRUD** reales (`GET`, `POST`, `DELETE`). Interfaz moderna diseñada rápidamente con **Tailwind CSS** (vía Play CDN) y simulación de servidor local con **JSON Server**.

---

## 💻 Requisitos para Ejecutar el Portafolio Completo

Los ejercicios 1, 2 y 3 se pueden ejecutar abriendo directamente sus respectivos archivos HTML en cualquier navegador. 

Para el **Ejercicio 4 (Inventario)**, es necesario levantar el servidor local desde la terminal:

# Iniciar el backend local con json-server instalado localmente
npx json-server --watch db.json

---

## 🛠️ Tecnologías Utilizadas
* JavaScript Moderno (ES6+)
* HTML5 Semántico
* Tailwind CSS (Play CDN)
* JSON Server (Simulación de API REST)
* LocalStorage API
