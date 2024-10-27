
let res = document.getElementById('res')
let select = document.getElementById('selecttxt')
let valores = []

function adicionar(){
    caixa_numero = document.getElementById('numerotxt')
    valor_numero = Number(caixa_numero.value)
    let encontrado = false
    
    
    // verifica se a caixa do numero ta vazia
    if(valor_numero === 0){
        window.alert('Escreva um número para adicionar.')
        return
    }
    
    else{
        if(valor_numero > 100){
        window.alert('O número é muito grande.')
        return
        }
        else{
            if(valor_numero < 1){
                window.alert('O número é muito pequeno.')
                return
            }
        }
    }
    
    // verifica se o numero ja ta na lista
    if(valores.indexOf(valor_numero) != -1){
        encontrado = true
    }
    // se sim, ele fala que ja ta la
    if (encontrado){
        window.alert('O número ja se encontra na lista.')
    }
    // se não ele verifica se a caixa ta vazia primeiro
    else{
        // se tudo tiver certo ele adiciona o numero
        res.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${valor_numero} adicionado!`
        select.appendChild(item)
        valores.push(valor_numero)
        caixa_numero.value = ''
        caixa_numero.focus()
    
    }
}


function finalizar(){
    let menor = 200
    let maior = -200
    let soma = 0
    let total = valores.length
    
    if(valores.length === 0){
        window.alert('Impossível finalizar.')
    }
    else{
        for (let c = 0; c < valores.length; c++){
            if (valores[c] > maior){
                maior = valores[c]
            }
        }
        
        for (let pos in valores){
            soma += valores[pos]
        }
        
        for (let c = 0; c < valores.length; c++){
            if (valores[c] < menor){
                menor = valores[c]
            }
        }

        let media = soma / total
        
        res.innerHTML = ''
        if (total > 1){
            res.innerHTML += `<p>Ao todos temos ${total} números.<p>`
        }
        else{
            res.innerHTML += `<p>Ao todos temos ${total} número.<p>`
            }
            
        res.innerHTML += `<p>O maior valor é: ${maior}<p>`
        res.innerHTML += `<p>O menor valor é: ${menor}<p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}<p>`
        res.innerHTML += `<p>A média entre os valores é: ${media}<p>`
    }
}
