// POO
class User {
    username: string;
    password: string;
    email: string;
    age: number;
    constructor (username: string, password: string, email: string, age: number) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
    }
}
const users: User[] = [new User("PepeGotera", "Albañil34", "pepitoelalbañilmasbonito@hotmail.com", 32), new User("Súperman", "12345", "claroqueclark@superman.com", 28), new User("Fer.Quaglietta", "Scoiattolo", "fer.quaglietta@gmai.com", 39), new User("Brian Johnson", "ACDC", "jhonsonandjohnson@yahoo.com", 63), new User("Pablito", "Clavó un clavito", "mrpablitoesdelomejorcito@pabloski.es)", 21)];


// DOM
window.addEventListener("load", general);
/**
 * Realiza una llamada a los eventos necesarios para que las funciones se ejecuten, tras haber cargado el documento;
 * @returns {void}
 */
function general (): void {
    document.getElementById("button").addEventListener("click", checkUser);

    //  Funciones para manejar el foco en los inputs:

    let form = (document.getElementById("form") as HTMLElement);
    form.addEventListener("focus", function( event ) {
    let label = ((event.target as HTMLInputElement).labels[0]);
    label.style.color = "black";
    (event.target as HTMLInputElement).placeholder = "";
    }, true);
    
    form.addEventListener("blur", function( event ) {
    let label = ((event.target as HTMLInputElement).labels[0]);
    if ((event.target as HTMLInputElement).value === "") {
        label.style.color = "rgb(222, 226, 187)";
    }  
    (event.target as HTMLInputElement).placeholder = (event.target as HTMLInputElement).name;
    }, true);

/*     document.getElementById("username").addEventListener("click", activateUsernameLabel);
    document.getElementById("password").addEventListener("click", activatePasswordLabel); */
}


// Functions for validation and DOM

/**
 * Valida los datos introducidos por un usuario para iniciar sesión;
 * @returns {void}
 */    
function checkUser (): void {
    let error = (document.getElementById("error") as HTMLInputElement);
    let userPresent: boolean;
    let nombreCapturado: string = (document.getElementById("username") as HTMLInputElement).value;
    let contraseñaCapturada: string = (document.getElementById("password") as HTMLInputElement).value;
    for (let i: number = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))).username);
        /* if (nombreCapturado === JSON.parse(localStorage.getItem(localStorage.key(i))).username && contraseñaCapturada === JSON.parse(localStorage.getItem(localStorage.key(i))).password) {
            userPresent = true;
            break
        } else {
            userPresent = false
        }
    } */
    console.log(userPresent)
    userPresent ? window.open("../../private/sesionIniciada/sesionIniciada.html", "_self") : error.style.color = "red", error.innerHTML = "Su nombre de usuario o contraseña son incorrectos :("; 
}



/**
 * Muestra en pantalla el label for "username" y elimina el placeholder;
 * @returns {void}
 */
function activateUsernameLabel (): void {
    let usernameInput = (document.getElementById("username") as HTMLInputElement);
    let usernameLabel = (document.getElementById("usernameLabel") as HTMLElement);
    usernameLabel.style.color = "black";
    if (usernameLabel.style.color = "black") {
    usernameInput.placeholder = "";
    }
}

/**
 * Muestra en pantalla el label for "password" y elimina el placeholder;
 * @returns {void}
 */
function activatePasswordLabel (): void {
    let passwordInput = (document.getElementById("password") as HTMLInputElement);
    let passwordLabel = (document.getElementById("passwordLabel") as HTMLElement);
    passwordLabel.style.color = "black";
    if (passwordLabel.style.color = "black") {
        passwordInput.placeholder = "";
    }
}


