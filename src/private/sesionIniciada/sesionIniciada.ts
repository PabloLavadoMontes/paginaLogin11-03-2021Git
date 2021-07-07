export {checksLocalStorage, blockPage}
/**
 * Comprueba si el usuario que intenta iniciar sesión en la página de "sesión Iniciada" está guardado en el localStorage
 * @returns {boolean}
*/
const checksLocalStorage = (): boolean => (localStorage.length > 0) ? true : false;

/**
 * Redirige a la página usuarioNoRegsitrado.html si no hay ningún usuario registrado en el LocalStorage;
 * @param {boolean} checksLocalStorage 
 * @returns {void}
 */
 const blockPage = (checksLocalStorage: boolean): void => {checksLocalStorage ? true : window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self"); } 

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


