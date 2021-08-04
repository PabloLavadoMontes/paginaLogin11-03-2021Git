import { checksLocalStorage, blockPage } from "../sesionIniciada/sesionIniciada.js";
// Antes de cargar el DOM:
blockPage(checksLocalStorage());
// DOM
document.getElementsByTagName("h1")[0].innerText += " " + getName();
showUserdata();
document.getElementById("button").addEventListener("click", principaaal);
// document.getElementById("buttonn").addEventListener("click", updateUser);
/**
 * Mostrar en los inputs los datos del usuario a editar;
 * @returns {void}
 */
function showUserdata() {
    var user = JSON.parse(localStorage.getItem(getName()));
    document.getElementById("username").value = user.name;
    document.getElementById("password").value = user.password;
    document.getElementById("password2").value = user.password;
    document.getElementById("email").value = user.email;
    document.getElementById("age").value = user.age;
}
/**
 * Ejecuta las comprobaciones para editar al usuario
 * @returns {void}
 */
function principaaal() {
    if (validateInputs()) {
        validatePassword();
    }
    if (validateInputs() && validatePassword()) {
        // localStorage.removeItem(JSON.stringify(getName()));
        updateUser();
        swal("", "Usuario registrado correctamente 😜", "success");
        getUsers();
        /* setTimeout(() => {
            window.open("../usuariosRegistrados/usuariosRegistrados.html", "_self");
        }, 2000); */
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
        swal("", "Las contraseñas NO coinciden", "error");
        return false;
    }
    else {
        return true;
    }
}
/**
 * Realiza un put al clicar el botóN "GUARDAR";
 * @returns {void}
 */
function updateUser() {
    var user = JSON.parse(localStorage.getItem(getName()));
    var id = user._id;
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var url = "http://localhost:2800/usuarios/" + id;
    var data = {
        name: name,
        id: id,
        password: password,
        email: email,
        age: age
    };
    console.log(user);
    console.log(name);
    console.log(id);
    axios.put(url, data)
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
//# sourceMappingURL=editarTabla.js.map