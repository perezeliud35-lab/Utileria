# ACTIVIDAD 2 - utileria.js

Perez Cruz Haniel Eliud 

Es un conjunto de funciones en JavaScript que armé para no repetir código cada vez que hago un formulario. No usa ninguna librería externa ni framework, es JS normal que puedes copiar y pegar en cualquier proyecto.

## Qué problema resuelve

Casi todos los formularios piden validar las mismas cosas: revisar que el correo tenga el formato correcto, que la contraseña no sea débil, que un nombre no traiga números, calcular la edad de alguien, etc. En vez de escribir esa lógica una y otra vez en cada proyecto, aquí ya está lista para importarla y usarla directo.

## CDN

Esta librería está publicada en Cloudflare Workers y se puede consumir directamente desde cualquier página HTML, sin necesidad de descargar el archivo:

```
https://utileria.perezeliud35.workers.dev/js/utileria.js
```

### Uso desde el CDN

```html
<script src="https://utileria.perezeliud35.workers.dev/js/utileria.js"></script>
```

Con esa línea, en cualquier proyecto (aunque no tenga el archivo localmente) ya quedan disponibles todas las funciones: `validarCorreo()`, `soloLetras()`, `validarLongitud()`, `calcularEdad()`, `esMayorDeEdad()`, `validarPassword()`, `capitalizarPalabras()` y `calcularFuerzaPassword()`.

## Instalación (uso local)

También puedes descargar el archivo y enlazarlo localmente en tu HTML:

```html
<script src="js/utileria.js"></script>
```

Con eso ya tienes todas las funciones disponibles, no hay que instalar ni configurar nada extra.

## Funciones

### validarCorreo(correo)

Regresa `true` si el correo tiene formato válido.

```javascript
validarCorreo("usuario@gmail.com")   // true
validarCorreo("correo-sin-arroba")   // false
validarCorreo("otro@dominio.co.mx")  // true
```

### soloLetras(texto)

Confirma que un texto esté formado nada más por letras. Acepta mayúsculas, minúsculas, vocales con acento, la ñ y espacios (para nombres compuestos).

```javascript
soloLetras("María José")       // true
soloLetras("Juan123")           // false
soloLetras("José Ángel Ñoño")  // true
```

### validarLongitud(numero, maxLongitud)

Sirve para poner un tope a la cantidad de dígitos de un número, por ejemplo en un teléfono o un código postal.

```javascript
validarLongitud(12345, 5)    // true
validarLongitud(123456, 5)   // false
validarLongitud(99, 10)      // true
```

### calcularEdad(fechaNacimiento)

Toma una fecha de nacimiento (formato `"YYYY-MM-DD"`) y regresa la edad en años cumplidos, comparándola contra la fecha de hoy.

```javascript
calcularEdad("2000-01-15")   // 26 (depende de la fecha de hoy)
calcularEdad("1990-12-25")   // 35
```

### esMayorDeEdad(fechaNacimiento)

Por dentro llama a `calcularEdad()` y solo regresa `true` o `false` según si la persona ya llegó a los 18 años.

```javascript
esMayorDeEdad("2005-03-10")  // true
esMayorDeEdad("2010-01-01")  // false
```

### validarPassword(password)

Para que regrese `true`, la contraseña tiene que cumplir todo esto al mismo tiempo:
- 8 caracteres o más
- Una letra mayúscula
- Una letra minúscula
- Un número
- Un carácter especial (como !, @, #, etc.)

```javascript
validarPassword("Abc12345!")   // true
validarPassword("abc12345")    // false
validarPassword("Abcd!")       // false
```

## Funciones propias 

Además de las 6 obligatorias, agregué estas dos porque se me hicieron útiles para completar el formulario:

### capitalizarPalabras(texto)

Me di cuenta de que la gente escribe su nombre de mil formas distintas (todo mayúsculas, todo minúsculas, mezclado...), así que esta función normaliza el texto dejando cada palabra con su primera letra en mayúscula y el resto en minúscula.

```javascript
capitalizarPalabras("juan carlos perez")   // "Juan Carlos Perez"
capitalizarPalabras("MARIA JOSE")           // "Maria Jose"
```

### calcularFuerzaPassword(password)

Pensé que estaría bien tener algo más que un simple sí/no, así que esta función revisa cuántos de los requisitos de seguridad cumple la contraseña y devuelve un nivel según el resultado: "Muy débil", "Débil", "Media" o "Fuerte". Es útil para mostrar una barra de progreso en el formulario, por ejemplo.

```javascript
calcularFuerzaPassword("abc")          // "Muy débil"
calcularFuerzaPassword("abcdefgh")     // "Débil"
calcularFuerzaPassword("Abcdefgh1")    // "Media"
calcularFuerzaPassword("Abcdefgh1!")   // "Fuerte"
```

## Dónde está integrada

- **index.html** - Formulario de registro donde cada campo se valida al momento con `soloLetras`, `validarCorreo`, `validarLongitud`, `validarPassword` y `capitalizarPalabras`. Al hacer clic en "Ver mi edad" se abre una ventana modal que muestra el resultado de `calcularEdad` y `esMayorDeEdad`.
- **login.html** - Pantalla de acceso que valida el correo y la contraseña usando `validarCorreo` y `validarPassword`.

## Estructura

```
/utileria
├── README.md
├── index.html
├── login.html
├── css/
│   └── styles.css
├── js/
│   └── utileria.js
└── img/
```

## Demo en vivo

https://utileria.perezeliud35.workers.dev

## Capturas de pantalla
<img width="686" height="850" alt="image" src="https://github.com/user-attachments/assets/b813e11c-7067-4232-8466-bddd822cfcec" />
<img width="1773" height="818" alt="image" src="https://github.com/user-attachments/assets/d8264734-6022-401b-be45-e649eac65228" />


## Video
https://drive.google.com/file/d/12Iz4ZCz24mStVQQ6pKy_0Yv4k7dt40Yc/view?usp=sharing

## Autor

Perez Cruz Haniel Eliud - 2026
