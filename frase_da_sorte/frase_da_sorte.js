frases = [
    { "dia": 1, "frase": "A vida trará coisas boas se você tiver paciência." },
    { "dia": 2, "frase": "Demonstre amor e alegria em todas as oportunidades." },
    { "dia": 3, "frase": "Não compense na ira o que lhe falta na razão." },
    { "dia": 4, "frase": "Defeitos e virtudes são apenas dois lados da mesma moeda." },
    { "dia": 5, "frase": "A maior de todas as torres começa no solo." },
    { "dia": 6, "frase": "Acredite em você mesmo e o universo conspirará a seu favor." },
    { "dia": 7, "frase": "Seja a mudança que você deseja ver no mundo." },
    { "dia": 8, "frase": "O sucesso não é acidental, é resultado de esforço e dedicação." },
    { "dia": 9, "frase": "Aprenda com o passado, viva o presente e sonhe com o futuro." },
    { "dia": 10, "frase": "Sua criatividade é ilimitada, explore novos horizontes." },
    { "dia": 11, "frase": "A jornada de mil quilômetros começa com um único passo." },
    { "dia": 12, "frase": "A sorte favorece a mente preparada." },
    { "dia": 13, "frase": "Seja corajoso, mesmo quando estiver com medo." },
    { "dia": 14, "frase": "A amizade é o maior tesouro da vida." },
    { "dia": 15, "frase": "A compaixão é a linguagem universal do coração." },
    { "dia": 16, "frase": "Sorria, a felicidade é contagiante." },
    { "dia": 17, "frase": "A cada desafio, surge uma oportunidade de crescimento." },
    { "dia": 18, "frase": "O sucesso é a soma de pequenos esforços repetidos dia após dia." },
    { "dia": 19, "frase": "A persistência é o caminho do êxito." },
    { "dia": 20, "frase": "A compaixão é a linguagem universal do coração." },
    { "dia": 21, "frase": "Seja grato pelo que tem, e mais virá até você." },
    { "dia": 22, "frase": "Suas escolhas moldam seu destino, escolha sabiamente." },
    { "dia": 23, "frase": "Cada novo dia é uma página em branco, escreva uma boa história." },
    { "dia": 24, "frase": "O amor é a força mais poderosa do universo." },
    { "dia": 25, "frase": "A melhor maneira de prever o futuro é criá-lo." },
    { "dia": 26, "frase": "Seja gentil com cada pessoa que você encontrar." },
    { "dia": 27, "frase": "A verdadeira beleza está na simplicidade." },
    { "dia": 28, "frase": "O conhecimento é poder, compartilhe-o com o mundo." },
    { "dia": 29, "frase": "A gratidão transforma o que temos em suficiente." },
    { "dia": 30, "frase": "A cada desafio, surge uma oportunidade de crescimento." },
    { "dia": 31, "frase": "O sucesso é a soma de pequenos esforços repetidos dia após dia." }
]

function mostrarFrase() {
    const diaAniversario = Number(document.getElementById('diaAniversario').value);
    const resultado = document.getElementById('resultado');
    let fraseSorteada = null

    for (f = 0; f < frases.length; f++) {
        if (frases[f].dia === diaAniversario) {
            fraseSorteada = frases[f].frase;
            break
        }
    }
    if (fraseSorteada) {
        resultado.innerHTML = `<p>Frase da sorte: ${fraseSorteada}</p>`
    }
    else {
        resultado.innerHTML = "<p>Dia inválido! Digite um número entre 1 e 31. </p>"
    }

}
