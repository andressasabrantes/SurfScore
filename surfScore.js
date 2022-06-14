/* A final do WSL foi disputada por Medina e Ferreira e o resultado da bateria foi a seguinte: Medina pegou 8 ondas com a seguinte 
pontuação: 8, 5, 3, 9, 1, 4, 4, 7. Já Ferreira que também pegou 8 ondas obteve a seguinte pontuação: 5, 3, 7, 2, 9, 2, 4, 10.
Crie uma função chamada winner que irá receber um objeto contendo os surfistas e suas respectivas notas e no final retornar um objeto 
contendo o vencedor, todos os scores e o average score.
Ex da final:
finalHeat({
     gabrielMedina: {name: "Medina", score: [8, 5, 3, 9, 1, 4, 4, 7]},
     italoFerreira: {name: "Ferreira", score: [5, 3, 7, 2, 9, 2, 4, 10]}
})
Output:
{winner: "Ferreira", score: "5, 3, 7, 2, 9, 2, 4, 10", avgScore: "9.5"} */

function findBestScore(score) {
    //loop for para encontrar as duas maiores notas do surfista
    let bestScore = 0 
    let secondBestScore = 0 //
    for(let i = 0; i < score.length; i++) {
        if(score[i] > bestScore) {
            secondBestScore = bestScore
            bestScore = score[i]
        } else if (score[i] > secondBestScore) {
            secondBestScore = score[i]
        }
    }
    return [bestScore, secondBestScore]
}

function finalHeat(finalHeatResult) {

    const bestScoresSurferOne = findBestScore(finalHeatResult.surferOne.score)
    const bestScoresSurferTwo = findBestScore(finalHeatResult.surferTwo.score)

//Variáveis para fazer o somatório das maiores notas dos surfistas
    let greastestSummOne = bestScoresSurferOne[0] + bestScoresSurferOne[1]
    let greastestSummTwo = bestScoresSurferTwo[0] + bestScoresSurferTwo[1]

    let winner = null
    if (greastestSummOne > greastestSummTwo) {
        winner = finalHeatResult.surferOne.name + ', ' + 'Best Waves Score: ' + bestScoresSurferOne + ' and ' + 'Average Score: ' + (greastestSummOne/2)
    } else {
        winner = finalHeatResult.surferTwo.name + ', ' + 'Best Waves Score: ' + bestScoresSurferTwo + ' and ' + 'Average Score: ' + (greastestSummTwo/2)
    }
    return {
        winner
    }
}

//testes
console.log(finalHeat({
    surferOne: {name: "Medina", score: [8, 5, 3, 9, 1, 4, 4, 7]},
    surferTwo: {name: "Ferreira", score: [5, 3, 7, 2, 9, 2, 4, 10]}
})) // output -> {Winner: 'Ferreira, Best Waves Score: 10,9 and Average Score: 9.5'}

console.log(finalHeat({
    surferOne: {name: "Chianca", score: [9.9, 9.5, 8, 9, 8.7, 8.2, 9, 10]},
    surferTwo: {name: "Medina", score: [9.1, 9.2, 8.7, 7.6, 7.1, 9.7, 9.8, 10]}
})) // output -> {Winner: 'Chianca, Best Waves Score: 10,9.9 and Average Score: 9.95'}