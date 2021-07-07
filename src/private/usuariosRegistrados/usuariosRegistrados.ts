import {checksLocalStorage, blockPage} from "../sesionIniciada/sesionIniciada.js";
export {getName}

// Antes de cargar el DOM:
blockPage(checksLocalStorage())

// DOM
window.addEventListener("load", principaal);

/**
 * Realiza una llamada a los eventos necesarios para que las funciones se ejecuten, tras haber cargado el documento;
 * @returns {void}
 */
function principaal (): void {
    showUsersInTable();
    for (let i: number = 0; i < document.getElementsByTagName("button").length - 1; i++) {
        document.getElementsByTagName("button")[i].addEventListener("click", getName)
    }
    document.getElementById("cerrarSesion").addEventListener("click", logOut);
}

/**
 * Devuelve el id de un elemento HTML
 * @returns {string}
 */
function getName (): string {
    sessionStorage.clear();
    sessionStorage.setItem(this.id, this.id)
    window.open("http://127.0.0.1:5500/src/private/editarTabla/editarTabla.html", "_self")
    return this.id;
}

/**
 * Muestra en una tabla del html los usuarios existentes en el localStorage;
 * @returns {void}
 */
function showUsersInTable (): void {
    let tablaRef: HTMLElement = (document.getElementById("tablaUsuarios") as HTMLElement); 
    for(let i: number = 0 ; i < localStorage.length; i++){
        tablaRef.innerHTML += `<tbody><tr><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).name}</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).email}</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).age}</td><td><button style="width: 230px; height: 28px" id="${JSON.parse(localStorage.getItem(localStorage.key(i))).name}">Editar a ${JSON.parse(localStorage.getItem(localStorage.key(i))).name}</td></tr></tbody>`;
    }
}

/**
 * Elimina al usuario actual del localStorage y redirige al usuario a la página de inicio de sesión
 * @returns {void}
 */
function logOut (): void {
    while (localStorage.length > 0) {
        localStorage.removeItem(localStorage.key(0));
    }
    window.open("../../public/formularioAcceso/formularioAcceso.html", "_self")
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
