export {userExists, validateInputs, validatePassword}

class Userr {
    name: string;
    password: string;
    email: string;
    age: number;
    constructor (name: string, password: string, email: string, age: number) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
    }
}
const userss: Userr[] = [new Userr("PepeGotera", "Albañil34", "pepitoelalbañilmasbonito@hotmail.com", 32), new Userr("Súperman", "12345", "claroqueclark@superman.com", 28), new Userr("Fer.Quaglietta", "Scoiattolo", "fer.quaglietta@gmai.com", 39), new Userr("Brian Johnson", "ACDC", "jhonsonandjohnson@yahoo.com", 63), new Userr("Pablito", "Clavó un clavito", "mrpablitoesdelomejorcito@pabloski.es)", 21)];

// DOM
document.getElementById("button").addEventListener("click", principal);

/**
 * Ejecuta las comprobaciones para registrar al usuario
 */
function principal (): void {
    //  Pintar registro correcto en el DOM:    let error = (document.getElementById("error") as HTMLInputElement);
    if (!userExists()) {
        validateInputs();
    } 
    if (userExists() === false && validateInputs()) {
        validatePassword();
    }
    if (userExists() === false && validateInputs() && validatePassword()) {
        addUser(userss);
        registerUsers(userss[userss.length-1]);
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
function userExists (): boolean {
//  Pintar error en el DOM:
    /*  let error = (document.getElementById("error") as HTMLInputElement);
    error.style.color = "red"; */
    let username: string = (document.getElementById("username") as HTMLInputElement).value;
    for (let i: number = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) === username) {
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
function validateInputs(): boolean {
//  Pintar error en el DOM:
    /*  let error = (document.getElementById("error") as HTMLInputElement);
    error.style.color = "red"; */
    let arrayOfInputs: any[] = [];
    let user = (document.getElementById("username")as HTMLInputElement);
    let password = (document.getElementById("password")as HTMLInputElement);
    let password2 = (document.getElementById("password2")as HTMLInputElement);
    let email = (document.getElementById("email")as HTMLInputElement);
    let age = (document.getElementById("age")as HTMLInputElement);
 
    arrayOfInputs.push(user, password, password2, email, age);
    for (let i: number = 0; i< arrayOfInputs.length; i++) {
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
function validatePassword (): boolean {
//  Pintar error en el DOM:
    /*  let error = (document.getElementById("error") as HTMLInputElement);
    error.style.color = "red"; */
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


// Utilizar después que el usuario haya clicado el botón y se hayan realizado las validaciones;
/**
 * Añade un usuario nuevo a la lista usuarios;
 * @returns {any} userss
 */
function addUser (userss: Userr[]): any {
    userss.push(new Userr((document.getElementById("username") as HTMLInputElement).value, (document.getElementById("password") as HTMLInputElement).value, (document.getElementById("email") as HTMLInputElement).value, (document.getElementById("age") as HTMLInputElement).valueAsNumber));
    return userss[userss.length-1];
}

/**
 * Guarda al nuevo usuario en la BD, el localStorage y el sessionStorage
 * @param {any} user 
 * @returns {void}
 */
function registerUsers (user: any): void {
    axios.post('http://localhost:2800/usuarios', user)
    .then((respuesta)=> {
        console.log(respuesta.data);
        localStorage.setItem(user.name, JSON.stringify(user));
        sessionStorage.setItem(user.name, JSON.stringify(user));
    })
    .catch((error)=> {
        // handle error
        console.log("Haciendo un POST existe el siguiente error: " + error);
    })
    .then(()=> {
        // always executed
    });
}