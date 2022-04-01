var menu = document.querySelector(".menu");
var modal = document.querySelector(".modal");
var body = document.querySelector("body");
var options = document.querySelector('.options');
var on = document.querySelector(".on");
var data = localStorage.getItem('data');
var descprod = document.querySelector(".descprod");
var linhas = 0;

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

async function carregarSuplementos(cont1 = 0) {
    // const botao = document.querySelector('.botaos')

    let url = "http://localhost/-banco-digital-/backend/src/controll/routes/route.suplementos.php/";

    // if(cont1 != null) url += "?cont1="+cont1;
    
    // console.log(url);

    const data = await fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    data.arr.forEach(e => {
                        let p = document.createElement('p');
                        let preco = document.createElement('p');

                        p.innerHTML = e.nome;
                        preco.innerHTML = e.preco;

                        descprod.appendChild(p)
                        descprod.appendChild(preco)

                      
                    });
                    return data;
                });

    // linhas = data.numero;

    // if(!botao.innerHTML.includes('button')) {
    //     for (let i = 0; i < linhas; i++) {
                   
    //         let butao = document.createElement('button')
                    
    //         butao.addEventListener('click', async () => {
    //              cont1 += 30;
    //              await carregarSuplementos(cont1);
    //         })
        
    //          butao.innerHTML = "2";
    //          botao.appendChild(butao);
    //      }
                
    //     } else {
    //          console.log(botao);
    //  }
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