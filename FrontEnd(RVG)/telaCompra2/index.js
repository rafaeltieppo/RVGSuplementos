var body = document.querySelector("body");
var on = document.querySelector(".on");
var data = localStorage.getItem('data');

function logout() {
    localStorage.clear();
    alert("Voçê saiu da sua conta");
}

function verNome() {
    if(localStorage.getItem('data') != null) {
        let pe = document.querySelector('.pentrar');
        let on = document.querySelector('.on')
        pe.innerHTML = "Olá" + "\n" + localStorage.getItem('data').nome;
        on.innerHTML = localStorage.getItem('data').nome;   
    }
}

function FecharPedido() {
    window.location.href = "../telaFinalizarCompra2"
}