//EXECUTANDO O ARQUIVO
//COPIE O CÓDIGO EM UM ARQUIVO JS
//ABRA O TERMINAL E COLOQUE node *nomedoarquivojscriado*

//exemplo de estrutura de dados [PILHA]
const $ = q => document.querySelector(q);

const Pilha = () => {
    const data = []
    let top = -1
    var msg = true; // VARIÁVEL PARA ADICIONAR MENSAGEM DE ACORDO COM A INSERÇÃO OU EXCLUSÃO.

    // MÉTODOS    
    const push = (value) => { //EMPILHAR 
        top++
        data.push(value)
        msg = true

    }
    const pop = () => { //DESEMPILHAR
        if (top < 0) {
            alert("PILHA VAZIA")
            return false
        } else {
            msg = false
            const value = data[top]
            data.splice(top, 1) // removendo o último ítem de data
            top--
            return value; // retorna o o valor do índice decrementado
        }
        

    }
    const print = () => { //MOSTRAR PILHA
        _tratarArray = (newArray) => {
            document.getElementById("esconder").innerHTML = "";
            let divHouses = document.querySelector("div.houses");
            let divCard = document.createElement("DIV");
            let divText = document.createElement("DIV");
            divCard.classList.add("card-pilha");
            divText.classList.add("card-text");
            var text = document.createElement("span");
            
            if (msg) {
                text.textContent = "Você inseriu na pilha"
            }else if (!msg){
                text.textContent = "Você exclui na pilha"
            }           
           
            divText.appendChild(text);
            divCard.appendChild(divText);
            newArray.forEach(newArray => {
                var h5 = document.createElement("h4");
                h5.innerHTML = newArray;
                divCard.appendChild(h5);
                divHouses.appendChild(divCard);
            })
        }

        //let ultimoIndice = data[data.length - 1];
        _tratarArray(data)
        //console.log(ultimoIndice, top + 1)
    }

    return {
        push,
        pop,
        print
    }
}
//var cont = 0;
const pilha = Pilha() //NOVA PILHA


$("#send").addEventListener("click", e => { // CLICANDO EM INSERIR ITEM
    var opcao = document.getElementById("name").value

    if (!opcao) {
        alert("ENTRE COM UM DADO..")
    }
    if (opcao) {  // NÃO PERMITI ENTRADA DE DADOS VAZIA     
        pilha.push(opcao)
        document.getElementById("name").value = ''
    }
    //cont = cont + 1
    pilha.print()
})

$("#remover").onclick = function () { // CLICANDO EM REMOVER ITEM DA PILHA
    pilha.pop()
    pilha.print()
};
