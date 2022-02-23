var email = document.querySelector("#email");
var senha = document.querySelector("#senha");
var btncadas = document.querySelector("#btncadas");
var ntc = document.querySelector(".ntc");
var entrar = document.querySelector("#entrarbtn");
var cadastrar = document.querySelector(".cadastrar");

function login() {
    let data = {
        email = email.value,
        senha = senha.value,
    }
    console.log(data)

    fetch("http://localhost/backend/src/controll/routes/route.clientes.php", {
        "method": 'POST',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp => { return resp.json() })
    .then(data => { 
        console.log(data);
    })
}


function cadastrarUser() {
    fetch("http://localhost/backend/src/controll/routes/route.clientes.php", {
       "method": 'POST',
       "headers": {
           "Content-Type": "aplication/json"
       },
       "body": data 
    })
    .then(resp => { return resp.json() })
    .then(data => { 
        
    })
}


function cadastrarbox() {
    let inputs = document.querySelector(".inputs");
    let input = document.createElement("input");
    let cadastrar = document.createElement("button")
    input.placeholder = "Nome";
    input.className = "nomeinput";
    cadastrar.className = "cadastrar";
        
    inputs.appendChild(input);
    inputs.appendChild(cadastrar);

    ntc.style.display = "none";
    entrar.style.display = "none";
    cadastrar.innerHTML = "Cadastrar";
}

// function login() {
//     fetch("http://localhost/backend/src/controll/routes/route.clientes.php")
//     .then(resp => {
//         return resp.json();
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }
