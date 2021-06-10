window.addEventListener("load", principal);
function principal() {
    swal("", "Lo siento coleguita, no puedes acceder a esa pagina web, porque no has iniciado sesión", "error");
    document.getElementById("enlaceRegistrados").addEventListener("click", mostrarRegistrados);
    document.getElementById("boton").addEventListener("click", redirigirARegistro);
}
/**
* Comprueba si el usuario que intenta iniciar sesión en la página de "usuarios registrados" está guardado en el "session storage"
*/
function mostrarRegistrados() {
    if (sessionStorage.getItem("user")) {
        window.open("../../../src/private/usuariosRegistrados/usuariosRegistrados.html", "_self");
    }
    else {
        window.open("./usuarioNoRegistrado.html", "_self");
    }
}
/**
 * Redirige al usuario a la página de inicio al hacer click en un botón;
 */
function redirigirARegistro() {
    window.open("../../public/registrarUsuario/registrarUsuario.html", "_self");
}
//# sourceMappingURL=usuarioNoRegistrado.js.map