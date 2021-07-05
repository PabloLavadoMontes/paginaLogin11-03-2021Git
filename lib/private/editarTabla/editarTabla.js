import { checksSessionStorage, blockPage } from "../sesionIniciada/sesionIniciada.js";
import { userExists, validateInputs, validatePassword } from "../../../lib/public/registrarUsuario/registrarUsuario.js";
// Antes de cargar el DOM:
blockPage(checksSessionStorage());
// DOM
window.addEventListener("load", principaaal);
/**
 * Ejecuta las comprobaciones para editar un usuario
 */
function principaaal() {
    if (!userExists()) {
        validateInputs();
    }
    if (userExists() === false && validateInputs()) {
        validatePassword();
    }
    if (userExists() === false && validateInputs() && validatePassword()) {
        swal("", "Usuario modificado correctamente 😊", "success");
    }
}
function updateUser() {
    // const data=
    axios.put('http://localhost:2800/usuarios', data)
        .then(function (response) {
        // handle success
        console.log(response.data);
    })
        .catch(function (error) {
        // handle error
        console.log(error);
    })
        .then(function () {
        // always executed
    });
}
//# sourceMappingURL=editarTabla.js.map