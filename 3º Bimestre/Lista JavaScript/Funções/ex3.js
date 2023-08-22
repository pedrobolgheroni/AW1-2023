//Crie uma função hora() que retorne o horário atual do sistema no formato horas:minutos:segundos.
function hora() {
    const agora = new Date();
    return agora.toLocaleTimeString();
  }
  
  console.log(hora()); 
  