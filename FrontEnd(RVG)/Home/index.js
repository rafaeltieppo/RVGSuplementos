var menu = document.querySelector(".menu");
var modal = document.querySelector(".modal");
var body = document.querySelector("body");
var options = document.querySelector('.options');
var on = document.querySelector(".on");
var data = localStorage.getItem('data')

let loginuser = document.querySelector('.loginuser');
    loginuser.addEventListener("click", () => {
    window.location.href="../Login/index.html";
})

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
    ola.innerHTML = 'Olá';
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

function logout() {
    localStorage.clear();
    alert("Voçê saiu da sua conta");
}

function carregarSuplementos() {
    fetch("http://localhost/-banco-digital-/backend/src/controll/routes/route.suplementos.php")
    .then(resp => { return resp.json() })
    .then(data => { 
        data.arr.forEach(e => {
            let pnome = document.createElement("p");
            let ppreco = document.createElement("p");
            let descprod = document.querySelector(".descprod");
            let button = document.createElement("button");

            console.log(pnome);

            pnome.innerHTML = e.nome ;
            ppreco.innerHTML = "R$" + e.preco;
            button.innerHTML = "Comprar"

            descprod.appendChild(pnome);
            descprod.appendChild(ppreco);
            descprod.appendChild(button);

            descprod.index[1]
        })
    });

}

function verNome() {
    if(localStorage.getItem('data') != null) {
        let pe = document.querySelector('.pentrar');
        let espaco = document.querySelector('.loginuser');
        pe.style.display = 'none';

        let nome = document.createElement("p");
        nome.innerHTML = "Olá" + localStorage.getItem(data.nome)
        nome.className = "nomeh";

        espaco.appendChild(nome);
    }

}