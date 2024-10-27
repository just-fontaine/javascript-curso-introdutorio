
// usando if else ao inves de switch case

var agora = new Date();
var hoje = agora.getDay();
var dia;

if (hoje === 0) {
    dia = 'Domingo';

} else if (hoje === 1) {
    dia = 'Segunda-Feira';

} else if (hoje === 2) {
    dia = 'Terça-Feira';

} else if (hoje === 3) {
    dia = 'Quarta-Feira';

} else if (hoje === 4) {
    dia = 'Quinta-Feira';

} else if (hoje === 5) {
    dia = 'Sexta-Feira';

} else if (hoje === 6) {
    dia = 'Sábado';
}

console.log(`Hoje é ${dia}.`);
