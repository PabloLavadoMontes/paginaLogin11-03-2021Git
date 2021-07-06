import { checksLocalStorage, blockPage } from "../sesionIniciada/sesionIniciada.js";
// import {getName} from "../../../lib/private/usuariosRegistrados/usuariosRegistrados.js";
var Userr = /** @class */ (function () {
    function Userr(password, email, age) {
        this.password = password;
        this.email = email;
        this.age = age;
    }
    return Userr;
}());
// Antes de cargar el DOM:
blockPage(checksLocalStorage());
// DOM
document.getElementsByTagName("h1")[0].innerText += getName();
document.getElementById("button").addEventListener("click", principaaal);
/**
 * Ejecuta las comprobaciones para editar un usuario
 */
function principaaal() {
    if (validateInputs()) {
        validatePassword();
    }
    if (validateInputs() && validatePassword()) {
        updateUser();
        swal("", "Usuario modificado correctamente 😊", "success");
    }
}
/**
 * Obtiene el nombre del usuario a editar a través del SS
 * @returns {string}
 */
function getName() {
    return " " + sessionStorage.getItem(sessionStorage.key(sessionStorage.length - 1)).toUpperCase();
}
/**
 * Comprueba que los valores introducidos por el usuario en el usuario  NO estén vacíos;
 * @returns {boolean}
 */
function validateInputs() {
    var arrayOfInputs = [];
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    arrayOfInputs.push(password, password2, email, age);
    for (var i = 0; i < arrayOfInputs.length; i++) {
        while (arrayOfInputs[i].value.trim() === "") {
            swal("", "El campo " + arrayOfInputs[i].name + " NO está debidamente cumplimentado", "error");
            return false;
        }
    }
    return true;
}
/**
 * Comprueba que el usuario repita correctamente la contraseña;
 * @returns {boolean}
 */
function validatePassword() {
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    if (password1 !== password2) {
        // Pintar el error en el DOM:   error.innerHTML = "¡Las contraseñas no coinciden!";
        swal("", "Las contraseñas NO coinciden", "error");
        return false;
    }
    else {
        return true;
    }
}
function updateUser() {
    // let data: Userr[] = [];
    // data.push(new Userr((document.getElementById("password") as HTMLInputElement).value, (document.getElementById("email") as HTMLInputElement).value, (document.getElementById("age") as HTMLInputElement).valueAsNumber));
    var data = {
        password: "raqueta",
        email: "elepetel@gmail.com",
        age: 45
    };
    axios.put("http://localhost:2800/usuarios/60bdfbd84e79d427e0684036", data)
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