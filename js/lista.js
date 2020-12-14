class NoListaSE{
    constructor(valor, proximo){
        this.valor = valor;
        this.proximo = proximo;
    }
}
const $ = q => document.querySelector(q);
const listaSimplesmenteEncadeada = () => {
    var msg = true; 
     
  const addInicio = (valor) => {
    var msg = true; 
        let novoNo = new NoListaSE(valor, this.cabeca);

        if (this.cabeca == null) {
            this.cabeca = novoNo;
            this.calda = novoNo;
        } else {
            this.cabeca = novoNo;
        }
    }

   const addFim = (valor) => {
        let novoNo = new NoListaSE(valor, null);

        if (this.cabeca == null) {
            this.cabeca = novoNo;
            this.calda = novoNo;
        } else {
            this.calda.proximo = novoNo;
            this.calda = novoNo;
        }
    }

   const remove = (valor) => {

        if (this.cabeca == null) {
            alert("lISTA VAZIA")
            return;
        }

        if (this.cabeca.valor == valor) {

            this.cabeca = this.cabeca.proximo;

        } else {

            let noAtual = this.cabeca;
            let noPorDeletar = null;

            while (noAtual.proximo != null) {
                if (noAtual.proximo.valor == valor) {
                    noPorDeletar = noAtual.proximo;
                    noAtual.proximo = noAtual.proximo.proximo;
                    break;
                }
                noAtual = noAtual.proximo;
            }

            if (noPorDeletar == null) {
                alert("Valor não encontrado")
                
            }

        }

    }

    const ler = () => {

        if (this.cabeca == null) {
            //alert("Vazio")
            return;
        }

        let noAtual = this.cabeca;
        let divHouses = document.querySelector("div.houses");
        let divCard = document.createElement("DIV");
        let divText = document.createElement("DIV");
        divCard.classList.add("card-lista");
        divText.classList.add("card-text");
        var text = document.createElement("span");
        divText.appendChild(text);
        divCard.appendChild(divText);
        while (noAtual != null) {            
                var h5 = document.createElement("h4");
                h5.innerHTML = noAtual.valor;
                divCard.appendChild(h5);
                divHouses.appendChild(divCard);
            //console.log(noAtual.valor);

            noAtual = noAtual.proximo;
        }
       
    }
    return {
        addInicio,
        addFim,
        remove,
        ler
    }
}

const lista = listaSimplesmenteEncadeada()

/*lista.addInicio(1)
lista.addInicio(2)
lista.addInicio(3)
lista.addInicio(4)

lista.addFim(50)
lista.addFim(60)

lista.ler()

lista.remove(50)
*/
//lista.ler()
$("#send").addEventListener("click", e => { // CLICANDO EM INSERIR ITEM
    var opcao = document.getElementById("name").value

    if (!opcao) {
        alert("ENTRE COM UM DADO..")
    }
    if (opcao) {  // NÃO PERMITI ENTRADA DE DADOS VAZIA     
       lista.addInicio(opcao)
        document.getElementById("name").value = ''
    }
    //cont = cont + 1
    document.getElementById("esconder").innerHTML = "";
    lista.ler()
})
$("#sendFim").addEventListener("click", e => { // CLICANDO EM INSERIR ITEM
    var opcao = document.getElementById("name").value

    if (!opcao) {
        alert("ENTRE COM UM DADO..")
    }
    if (opcao) {  // NÃO PERMITI ENTRADA DE DADOS VAZIA     
       lista.addFim(opcao)
        document.getElementById("name").value = ''
    }
    //cont = cont + 1
    document.getElementById("esconder").innerHTML = "";
    lista.ler()
})

$("#remover").onclick = function () { // CLICANDO EM REMOVER ITEM DA PILHA
    var inputRemover = document.getElementById("name").value
    if (inputRemover) {
        lista.remove(inputRemover)  
        document.getElementById("name").value = ''  
        document.getElementById("esconder").innerHTML = "";
    }if (!inputRemover){
        alert("ENTRE COM UM DADO..")
        document.getElementById("esconder").innerHTML = "";
    }
   
    lista.ler()
};