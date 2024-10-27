

function fatorial(numero){
    let resultado = 1
    for (numero; numero >= 1; numero--){
        resultado *= numero
    }
    return resultado
}

console.log(fatorial(5))

// função recursiva

function fatorial_recursao(numero){
    if (numero == 1){
        return 1
    }
    else{
        return numero * fatorial_recursao(numero - 1)
    }
}

console.log(fatorial_recursao(5))
