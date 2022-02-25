var email = document.querySelector("#email");
var senha = document.querySelector("#senha");
var nome = document.querySelector("#nome");
var btncadas = document.querySelector("#btncadas");
var ntc = document.querySelector(".ntc");
var entrar = document.querySelector("#entrarbtn");
var cadastrar = document.querySelector("#cadastrarbtn");


function loadpage() {
    cadastrar.style.display = "none";
    nome.style.display = "none";
}

function login() {
    let userdata = JSON.stringify({
        email: email.value,
        senha: senha.value,
    });

    console.log(userdata);

    fetch("http://localhost/backend/src/controll/routes/route.clientes.php", {
        "method": 'POST',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": userdata
    })
    .then(resp => { return resp.json() })
    .then(data => { 
        if(data.lenght > 0) {
            window.location.href = '../Home/index.js';
        }else {
            alert("Usuario ou senha invalida");
        }
    })
}

function cadastraruser() {
    let data = JSON.stringify({
        email: email.value,
        senha: senha.value,
        nome: nomeuser.value
    })
    console.log(data)
}

function cadastrarbox() {
    ntc.style.display = "none";
    entrar.style.display = "none";
    cadastrar.style.display = "block";
    nome.style.display = "block";
}