import entradaDados from 'readline-sync';

console.log("--APLICAÇÃO DE JUROS--")

let valorInicial = Number(entradaDados.question("Informe o valor devido: R$ "));
let diasAtraso = Number(entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: "));

let taxaJuros = 0;

if(valorInicial > 0){
    if (diasAtraso > 15){
        taxaJuros = (valorInicial * 10 /100)
    }
    else if(diasAtraso > 0){
        taxaJuros = (valorInicial * 5 / 100)
    }
    else{
        console.log("Você está em dia com o pagamento!")
    }

    let valorFinal = valorInicial + taxaJuros

    console.log("-------------------------------------------");
    console.log(`Valor original da dívida: R$ ${valorInicial}`);
    console.log(`Dias de Atraso: ${diasAtraso}`);
    console.log(`Taxa de Juros: R$ ${taxaJuros}`);
    console.log(`Valor total com juros: R$ ${valorFinal}`);
}
else{
    console.log("O valor da dívida deve ser maior que zero!")
}




