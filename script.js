const inicio = new Date(‘2026-05-02T00:00:00’);

function actualizar() {

const ahora = new Date();

const diferencia = ahora - inicio;

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

document.getElementById('contador').innerHTML =
dias + " días ❤️<br>" +
horas + " horas ❤️<br>" +
minutos + " minutos ❤️<br>" +
segundos + " segundos ❤️";
}

actualizar();

setInterval(actualizar,1000);
