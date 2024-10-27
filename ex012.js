
// bom dia = das 6 as 12
// boa tarde = das 13 as 18
// boa noite = das 19 as 00
// boa madrugada = das 00 as 5 


var agora = new Date()         // da pra pegar data, horas, minutos, segundos etc
var horario = agora.getHours() // pega a hora atual do computador


if (horario >= 0 && horario <= 5){
    console.log(`Agora são ${horario} horas, boa madrugada!`)
}
if (horario >= 6 && horario <= 12){
    console.log(`Agora são ${horario} horas, bom dia!`)
}
if (horario >= 13 && horario <= 18){
    console.log(`Agora são ${horario} horas, boa tarde!`)
}
if (horario >= 19 && horario <= 23){
    console.log(`Agora são ${horario} horas, boa noite!`)
}
