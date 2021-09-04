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
    getUsers()
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
function checkUser (): void {
    let error = (document.getElementById("error") as HTMLInputElement);
    let nombreCapturado: string = (document.getElementById("username") as HTMLInputElement).value;
    let contraseñaCapturada: string = (document.getElementById("password") as HTMLInputElement).value;
    for (let i: number = 0; i < localStorage.length; i++) {
        if (nombreCapturado === JSON.parse(localStorage.getItem(localStorage.key(i))).name && contraseñaCapturada === JSON.parse(localStorage.getItem(localStorage.key(i))).password) {
            swal("", `Enhorabuena ${nombreCapturado}, has conseguido iniciar sesión`, "success");
            setTimeout(() => { window.open("../../private/sesionIniciada/sesionIniciada.html", "_self") }, 1000);
            break;
        } else {
            swal("", "Su nombre de usuario o contraseña son incorrectos :(", "error");
        }
    }
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
