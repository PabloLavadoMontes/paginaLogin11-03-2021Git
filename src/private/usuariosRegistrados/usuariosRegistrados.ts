import {checksSessionStorage, blockPage} from "../sesionIniciada/sesionIniciada.js";

// Antes de cargar el DOM:
blockPage(checksSessionStorage())

// DOM
window.addEventListener("load", principaal);

/**
 * Realiza una llamada a los eventos necesarios para que las funciones se ejecuten, tras haber cargado el documento;
 * @returns {void}
 */
function principaal (): void {
    getUsers()
    showUsersInTable(); 
    for (let i: number = 0; i < document.getElementsByTagName("button").length - 1; i++) {
        document.getElementsByTagName("button")[i].addEventListener("click", deleteUser);
    }
    document.getElementById("cerrarSesion").addEventListener("click", logOut);
}

/**
 * Devuelve el id de un elemento HTML
 * @returns {string}
 */
function getName (): string {
    let id: any = JSON.parse(localStorage.getItem(this.id)).name;
    console.log(id);
    // sessionStorage.clear();
    // sessionStorage.setItem(this.id, this.id)
    setTimeout(() => {
        window.open("http://127.0.0.1:5501/src/private/editarTabla/editarTabla.html" + "?name=" + id, "_self")
    }, 50); 
    return this.id;
}

/**
 * Muestra en una tabla del html los usuarios existentes en el localStorage;
 * @returns {void}
 */
function showUsersInTable (): void {
    let tablaRef: HTMLElement = (document.getElementById("tablaUsuarios") as HTMLElement); 
    for(let i: number = 0 ; i < localStorage.length; i++){
        tablaRef.innerHTML += `<tbody><tr><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).name}</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).email}</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).age}</td><td><button style="width: 110px; height: 28px; background-color: rgb(128, 209, 128); border: 1.2 px solid black" id="${JSON.parse(localStorage.getItem(localStorage.key(i))).name}">Editar</td></tr></tbody>`;
    for(let i: number = 0 ; i < localStorage.length; i++) {
        tablaRef.innerHTML += `<tbody><tr><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).name}</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).email}</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).age}</td><td><button style="width: 110px; height: 28px; background-color: rgb(235, 146, 146); border: 1.2px solid black" id="${JSON.parse(localStorage.getItem(localStorage.key(i))).name}">Eliminar</td></tr></tbody>`;    
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
 * Elimina a un usuario de la lista;
 * @returns {void}
 */
 function deleteUser (): void {
    let id: string = JSON.parse(localStorage.getItem(this.id))._id;
    const url: string = "http://localhost:2800/usuarios/" + id;
    swal({
        title: "¿Deseas ELIMINAR al usuario " + this.id + " ?",
        text: "Una vez hagas click en confirmar, el usuario se BORRARÁ PARA SIEMPRE",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            localStorage.removeItem(this.id);
            axios.delete(url)
            .then(function () {
                // handle success
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // Always executed
            });
            swal("Has ELIMINADO al usuario", {
            icon: "success",
            })
            location.reload();
        } else {
            swal("NO has eliminado al usuario");
        }
    });
}

/**
 * Obtener los usuarios del servidor mediante el cliente Axios;
 * @returns {void}
 */
function getUsers (): void {
    axios.get('http://localhost:2800/usuarios')
    .then((respuesta)=> {
        for (let i: number = 0; i < respuesta.data.length; i++) {
            localStorage.setItem(respuesta.data[i].name, JSON.stringify(respuesta.data[i]))
        }
        console.log(respuesta.data);
    })
    .catch((error)=> {
        // handle error
        console.log("Haciendo un GET existe el siguiente error: " + error);
    })
    .then(()=> {
        // always executed
    });
}