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

function carregarpag() {
    verificaAcesso();
    loadpage();
}

function login() {
    let userdata = {
        "email": email.value,
        "senha": senha.value
    }

    fetch("http://localhost/backend/src/controll/routes/route.clientes.php", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdata)
    })
    .then(resp => { 
        return resp.json();
    })
    .then(data => {
        console.log(data)
        if(data.status !== undefined) {
            alert(data.status);
        }else {
            localStorage.setItem("data", JSON.stringify(data));
            console.log(localStorage.getItem('data'))
            window.location.href = "../home/index.html";
        }    
    })
}

function verificaAcesso() {
    if(localStorage.getItem('data') != null) {
        window.location.href = "../home/index.html";
    }
}

function cadastraruser() {
    let data = JSON.stringify({
        email: email.value,
        senha: senha.value,
        nome: nomeuser.value
    })
    console.log(data);
}

function cadastrarbox() {
    ntc.style.display = "none";
    entrar.style.display = "none";
    cadastrar.style.display = "block";
    nome.style.display = "block";
}