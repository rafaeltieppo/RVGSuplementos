const lineProdutoDois = document.querySelector('.lineprodutos2');

async function carregarSuplementos(cont1 = 0) {
    
     const butaos = document.querySelector('.botaos')

     let url = "http://10.87.207.19/-banco-digital-/backend (suplementos)/src/controll/routes/route.suplementos.php";

     if(cont1 != null) url += "?cont1="+cont1;

     lineProdutoDois.innerHTML = ""
     
     const data = await fetch(url)
                 .then(resp => resp.json())
                 // criar cards
                 .then(data => {
 
                     data.arr.forEach(e => {
                         
                        const produto = document.querySelector('.produto').cloneNode(true)
                        const img = produto.querySelector('img')
                        img.src = e.imagem

                        const divs = produto.querySelectorAll('div')
                       
                        const titulo = divs[1].querySelectorAll('p')[0]
                        titulo.innerHTML = e.nome
                        const preco = divs[1].querySelectorAll('p')[1]
                        preco.innerHTML = "R$" + e.preco
                       
                        lineProdutoDois.appendChild(produto)

                        produto.addEventListener("click", () => {
                            localStorage.setItem(produto, (nome, preco. imagem));
                        })
                     });
                     
                     return data;
                 });
 
     linhas = data.numero;
 
     // contém botao na já adicionado ?
     if(!butaos.innerHTML.includes('button')) {
         
         // criando os botões
         for (let i = 1; i <= linhas; i++) {
             
             let butao = document.createElement('button')
             butao.id = cont1;
             
             butao.addEventListener('click', async () => {
                 await carregarSuplementos(butao.id);                
             })
 
             butao.innerHTML = i;
             butaos.appendChild(butao);
             cont1 += 30;
         }
     } else {
         console.log(butaos);
     }
}