
// 0 a 3 == reprovado
// 4 a 6 == recuperação
// 7 a 10 == aprovado


var nota = Number(4)

if (nota >= 7){
    var situacao = 'Aprovado'
}
else{
    if(nota >= 4 && nota <= 6){
       var situacao = 'de Recuperação'
    }
    else{
        var situacao = 'Reprovado'
    }
}

console.log(`Nota ${nota} está ${situacao}!`)
