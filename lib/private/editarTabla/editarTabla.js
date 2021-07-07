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
document.getElementsByTagName("h1")[0].innerText += " " + getName();
document.getElementById("button").addEventListener("click", principaaal);
// document.getElementById("buttonn").addEventListener("click", updateUser);
/**
 * Ejecuta las comprobaciones para editar al usuario
 */
function principaaal() {
    if (validateInputs()) {
        validatePassword();
    }
    if (validateInputs() && validatePassword()) {
        localStorage.removeItem(JSON.stringify(getName()));
        console.log(JSON.stringify(getName()));
        updateUser();
        swal("", "Usuario registrado correctamente 😜", "success");
    }
}
/**
 * Obtiene el nombre del usuario a editar a través del SS
 * @returns {string}
 */
function getName() {
    return sessionStorage.getItem(sessionStorage.key(sessionStorage.length - 1));
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
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var data = {
        password: password,
        email: email,
        age: age
    };
    axios.put("http://localhost:2800/usuarios/60bdfbd84e79d427e0684036", data)
        .then(function (response) {
        // handle success
        var user = getName();
        localStorage.setItem(getName(), JSON.stringify({ user: user, password: password, email: email, age: age }));
        console.log(response.data);
        console.log(localStorage.getItem(getName()));
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