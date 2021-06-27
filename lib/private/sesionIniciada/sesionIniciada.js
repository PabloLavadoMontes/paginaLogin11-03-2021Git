export { checkslocalStorage, blockPage };
/**
 * Comprueba si el usuario que intenta iniciar sesión en la página de "sesión Iniciada" está guardado en el localStorage
 * @returns {boolean}
*/
var checkslocalStorage = function () { return (localStorage.length > 1) ? true : false; };
/**
 * Redirige a la página usuarioNoRegsitrado.html si no hay ningún usuario registrado en el localStorage;
 * @param {boolean} checkslocalStorage
 * @returns {void}
 */
var blockPage = function (checkslocalStorage) { checkslocalStorage ? true : window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self"); };
// Llamada a las funciones:
blockPage(checkslocalStorage());
/*
function checkslocalStorage (): boolean {
    console.log(localStorage.getItem("user"));
    return localStorage.getItem("user") ? true : false;
    if (localStorage.getItem("user")) {
        window.open("../../../src/private/usuariosRegistrados/usuariosRegistrados.html", "_self");
    } else {
        window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self");
    }
} */
//# sourceMappingURL=sesionIniciada.js.map