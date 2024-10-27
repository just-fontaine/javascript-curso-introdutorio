function verificar() {
    var data = new Date()
    var AnoAtual = data.getFullYear()
    var AnoNascimento = document.getElementById('txtano').value
    var res = document.getElementById('res')

    if (AnoNascimento.length == 0 || AnoNascimento > AnoAtual) {
        window.alert('VERIFIQUE AS INFORMAÇÕES E TENTE NOVAMENTE.')
        return; // Adicionando um return para sair da função
    }

    var fsex = document.getElementsByName('radsex')
    var idade = AnoAtual - Number(AnoNascimento)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'Masculino';
        if (idade < 10) {
            // HOMEM CRIANÇA
            img.setAttribute('src', 'homem_crianca.jpg')
        } else if (idade < 21) {
            // HOMEM JOVEM
            img.setAttribute('src', 'homem_jovem.jpg')
        } else if (idade < 50) {
            // HOMEM ADULTO
            img.setAttribute('src', 'homem_adulto.jpg')
        } else {
            // HOMEM VELHO
            img.setAttribute('src', 'homem_velho.jpg')
        }
    } else if (fsex[1].checked) {
        genero = 'Feminino';
        if (idade < 10) {
            // MULHER CRIANÇA
            img.setAttribute('src', 'mulher_crianca.jpg')
        } else if (idade < 21) {
            // MULHER JOVEM
            img.setAttribute('src', 'mulher_jovem.jpg')
        } else if (idade < 50) {
            // MULHER ADULTA
            img.setAttribute('src', 'mulher_adulta.jpg')
        } else {
            // MULHER VELHA
            img.setAttribute('src', 'mulher_velha.jpg')
        }
    }
    //res.style.textAlign = 'center'
    res.innerHTML = `Gênero: ${genero}, Idade: ${idade}`
    res.appendChild(img)
}
