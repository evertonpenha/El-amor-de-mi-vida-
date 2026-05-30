const inicio=new Date('2026-05-02T00:00:00');
function actualizar(){
 const ahora=new Date();
 const d=Math.floor((ahora-inicio)/86400000);
 document.getElementById('contador').textContent=d+' días juntos ❤️';
}
actualizar();
setInterval(actualizar,1000);
