export { checksSessionStorage, blockPage };
/**
 * Comprueba si el usuario que intenta iniciar sesión en la página de "sesión Iniciada" está guardado en el "session storage"
 * @returns {boolean}
*/
var checksSessionStorage = function () { return (sessionStorage.length > 1) ? true : false; };
/**
 * Redirige a la página usuarioNoRegsitrado.html si no hay ningún usuario registrado en el SessionStorage;
 * @param {boolean} checksSessionStorage
 * @returns {void}
 */
var blockPage = function (checksSessionStorage) { checksSessionStorage ? true : window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self"); };
// Llamada a las funciones:
blockPage(checksSessionStorage());
/*
function checksSessionStorage (): boolean {
    console.log(sessionStorage.getItem("user"));
    return sessionStorage.getItem("user") ? true : false;
    if (sessionStorage.getItem("user")) {
        window.open("../../../src/private/usuariosRegistrados/usuariosRegistrados.html", "_self");
    } else {
        window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self");
    }
} */
//# sourceMappingURL=sesionIniciada.js.map