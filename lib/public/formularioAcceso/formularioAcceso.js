// POO
var User = /** @class */ (function () {
    function User(username, password, email, age) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
    }
    return User;
}());
var users = [new User("PepeGotera", "Albañil34", "pepitoelalbañilmasbonito@hotmail.com", 32), new User("Súperman", "12345", "claroqueclark@superman.com", 28), new User("Fer.Quaglietta", "Scoiattolo", "fer.quaglietta@gmai.com", 39), new User("Brian Johnson", "ACDC", "jhonsonandjohnson@yahoo.com", 63), new User("Pablito", "Clavó un clavito", "mrpablitoesdelomejorcito@pabloski.es)", 21)];
// DOM
window.addEventListener("load", general);
/**
 * Realiza una llamada a los eventos necesarios para que las funciones se ejecuten, tras haber cargado el documento;
 * @returns {void}
 */
function general() {
    document.getElementById("button").addEventListener("click", checkUser);
    //  Funciones para manejar el foco en los inputs:
    var form = document.getElementById("form");
    form.addEventListener("focus", function (event) {
        var label = (event.target.labels[0]);
        label.style.color = "black";
        event.target.placeholder = "";
    }, true);
    form.addEventListener("blur", function (event) {
        var label = (event.target.labels[0]);
        if (event.target.value === "") {
            label.style.color = "rgb(222, 226, 187)";
        }
        event.target.placeholder = event.target.name;
    }, true);
    getUsers();
    // TODO: Aquí es donde tengo que cargar los datos del servidor en el LS con el cliente cuando ha cargado la página
    // TODO: Recuerda cambiar os nobres de las variables, actualemnte NO COINCIDEN con las del servidor
    /*     document.getElementById("username").addEventListener("click", activateUsernameLabel);
        document.getElementById("password").addEventListener("click", activatePasswordLabel); */
}
// Functions for validation and DOM
/**
 * Valida los datos introducidos por un usuario para iniciar sesión;
 * @returns {void}
 */
function checkUser() {
    var error = document.getElementById("error");
    var nombreCapturado = document.getElementById("username").value;
    var contraseñaCapturada = document.getElementById("password").value;
    for (var i = 0; i < localStorage.length; i++) {
        if (nombreCapturado === JSON.parse(localStorage.getItem(localStorage.key(i))).name && contraseñaCapturada === JSON.parse(localStorage.getItem(localStorage.key(i))).password) {
            swal("", "Enhorabuena " + nombreCapturado + ", has conseguido iniciar sesi\u00F3n", "success");
            setTimeout(function () { window.open("../../private/sesionIniciada/sesionIniciada.html", "_self"); }, 1000);
            break;
        }
        else {
            swal("", "Su nombre de usuario o contraseña son incorrectos :(", "error");
        }
    }
}
/**
 * Muestra en pantalla el label for "username" y elimina el placeholder;
 * @returns {void}
 */
function activateUsernameLabel() {
    var usernameInput = document.getElementById("username");
    var usernameLabel = document.getElementById("usernameLabel");
    usernameLabel.style.color = "black";
    if (usernameLabel.style.color = "black") {
        usernameInput.placeholder = "";
    }
}
/**
 * Muestra en pantalla el label for "password" y elimina el placeholder;
 * @returns {void}
 */
function activatePasswordLabel() {
    var passwordInput = document.getElementById("password");
    var passwordLabel = document.getElementById("passwordLabel");
    passwordLabel.style.color = "black";
    if (passwordLabel.style.color = "black") {
        passwordInput.placeholder = "";
    }
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
//# sourceMappingURL=formularioAcceso.js.map