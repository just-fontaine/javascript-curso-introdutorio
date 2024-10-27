

function tabuada(){
    let num = document.getElementById('txtnumero')
    let tab = document.getElementById('seltab')
    if (num.value.length != 0){
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
    else{
        window.alert('Preencha o campo corretamente!')
    }
}
