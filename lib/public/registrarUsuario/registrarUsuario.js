export { userExists, validateInputs, validatePassword };
var Userr = /** @class */ (function () {
    function Userr(name, password, email, age) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
    }
    return Userr;
}());
var userss = [new Userr("PepeGotera", "Albañil34", "pepitoelalbañilmasbonito@hotmail.com", 32), new Userr("Súperman", "12345", "claroqueclark@superman.com", 28), new Userr("Fer.Quaglietta", "Scoiattolo", "fer.quaglietta@gmai.com", 39), new Userr("Brian Johnson", "ACDC", "jhonsonandjohnson@yahoo.com", 63), new Userr("Pablito", "Clavó un clavito", "mrpablitoesdelomejorcito@pabloski.es)", 21)];
// DOM
document.getElementById("button").addEventListener("click", principal);
/**
 * Ejecuta las comprobaciones para registrar al usuario
 */
function principal() {
    //  Pintar registro correcto en el DOM:    let error = (document.getElementById("error") as HTMLInputElement);
    if (!userExists()) {
        validateInputs();
    }
    if (userExists() === false && validateInputs()) {
        validatePassword();
    }
    if (userExists() === false && validateInputs() && validatePassword()) {
        addUser(userss);
        addUserToLS();
        addUserToSS();
        //  Pintar registro correcto en el DOM:
        /*         error.style.color = "green";
        error.innerHTML = "Usuario registrado correctamente 😜"; */
        swal("", "Usuario registrado correctamente 😜", "success");
    }
}
/**
 * Comprueba si el nombre de usuario introducido está ya registrado o no.
 * @returns {boolean}
 */
function userExists() {
    //  Pintar error en el DOM:
    /*  let error = (document.getElementById("error") as HTMLInputElement);
    error.style.color = "red"; */
    var username = document.getElementById("username").value;
    for (var i = 0; i < localStorage.length; i++) {
        if (JSON.parse(localStorage.getItem(localStorage.key(i))).name === username) {
            // Pintar el error en el DOM:   error.innerHTML = "Este usuario ya existe, por favor, introduzca un nombre de usuario diferente";
            swal("", "Este usuario ya existe, por favor, introduzca un nombre de usuario DIFERENTE", "error");
            return true;
        }
    }
    return false;
}
/**
 * Comprueba que los valores introducidos por el usuario en el usuario  NO estén vacíos;
 * @returns {boolean}
 */
function validateInputs() {
    //  Pintar error en el DOM:
    /*  let error = (document.getElementById("error") as HTMLInputElement);
    error.style.color = "red"; */
    var arrayOfInputs = [];
    var user = document.getElementById("username");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    arrayOfInputs.push(user, password, password2, email, age);
    for (var i = 0; i < arrayOfInputs.length; i++) {
        while (arrayOfInputs[i].value.trim() === "") {
            // Pintar el error en el DOM:   error.innerHTML = "El campo " + arrayOfInputs[i].name + " NO está debidamente cumplimentado";
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
    //  Pintar error en el DOM:
    /*  let error = (document.getElementById("error") as HTMLInputElement);
    error.style.color = "red"; */
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
// Utilizar después que el usuario haya clicado el botón y se hayan realizado las validaciones;
/**
 * Añade un usuario nuevo a la lista usuarios;
 * @returns {any} userss
 */
function addUser(userss) {
    userss.push(new Userr(document.getElementById("username").value, document.getElementById("password").value, document.getElementById("email").value, document.getElementById("age").valueAsNumber));
    return userss[userss.length - 1];
}
/**
 * Guarda el nuevo usuario en el Local Storage;
 * @returns {void}
 */
function addUserToLS() {
    localStorage.setItem(userss[userss.length - 1].name, JSON.stringify(addUser(userss)));
}
/**
 * Guarda el nuevo usuario en el Session Storage;
 * @returns {void}
 */
function addUserToSS() {
    sessionStorage.setItem(userss[userss.length - 1].name, JSON.stringify(addUser(userss)));
}
//# sourceMappingURL=registrarUsuario.js.map