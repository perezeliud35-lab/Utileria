/*1. validarCorreo(correo) */
function validarCorreo(correo) {
    if (typeof correo !== "string") return false;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regexCorreo.test(correo.trim());
}


/* soloLetras*/
function soloLetras(texto) {
    if (typeof texto !== "string" || texto.trim() === "") return false;
    const regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regexLetras.test(texto);
}


/*validarLongitud*/
function validarLongitud(numero, maxLongitud) {
    if (numero === null || numero === undefined) return false;
    const soloDigitos = String(numero).replace(/[^0-9]/g, "");
    if (soloDigitos === "") return false;
    return soloDigitos.length <= maxLongitud;
}


/*calcularEdad(fechaNacimiento)*/
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    if (isNaN(nacimiento.getTime())) return NaN;

    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    const dia = hoy.getDate() - nacimiento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    }

    return edad;
}


/*esMayorDeEdad*/
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    if (isNaN(edad)) return false;
    return edad >= 18;
}


/*validarPassword(password)*/
function validarPassword(password) {
    if (typeof password !== "string") return false;

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[^A-Za-z0-9]/.test(password);
    const longitudValida = password.length >= 8;

    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial && longitudValida;
}


/*Mis Funciones propias*/

/*capitalizarPalabras*/
function capitalizarPalabras(texto) {
    if (typeof texto !== "string" || texto.trim() === "") return "";

    return texto
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}


/*calcularFuerzaPassword(password)*/
function calcularFuerzaPassword(password) {
    if (typeof password !== "string" || password.length === 0) return "Muy débil";

    let puntos = 0;
    if (password.length >= 8) puntos++;
    if (/[A-Z]/.test(password)) puntos++;
    if (/[a-z]/.test(password)) puntos++;
    if (/[0-9]/.test(password)) puntos++;
    if (/[^A-Za-z0-9]/.test(password)) puntos++;

    if (puntos <= 1) return "Muy débil";
    if (puntos === 2) return "Débil";
    if (puntos === 3 || puntos === 4) return "Media";
    return "Fuerte";
}