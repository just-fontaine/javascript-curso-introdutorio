
var agora = new Date()
var hoje = agora.getDay()


/*  
    getDay() retorna um numero
    
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/

// testa qual dia é hoje (0 = domingo, 1 = Segunda, etc)

switch(hoje){

    case 0:
        dia = 'Domingo'
        break
    
    case 1:
        dia = 'Segunda-Feira'
        break
    
    case 2:
        dia = 'Terça-Feira'
        break

    case 3:
        dia = 'Quarta-Feira'
        break
    
    case 4:
        dia = 'Quinta-Feira'
        break

    case 5:
        dia = 'Sexta-Feira'
        break
    
    case 6:
        dia = 'Sábado'
}

console.log(`Hoje é ${dia}.`)
