import {checksLocalStorage, blockPage} from "../sesionIniciada/sesionIniciada.js";

// Antes de cargar el DOM:
blockPage(checksLocalStorage())

// DOM
document.getElementsByTagName("h1")[0].innerText += " " + getName(); 
showUserdata();
document.getElementById("button").addEventListener("click", principaaal);
// document.getElementById("buttonn").addEventListener("click", updateUser);

/**
 * Mostrar en los inputs los datos del usuario a editar;
 * @returns {void}
 */
function showUserdata (): void {
    let user: any = JSON.parse(localStorage.getItem(getName()));
    (document.getElementById("username") as HTMLInputElement).value = user.name;
    (document.getElementById("password") as HTMLInputElement).value = user.password;
    (document.getElementById("password2") as HTMLInputElement).value = user.password;
    (document.getElementById("email") as HTMLInputElement).value = user.email;
    (document.getElementById("age") as HTMLInputElement).value = user.age;
}

/**
 * Ejecuta las comprobaciones para editar al usuario
 * @returns {void}
 */
function principaaal (): void { 
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
        swal("", "Las contraseñas NO coinciden", "error");
        return false;
    } else {
        return true;
    }
}

/**
 * Realiza un put al clicar el botóN "GUARDAR";
 * @returns {void}
 */
function updateUser(): void {
    let user = JSON.parse(localStorage.getItem(getName()));
    let id: string = user._id;
    let name = (document.getElementById("username")as HTMLInputElement).value;
    let password = (document.getElementById("password")as HTMLInputElement).value;
    let email = (document.getElementById("email")as HTMLInputElement).value;
    let age = (document.getElementById("age")as HTMLInputElement).value;
    const url: string = "http://localhost:2800/usuarios/" + id;
    let data: object = {
        name: name,
        id: id,
        password: password,
        email: email, 
        age: age
    }
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
