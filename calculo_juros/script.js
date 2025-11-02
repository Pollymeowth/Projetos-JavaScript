const { validateHeaderName } = require("http");

function calcularJuros(){
    const valorInicial = Number(document.getElementById('valorInicial').value);
    const diasAtraso = Number(document.getElementById('diasAtraso').value);
    const resultadoDiv = document.getElementById('resultado');


    if (valorInicial <= 0){
        resultadoDiv.innerHTML = "O valor da dívida deve ser maior que zero!";
        return;
    }

    let taxaJuros = 0;

    if(diasAtraso > 15){
        taxaJuros = valorInicial * 0.10;
    }else if (diasAtraso > 0){
        taxaJuros = valorInicial * 0.05;
    }else{
        resultadoDiv.innerHTML = "Você está em dia com o pagamento!"
        return
    }

    const valorFinal = valorInicial + taxaJuros;

    resultadoDiv.innerHTML = `
        <p>Valor original da dívida: R$ ${valorInicial.toFixed(2)}</p>
        <p>Dias de atraso: ${diasAtraso}</p>
        <p>Taxa de juros: R$ ${taxaJuros.toFixed(2)}</p>
        <p><strong>Valor total com juros: R$ ${valorFinal.toFixed(2)}</strong></p>
    `;
}  