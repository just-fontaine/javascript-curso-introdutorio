
function contar(){
    var txt_inicio = document.getElementById('iniciotxt')
    inicio_value = txt_inicio.value
    inicio = Number(txt_inicio.value)

    var txt_fim = document.getElementById('fimtxt')
    fim_value = txt_fim.value
    fim = Number(txt_fim.value)

    var txt_passo = document.getElementById('passotxt')
    passo_value = txt_passo.value
    passo = Number(txt_passo.value)

    var res = document.getElementById('res')
    var lista = []
    var mao_apontando = '\u{1F449}'
    var bandeira = '\u{1F3F4}'
    let caso1 = false
    let caso2 = false


    // VERIFICA SE OS INPUTS ESTÃO VAZIOS

    if(inicio_value === ''){
        res.innerHTML = 'Impossível contar! Adicione um valor ao início.'
        return
    }

    if(fim_value === ''){
        res.innerHTML = 'Impossível contar! Adicione um valor ao fim.'
        return
    }

    if(passo_value === ''){
        res.innerHTML = 'Impossível contar! Adicione um valor ao passo.'
        return
    }

    if(passo_value === '0'){
        window.alert('Não é possível contar com passo 0, considerando passo 1')
        passo = 1
    }

    if(passo < 0){
        alert(`Valor negativo detectado: ${passo} utilizando ${Math.abs(passo)}`)
        passo = Math.abs(passo)
    }

    if(passo > fim){
        res.innerHTML = 'Passo não pode ser maior que o fim!'
        return
    }


    // SE QUISER INVERTER OS VALORES

    /*
    if (inicio > fim) {
        let temp = inicio;
        inicio = fim;
        fim = temp;
    }
    */

    if (passo < 0){
        window.alert('Passo não pode ser menor que 0')
    }


    // CRIA UMA LISTA COM OS NUMEROS DE ACORDO COM OS PARAMETROS DO USUARIO

    if (inicio < fim){
        for(inicio; inicio <= fim; inicio++ ){

            lista.push(inicio)
            inicio += (passo - 1)
            caso1 = true
                    
        }
    }
    else{
        for(inicio; inicio >= fim; inicio++){

            lista.push(inicio)
            inicio -= (passo + 1)
            caso2 = true
                    
        }
    }

    // LIMPA A MENSAGEM INICIAL QUE TAVA ESCRITA
    res.innerHTML = ''

    // SE NAO FOR O ULTIMO VALOR ELE COLOCA UM EMOJI DE MÃO


    if (caso1){
        for (let c = 0; c < lista.length; c++){
            if (lista[c] < lista[lista.length-1]){
                res.innerHTML += `${lista[c]} ${mao_apontando}`
            }
            // SE FOR O ULTIMO VALOR DA LISTA ELE COLOCA UM EMOJI DE BANDEIRA
            else{
                res.innerHTML += `${lista[c]} ${bandeira}`
            }
        }
    }
    if (caso2){
        for (let c = 0; c < lista.length; c++){
            if (lista[c] > lista[lista.length-1]){
                res.innerHTML += `${lista[c]} ${mao_apontando}`
            }
            // SE FOR O ULTIMO VALOR DA LISTA ELE COLOCA UM EMOJI DE BANDEIRA
            else{
                res.innerHTML += `${lista[c]} ${bandeira}`
            }
        }
    }

}
