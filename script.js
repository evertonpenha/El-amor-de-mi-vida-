const inicio = new Date('2026-05-02T00:00:00');
const contador = document.getElementById('contador');

function actualizar() {
  const ahora = new Date();
  const diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  contador.innerHTML =
    dias + " días ❤️ " +
    horas + " horas ❤️ " +
    minutos + " minutos ❤️ " +
    segundos + " segundos ❤️";
}

actualizar();
setInterval(actualizar, 1000);
