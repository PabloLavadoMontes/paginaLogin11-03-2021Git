import {checksLocalStorage, blockPage} from "../sesionIniciada/sesionIniciada.js";
// import {getName} from "../../../lib/private/usuariosRegistrados/usuariosRegistrados.js";

class Userr {
    password: string;
    email: string;
    age: number;
    constructor (password: string, email: string, age: number) {
        this.password = password;
        this.email = email;
        this.age = age;
    }
}

// Antes de cargar el DOM:
blockPage(checksLocalStorage())

// DOM
document.getElementsByTagName("h1")[0].innerText += " " + getName(); 
document.getElementById("button").addEventListener("click", principaaal);
// document.getElementById("buttonn").addEventListener("click", updateUser);


/**
 * Ejecuta las comprobaciones para editar al usuario
 */
 function principaaal (): void { 
    if (validateInputs()) {
        validatePassword();
    }
    if (validateInputs() && validatePassword()) {
        localStorage.removeItem(JSON.stringify(getName()));
        console.log(JSON.stringify(getName()))
        updateUser();
        swal("", "Usuario registrado correctamente 😜", "success");
    }
}

/**
 * Obtiene el nombre del usuario a editar a través del SS
 * @returns {string}
 */
function getName(): string {
    return sessionStorage.getItem(sessionStorage.key(sessionStorage.length - 1));
}

/**
 * Comprueba que los valores introducidos por el usuario en el usuario  NO estén vacíos;
 * @returns {boolean}
 */
 function validateInputs(): boolean {
    let arrayOfInputs: any[] = [];
    let password = (document.getElementById("password")as HTMLInputElement);
    let password2 = (document.getElementById("password2")as HTMLInputElement);
    let email = (document.getElementById("email")as HTMLInputElement);
    let age = (document.getElementById("age")as HTMLInputElement);

    arrayOfInputs.push(password, password2, email, age);
    for (let i: number = 0; i< arrayOfInputs.length; i++) {
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
 function validatePassword (): boolean {
    let password1: string = (document.getElementById("password") as HTMLInputElement).value;
    let password2: string = (document.getElementById("password2") as HTMLInputElement).value;
    if (password1 !== password2) {
        // Pintar el error en el DOM:   error.innerHTML = "¡Las contraseñas no coinciden!";
        swal("", "Las contraseñas NO coinciden", "error");
        return false
    } else {
        return true
    }
}

function updateUser() {
    let password = (document.getElementById("password")as HTMLInputElement).value;
    let email = (document.getElementById("email")as HTMLInputElement).value;
    let age = (document.getElementById("age")as HTMLInputElement).value;
    let data = {
        password: password,
        email: email,
        age: age
    }
    axios.put(`http://localhost:2800/usuarios/60bdfbd84e79d427e0684036`, data)
    .then(function (response) {
        // handle success
        let user: string = getName();
        localStorage.setItem(getName(), JSON.stringify({user, password, email, age}))
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