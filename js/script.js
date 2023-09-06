let compras = [];
        
function agregarCompra() {
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    
    if (isNaN(valorCompra) || valorCompra <= 0) {
        alert("Por favor, ingresa un valor de compra válido.");
        return;
    }
    
    compras.push(valorCompra);
    
    const listaCompras = document.getElementById("listaCompras");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span class="compra-text">Compra:</span> <span class="monto-compra">$${valorCompra.toFixed(2)}</span> <button class="borrar-button" onclick="borrarCompra(${valorCompra.toFixed(2)})"><i class="fa-solid fa-trash"></i></button>`;
    listaCompras.appendChild(listItem);
    document.getElementById("valorCompra").value = "";
}

function borrarCompra(valor) {
    const index = compras.indexOf(valor);
    if (index !== -1) {
        compras.splice(index, 1);
        const listaCompras = document.getElementById("listaCompras");
        listaCompras.removeChild(listaCompras.children[index]);
    }
}

function calcularReintegroTotal() {
    const totalComprasLista = compras.reduce((acc, compra) => acc + compra, 0);
    const totalComprasIndividuales = parseFloat(document.getElementById("valorCompra").value) || 0;
    
    const totalCompras = totalComprasLista + totalComprasIndividuales;
    const reintegroTotal = Math.min(totalCompras * 0.3, 8000);
    
    document.getElementById("totalCompras").textContent = totalCompras.toFixed(2);
    document.getElementById("reintegroAcumulado").textContent = reintegroTotal.toFixed(2);
    
    if (reintegroTotal >= 8000) {
        document.getElementById("alerta").style.display = "block";
    } else {
        document.getElementById("alerta").style.display = "none";
    }
}