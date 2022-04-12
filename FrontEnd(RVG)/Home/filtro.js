var listaSuplementos = document.querySelector(".lista-suplementos");

    let url = "http://10.87.207.19/-banco-digital-/backend (suplementos)/src/controll/routes/route.suplementos.php";

    fetch(url) 
    .then(resp => resp.json())
    .then(data => {
        data.arr.forEach(suplemento => {
            let card = document.createElement("div");
            card.className = "card-suplementos";

            const nome = document.createElement("p");
            const preco = document.createElement("p")

            nome.className = "nomelist";
            nome.innerHTML = suplemento.nome;

            preco.className = "precolist";
            preco.innerHTML = suplemento.preco;
            
            card.appendChild(nome);
            card.appendChild(preco);

            listaSuplementos.appendChild(card);

        })
    })

function buscar() {
    let prod = document.querySelectorAll(".card-suplementos");
    let filtro = document.querySelector("#inpfiltro").value.toLowerCase();
    let linhas = document.querySelectorAll(".nomelist");

    for(let i = 0; i<linhas.length; i++) {
        if(linhas[1].innerHTML.toString().toLowerCase().includes(filtro)) {
            prod[i].stye.display = "grid";
        }else {
            prod[i].style.display = "none";
        }
    }
}