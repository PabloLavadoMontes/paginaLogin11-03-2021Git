import { checksSessionStorage, blockPage } from "../sesionIniciada/sesionIniciada.js";
export { getName };
// Antes de cargar el DOM:
blockPage(checksSessionStorage());
// DOM
window.addEventListener("load", principaal);
/**
 * Realiza una llamada a los eventos necesarios para que las funciones se ejecuten, tras haber cargado el documento;
 * @returns {void}
 */
function principaal() {
    getUsers();
    showUsersInTable();
    for (var i = 0; i < document.getElementsByTagName("button").length - 1; i++) {
        if (document.getElementsByTagName("button")[i].style.backgroundColor === "rgb(235, 146, 146)") {
            // alert("Este es un botón de eliminación")
            document.getElementsByTagName("button")[i].addEventListener("click", deleteUser);
        }
        else {
            document.getElementsByTagName("button")[i].addEventListener("click", getName);
        }
    }
    document.getElementById("cerrarSesion").addEventListener("click", logOut);
}
/**
 * Devuelve el id de un elemento HTML
 * @returns {string}
 */
function getName() {
    var id = JSON.parse(localStorage.getItem(this.id)).name;
    console.log(id);
    // sessionStorage.clear();
    // sessionStorage.setItem(this.id, this.id)
    setTimeout(function () {
        window.open("http://127.0.0.1:5501/src/private/editarTabla/editarTabla.html" + "?name=" + id, "_self");
    }, 50);
    return this.id;
}
/**
 * Muestra en una tabla del html los usuarios existentes en el localStorage;
 * @returns {void}
 */
function showUsersInTable() {
    var tablaRef = document.getElementById("tablaUsuarios");
    for (var i = 0; i < localStorage.length; i++) {
        tablaRef.innerHTML += "<tbody>\n        <tr>\n        <td>" + JSON.parse(localStorage.getItem(localStorage.key(i))).name + "</td>\n        <td>" + JSON.parse(localStorage.getItem(localStorage.key(i))).email + "</td>\n        <td>" + JSON.parse(localStorage.getItem(localStorage.key(i))).age + "</td>\n        <td>\n        <button style=\"width: 110px;\n        height: 28px; \n        background-color: rgb(128, 209, 128); \n        border: 1.2 px solid black\" \n        id=\"" + JSON.parse(localStorage.getItem(localStorage.key(i))).name + "\">Editar</td>\n        <td>\n        <button style=\"width: 110px;\n        height: 28px; \n        background-color: rgb(235, 146, 146); \n        border: 1.2px solid black\" \n        id=\"" + JSON.parse(localStorage.getItem(localStorage.key(i))).name + "\">Eliminar</td>\n        </tr>\n        </tbody>";
    }
}
/**
 * Elimina a un usuario de la lista;
 * @returns {void}
 */
function deleteUser() {
    var _this = this;
    var id = JSON.parse(localStorage.getItem(this.id))._id;
    var url = "http://localhost:2800/usuarios/" + id;
    swal({
        title: "¿Deseas ELIMINAR al usuario " + this.id + " ?",
        text: "Una vez hagas click en confirmar, el usuario se BORRARÁ PARA SIEMPRE",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then(function (willDelete) {
        if (willDelete) {
            localStorage.removeItem(_this.id);
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
            });
            location.reload();
        }
        else {
            swal("NO has eliminado al usuario");
        }
    });
}
/**
 * Elimina al usuario actual del localStorage y redirige al usuario a la página de inicio de sesión
 * @returns {void}
 */
function logOut() {
    while (localStorage.length > 0) {
        localStorage.removeItem(localStorage.key(0));
    }
    window.open("../../public/formularioAcceso/formularioAcceso.html", "_self");
}
/**
 * Obtener los usuarios del servidor mediante el cliente Axios;
 * @returns {void}
 */
function getUsers() {
    axios.get('http://localhost:2800/usuarios')
        .then(function (respuesta) {
        for (var i = 0; i < respuesta.data.length; i++) {
            localStorage.setItem(respuesta.data[i].name, JSON.stringify(respuesta.data[i]));
        }
        console.log(respuesta.data);
    })
        .catch(function (error) {
        // handle error
        console.log("Haciendo un GET existe el siguiente error: " + error);
    })
        .then(function () {
        // always executed
    });
}
//# sourceMappingURL=usuariosRegistrados.js.map