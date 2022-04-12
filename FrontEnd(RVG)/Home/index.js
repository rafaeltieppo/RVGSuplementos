var menu = document.querySelector(".menu");
var modal = document.querySelector(".modal");
var body = document.querySelector("body");
var options = document.querySelector('.options');
var on = document.querySelector(".on");
var data = localStorage.getItem('data');
var descprod = document.querySelector(".descprod");
var linhas = 0;
var loginuser = document.querySelector('.loginuser');
var divEfetuado = document.querySelector(".divEfetuado");  

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

// async function carregarSuplementos(cont1 = 0) {
//      const butaos = document.querySelector('.botaos')

//      let url = "http://localhost/-banco-digital-/backend/src/controll/routes/route.suplementos.php/";

//      if(cont1 != null) url += "?cont1="+cont1;
     
//      console.log(url);
//      descprod.innerHTML = ""
     
//      const data = await fetch(url)
//                  .then(resp => resp.json())
//                  // criar cards
//                  .then(data => {
 
//                      data.arr.forEach(e => {
//                          let p = document.createElement('p');
//                          let preco = document.createElement('p');
 
//                          p.innerHTML = e.nome;
//                          preco.innerHTML = e.preco;
 
 
//                          descprod.appendChild(p)
//                          descprod.appendChild(preco)

//                      });
                     
//                      return data;
//                  });
 
//      linhas = data.numero;
 
//      // contém botao na já adicionado ?
//      if(!butaos.innerHTML.includes('button')) {
         
//          // criando os botões
//          for (let i = 0; i < linhas; i++) {
             
//              let butao = document.createElement('button')
//              butao.id = cont1;
             
//              butao.addEventListener('click', async () => {
//                  await carregarSuplementos(butao.id);                
//              })
 
//              butao.innerHTML = "2";
//              butaos.appendChild(butao);
//              cont1 += 30;
//          }
//      } else {
//          console.log(butaos);
//      }
// }

function verNome() {
    if(localStorage.getItem('data') != null) {
        let pe = document.querySelector('.pentrar');
        let on = document.querySelector('.on')
        pe.innerHTML = "Olá" + "\n" + localStorage.getItem('data').nome;
        on.innerHTML = localStorage.getItem('data').nome;   
    }
}
