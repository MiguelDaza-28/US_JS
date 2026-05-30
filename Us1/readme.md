# Sistema Interactivo en JavaScript 🚀

Este es un programa interactivo básico desarrollado en JavaScript que interactúa con el usuario a través del navegador. El script solicita el nombre y la edad del usuario, valida que los datos ingresados sean correctos y muestra mensajes dinámicos personalizados en función de las condicionales establecidas.

El proyecto está diseñado como una práctica guiada para consolidar fundamentos clave del lenguaje.

## 🎯 Objetivos de Aprendizaje

Este proyecto demuestra y refuerza los siguientes conceptos de JavaScript:
* **Variables**: Uso correcto de `let` y `const` evitando el uso de `var`.
* **Estilos de Nombrado**: Aplicación de buenas prácticas utilizando **camelCase** descriptivo.
* **Tipos de Datos**: Captura de texto y conversión de tipos (Casting).
* **Interacción con el Navegador**: Uso de métodos del objeto window como `prompt()` y `alert()`.
* **Depuración**: Flujo de consola con `console.log()` y manejo de errores con `console.error()`.
* **Estructuras de Control**: Validaciones condicionales robustas mediante bloques `if / else`.

---

## 🛠️ Estructura y Tareas Realizadas

### Task 1: Configuración Inicial
* Creación del archivo principal unificado: `sistema_interactivo.js`.
* Estructuración del código mediante comentarios explicativos detallados en cada sección.

### Task 2: Entrada de Datos
* Captura del nombre del usuario mediante `prompt()`.
* Captura y conversión de la edad ingresada utilizando `parseInt()`.

### Task 3: Validación del Input
* Validación integrada mediante la función `isNaN()` para verificar de forma segura si la edad es un número real y no texto genérico.
* Emisión de mensajes de alerta técnica con `console.error()` ante entradas inválidas.

### Task 4: Condicionales y Mensajes Dinámicos
* **Menores de 18 años**: Muestra un saludo motivacional orientado al aprendizaje continuo.
* **Mayores o iguales a 18 años**: Muestra un mensaje de bienvenida enfocado en las oportunidades profesionales de la programación.

---

## 💻 Requisitos e Instalación

1. **Clonar o descargar** este repositorio.
2. Asegurar la existencia del archivo index HTML del proyecto (`index.html`) para poder vincular el script.
3. Vincular el archivo agregando la siguiente etiqueta antes del cierre de tu etiqueta `</body>`:

```html
<script src="sistema_interactivo.js"></script>
```

---

## 🚀 Cómo Ejecutar el Proyecto

1. Abre tu archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).
2. Abre las Herramientas de Desarrollador del navegador (F12 o Clic derecho -> Inspeccionar) y dirígete a la pestaña **Consola (Console)**.
3. Interactúa con las ventanas flotantes que aparecerán en pantalla y observa los resultados impresos de fondo.