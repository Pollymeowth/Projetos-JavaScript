import entradaDados from 'readline-sync';


let salarioMinimo = [
    {salario: 510, ano: 2010},
    {salario: 545, ano: 2011},
    {salario: 622, ano: 2012},
    {salario: 678, ano: 2013},
    {salario: 724, ano: 2014},
    {salario: 788, ano: 2015},
    {salario: 880, ano: 2016},
    {salario: 937, ano: 2017},
    {salario: 954, ano: 2018},
    {salario: 998, ano: 2019},
    {salario: 1045, ano: 2020}
]

let ipca = [
    {inflacao: 5.91, ano: 2010},
    {inflacao: 6.50, ano: 2011},
    {inflacao: 5.84, ano: 2012},
    {inflacao: 5.91, ano: 2013},
    {inflacao: 6.41, ano: 2014},
    {inflacao: 10.67, ano: 2015},
    {inflacao: 6.29, ano: 2016},
    {inflacao: 2.95, ano: 2017},
    {inflacao: 3.75, ano: 2018},
    {inflacao: 4.31, ano: 2019},
    {inflacao: 4.52, ano: 2020}
]

let continuar = true;

while(continuar){
    console.log("\nESCOLHA UMA DAS ALTERNATIVAS:");
    console.log("1 - Listar os salários mínimos de 2010 à 2020");
    console.log("2 - Listar o índice IPCA de 2010 a 2020");
    console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
    console.log("0 - Sair");

    let escolha = Number(entradaDados.question("Digite o numero da sua escolha: "));

    if (escolha == 1){
        console.log("\n--- SALÁRIOS MÍNIMOS ---");
        for (let i = 0; i <= salarioMinimo.length - 1; i++ ){
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            console.log('Ano: ...................', ano);
            console.log('Salário Mínimo: ........ R$', salario.toFixed(2).replace('.',","));
            console.log("\n") 
        }

    }
    else if (escolha == 2){
        console.log("\n--- ÍNDICE IPCA ---");
        for (let i = 0; i <= ipca.length - 1; i++ ){
            let ano = ipca[i].ano;
            let inflacao = ipca[i].inflacao;
            console.log('Ano: ...................', ano);
            console.log('Inflação IPCA: .........', inflacao.toFixed(2).replace('.',","),'%');
            console.log("\n") 
        }

    }
    else if (escolha ==3){
        console.log("\n--- COMPARAÇÃO SALÁRIO x IPCA ---");
        for (let i = 0; i <= ipca.length - 1 && i <= salarioMinimo.length -1; i++ ){
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            let inflacao = ipca[i].inflacao;   
            
            let crescimentoPercentual;

            if (i == 0){
                crescimentoPercentual = 0;
            }
            else{
                let salarioAnterior = salarioMinimo[i-1].salario;
                let diferenca = salario - salarioAnterior
                crescimentoPercentual = (diferenca/salarioAnterior) * 100;
            }

            console.log("Ano:".padEnd(45, '.'), ano)
            console.log("Salário Mínimo:".padEnd(45, '.'), "R$", salario.toFixed(2).replace('.',","))
            console.log("Crescimento Salarial:".padEnd(45, '.'), crescimentoPercentual.toFixed(2).replace('.',","),'%')
            console.log("Inflação IPCA:".padEnd(45, '.'), inflacao.toFixed(2).replace('.',","),'%')
            console.log("\n")  
        }
  
    }
    else if(escolha == 0){
        console.log("Encerrando o programa... 👋");
        continuar = false;
    }
    else{
        console.log("Opção inválida! Tente novamente.");
    }

}




