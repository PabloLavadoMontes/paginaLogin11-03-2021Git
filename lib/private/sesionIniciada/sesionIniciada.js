export { checksLocalStorage, blockPage };
/**
 * Comprueba si el usuario que intenta iniciar sesión en la página de "sesión Iniciada" está guardado en el localStorage
 * @returns {boolean}
*/
var checksLocalStorage = function () { return (localStorage.length > 0) ? true : false; };
/**
 * Redirige a la página usuarioNoRegsitrado.html si no hay ningún usuario registrado en el LocalStorage;
 * @param {boolean} checksLocalStorage
 * @returns {void}
 */
var blockPage = function (checksLocalStorage) { checksLocalStorage ? true : window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self"); };
// Llamada a las funciones:
blockPage(checksLocalStorage());
/*
function checksLocalStorage (): boolean {
    console.log(LocalStorage.getItem("user"));
    return LocalStorage.getItem("user") ? true : false;
    if (LocalStorage.getItem("user")) {
        window.open("../../../src/private/usuariosRegistrados/usuariosRegistrados.html", "_self");
    } else {
        window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self");
    }
} */
//# sourceMappingURL=sesionIniciada.js.map