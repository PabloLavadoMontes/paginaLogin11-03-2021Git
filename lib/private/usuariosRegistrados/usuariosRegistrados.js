import { checksSessionStorage, blockPage } from "../sesionIniciada/sesionIniciada.js";
// Antes de cargar el DOM:
blockPage(checksSessionStorage());
// DOM
window.addEventListener("load", principaal);
/**
 * Realiza una llamada a los eventos necesarios para que las funciones se ejecuten, tras haber cargado el documento;
 * @returns {void}
 */
function principaal() {
    showUsersInTable();
    document.getElementById("cerrarSesion").addEventListener("click", logOut);
}
/**
 * Muestra en una tabla del html los usuarios existentes en el localStorage;
 * @returns {void}
 */
function showUsersInTable() {
    var tablaRef = document.getElementById("tablaUsuarios");
    for (var i = 0; i < localStorage.length; i++) {
        tablaRef.innerHTML += "<tbody><tr><td>" + JSON.parse(localStorage.getItem(localStorage.key(i))).username + "</td><td>" + JSON.parse(localStorage.getItem(localStorage.key(i))).email + "</td><td>" + JSON.parse(localStorage.getItem(localStorage.key(i))).age + "</td></tr></tbody>";
    }
}
/**
 * Elimina al usuario actual del sessionStorage y redirige al usuario a la página de inicio de sesión
 * @returns {void}
 */
function logOut() {
    while (sessionStorage.length > 0) {
        sessionStorage.removeItem(sessionStorage.key(0));
    }
    window.open("../../public/formularioAcceso/formularioAcceso.html", "_self");
}
/**
 * Devuelve un array con todas las claves que hay en el localStorage;
 * @returns {string[]}
 */
/*  function getLSKeys (): string[] {
    let keysLS: string[] = [];
    for (let i: number = 0; i < localStorage.length; i++) {
        keysLS.push(localStorage.key(i));
    }
    return keysLS;
} */
/**
 * Muestra en una tabla de html los usuarios que hay en el localStorage;
 * @returns {void}
 */
/* function showLSUsers (): void {
    for (let i: number = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(getLSKeys()[i]));
    }
} */
/* // mostrandoObjetos(usersss);
function mostrandoObjetos (usersss: Userrr[]): void {
    let divisorRef: HTMLElement = (document.getElementById("mostrarObjetos") as HTMLElement);
    for (let i: number = 0; i < usersss.length; i++) {
        JSON.stringify(localStorage.setItem(usersss[i].username, JSON.stringify(usersss[i])));
        let usersssLS: any = localStorage.getItem(usersss[i].username);
        divisorRef.innerHTML +=("<br>" + "Los datos del username " + "<b>" + usersss[i].username + "</b>" + " son:" + JSON.parse(JSON.stringify(usersssLS))  + "<br>");
        // divisorRef.innerHTML += ("<br>" + usersss[i].username + ": " + JSON.stringify(usersss[i]) + "<br>");
    }
} */
//# sourceMappingURL=usuariosRegistrados.js.map