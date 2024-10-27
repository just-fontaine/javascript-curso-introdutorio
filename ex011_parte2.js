

// idade entre 16 e 18 ou mais que 65 = voto facultativo
// idade maior ou igual a 18 = voto obrigatorio
// idade menor que 18 = não vota

var idade = 18

if(idade >= 16 && idade < 18 || idade > 65){
    console.log('Voto Facultativo!')
}
else if(idade >= 18){
    console.log('Voto Obrigatório!')
}
else{
    console.log('Não Vota!')
}

