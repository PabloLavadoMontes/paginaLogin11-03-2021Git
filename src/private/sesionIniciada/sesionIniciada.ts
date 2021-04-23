/**
 * Comprueba si el usuario que intenta iniciar sesión en la página de "sesión Iniciada" está guardado en el "session storage"
 * @returns {void}
*/
const checksSessionStoragee = (): boolean => sessionStorage.getItem("user") ? true : false;


blockPage(checksSessionStoragee());

/* 
function checksSessionStoragee (): boolean {
    console.log(sessionStorage.getItem("user"));
    return sessionStorage.getItem("user") ? true : false;
    if (sessionStorage.getItem("user")) {
        window.open("../../../src/private/usuariosRegistrados/usuariosRegistrados.html", "_self");
    } else {
        window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self");
    }
} */
/**
 * 
 * @param {boolean} checksSessionStoragee 
 * @returns {void}
 */
function blockPage (checksSessionStoragee: boolean): void {
    checksSessionStoragee ? true : window.open("../../public/usuarioNoRegistrado/usuarioNoRegistrado.html", "_self");
}
