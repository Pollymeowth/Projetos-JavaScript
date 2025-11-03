const salarios = [
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
];

const ipca = [
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
];

const resultado = document.getElementById("resultado");
const btnSalarios = document.getElementById("btnSalarios");
const btnIpca = document.getElementById("btnIpca");
const btnComparar = document.getElementById("btnComparar");
const btnLimpar = document.getElementById("btnLimpar");

btnSalarios.addEventListener("click", () => {
  resultado.innerText = "--- SALÁRIOS MÍNIMOS ---\n";
  salarios.forEach(s => {
    resultado.innerText += `Ano: ${s.ano}\nSalário Mínimo: R$ ${s.salario.toFixed(2).replace('.', ',')}\n\n`;
  });
});

btnIpca.addEventListener("click", () => {
  resultado.innerText = "--- ÍNDICE IPCA ---\n";
  ipca.forEach(i => {
    resultado.innerText += `Ano: ${i.ano}\nInflação IPCA: ${i.inflacao.toFixed(2).replace('.', ',')}%\n\n`;
  });
});

btnComparar.addEventListener("click", () => {
  resultado.innerText = "--- COMPARAÇÃO SALÁRIO x IPCA ---\n";
  for (let i = 0; i < salarios.length; i++) {
    const { ano, salario } = salarios[i];
    const inflacao = ipca[i].inflacao;
    let crescimento = 0;
    if (i > 0) {
      const anterior = salarios[i-1].salario;
      crescimento = ((salario - anterior) / anterior) * 100;
    }
    resultado.innerText += `Ano: ${ano}\nSalário: R$ ${salario.toFixed(2).replace('.', ',')}\nCrescimento: ${crescimento.toFixed(2).replace('.', ',')}%\nIPCA: ${inflacao.toFixed(2).replace('.', ',')}%\n\n`;
  }
});

btnLimpar.addEventListener("click", () => {
  resultado.innerText = "";
});
