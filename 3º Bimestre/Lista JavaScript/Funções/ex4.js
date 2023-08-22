// Crie uma função mostrarHora() que escreva no console o horário atual do sistema no formato horas:minutos:segundos.

function mostrarHora() {
    const agora = new Date();
    console.log(agora.toLocaleTimeString()) ;
}
  mostrarHora();
  
