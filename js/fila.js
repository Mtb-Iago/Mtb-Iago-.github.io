//EXECUTANDO O ARQUIVO
//COPIE O CÓDIGO EM UM ARQUIVO JS
//ABRA O TERMINAL E COLOQUE node *nomedoarquivojscriado*

//exemplo de estrutura de dados [FILA]
const $ = q => document.querySelector(q);
const Pilha = () => {
    const data = []
    let top = -1 // VÁRIAVEL AUX COMO CONTADOR
    var msg = true; // VARIÁVEL PARA ADICIONAR MENSAGEM DE ACORDO COM A INSERÇÃO OU EXCLUSÃO.

    const unshift = (value) => {
        top++
        msg = true;
        data.unshift(value)

    }
    const pop = () => {
        msg = false
        if (top < 0) {
            alert("FILA VAZIA")
            return false
        } else {
            const value = data[top]
            data.splice(top, 1) // removendo o último ítem de data
            top--
            return value; // retorna o o valor do índice decrementado
        }
    }
    /*const print = () => {
        _tratarArray = (newArray) => {
            let divHouses = document.querySelector("div.houses");
            let divCard = document.createElement("DIV");
            divCard.classList.add("card-result");

            var span = document.createElement("h1");
            span.innerHTML = newArray;
            divCard.appendChild(span);
            divHouses.appendChild(divCard);

        }

        let ultimoIndice = data[data.length - 1];
        _tratarArray(data)
        console.log(ultimoIndice, top + 1)
    }*/
    const print = () => {
        _tratarArray = (newArray) => {
            document.getElementById("esconder").innerHTML = "";
            let divHouses = document.querySelector("div.houses");
            let divCard = document.createElement("DIV");
            let divText = document.createElement("DIV");
            divCard.classList.add("card-result");
            divText.classList.add("card-text");
            var text = document.createElement("span");
            
            if (msg) {
                text.textContent = "Você inseriu na fila"
            }else if (!msg){
                text.textContent = "Você exclui na fila"
            }           
           
            divText.appendChild(text);
            divCard.appendChild(divText);
            
            newArray.forEach(newArray => {
                var h1 = document.createElement("h1");
               h1.innerHTML = newArray;
                divCard.appendChild(h1);
                divHouses.appendChild(divCard);
            })
        }

        //let ultimoIndice = data[data.length - 1];
        _tratarArray(data)
        //console.log(ultimoIndice, top + 1)
    }

    return {
        unshift,
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
        pilha.unshift(opcao)
        document.getElementById("name").value = ''
    }
    //cont = cont + 1
    pilha.print()
})

$("#remover").onclick = function () { // CLICANDO EM REMOVER ITEM DA PILHA
    pilha.pop()
    pilha.print()
    
};
