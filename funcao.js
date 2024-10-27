

function par_impar(numero){
    if (numero % 2 == 0){
        return 'Par'
    }
    else{
        return 'Impar'
    }
}

let numero = 6
console.log(`O número ${numero} é ${par_impar(numero)}!`)
