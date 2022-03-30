var menu = document.querySelector(".menu");
var modal = document.querySelector(".modal");
var body = document.querySelector("body");
var options = document.querySelector('.options');
var on = document.querySelector(".on");
var data = localStorage.getItem('data');

function showModal() {
    modal.style.display = "flex";
    modal.style.border = "1px solid black";
    modal.style.borderRadius = "5px";
    modal.style.height = "60vh";
}

function closeModal() {
    modal.style.display = "none";
    options.innerHTML = "";
    on.innerHTML = "";
}

function Menu() {
    let ola = document.createElement('p');
    ola.innerHTML = 'Olá' + data.nome;
    ola.className = "ola";

    let cmc = document.createElement('p');
    cmc.innerHTML = "Criar minha conta";
    cmc.className = "cmc";

    let entrar = document.createElement('p');
    entrar.innerHTML = "Entrar";
    entrar.className = "entrar";

    on.appendChild(ola);
    options.appendChild(cmc);
    options.appendChild(entrar);
}