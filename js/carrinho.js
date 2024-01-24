function atualizarSubtotal(input) {
    const quantidade = input.value;
    const precoUnitarioText = input.parentNode.nextElementSibling.textContent;
    const precoUnitario = extrairNumero(precoUnitarioText);
    const subtotal = quantidade * precoUnitario;
    input.parentNode.nextElementSibling.nextElementSibling.textContent = `R$ ${formatarNumero(subtotal)}`;
    calcularTotal();
}

function extrairNumero(texto) {
    return parseFloat(texto.replace('R$', '').replace(',', '.').trim());
}

function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2,maximumFractionDigits:2 });
}

function calcularTotal() { 
    let total = 0; 
    const subtotais = document.getElementsByClassName('subtotal'); 
    for (let i = 0; i < subtotais.length; i++) { 
        const subtotalText = subtotais[i].textContent; 
        const subtotal = extrairNumero(subtotalText); 
        total += subtotal; 
    } 
    
    document.getElementById('total').textContent = `R$ ${formatarNumero(total)}`; 
}

function removerItem(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    calcularTotal();
}

function limparCarrinho() {
    const carrinho = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    while (carrinho.firstChild) {
        carrinho.removeChild(carrinho.firstChild);
    }
    calcularTotal(); // Recalcula o total após limpar o carrinho
}

function voltar() {
    window.history.back();
}

document.getElementById("searchInput").addEventListener("input", pesquisar);

function pesquisar() {
    const termoPesquisa = document.getElementById("searchInput").value.toLowerCase();
    const itens = document.getElementsByTagName("td");

    for (let i = 0; i < itens.length; i++) {
        const itemTexto = itens[i].textContent.toLowerCase();
        const row = itens[i].parentNode;  // Obtemos a linha (tr) associada ao item

        if (itemTexto.includes(termoPesquisa)) {
            // Mostra a linha se o item corresponde à pesquisa
            row.style.display = "";
        } else {
            // Esconde a linha se o item não corresponde à pesquisa
            row.style.display = "none";
        }
    }
}
