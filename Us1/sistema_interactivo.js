
// Entrada de datos del usuario
// Usamos 'const' para el nombre ya que su referencia no cambiará durante la ejecución.
const nombreUsuario = prompt("Ingrese su nombre: ");

// Usamos 'let' para la edad ya que transformaremos el texto ingresado a un número entero.
let edadUsuario = parseInt(prompt("Ingrese su edad: "));

// Validación de la edad
// 'isNaN' verifica si el valor procesado por parseInt NO es un número válido.
if (isNaN(edadUsuario) || edadUsuario < 0) {

// Se utiliza console.error() para reportar el fallo en la entrada de datos.
console.error("Error: Por favor, ingresa una edad válida en números.");
alert("Error: Por favor, ingresa una edad válida en números.");

} else {

// Condicionales y mensajes dinámicos
// Evaluamos si el usuario es menor de edad (menos de 18 años).
if (edadUsuario < 18) {

alert("Hola " + nombreUsuario + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
        console.log("Hola " + nombreUsuario + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");

} else {

// Si no es menor, por descarte es mayor o igual a 18 años.
alert("¡Bienvenido, " + nombreUsuario + "! Eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
console.log("¡Bienvenido, " + nombreUsuario + "! Eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");

    }
}
