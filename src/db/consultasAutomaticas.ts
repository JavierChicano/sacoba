// import { deletePeriodicoCarritoLocal } from "./deletes";

// const cron = require('node-cron');

// // Función para eliminar carritos viejos
//  async function eliminarCarritoLocalAntiguo() {
//   const fechaLimite = new Date();
//   fechaLimite.setDate(fechaLimite.getDate() - 7);
//   const fecha = fechaLimite.toISOString();

//   await deletePeriodicoCarritoLocal({fecha})
// }

// // Configura un cron job para ejecutar la función cada día a medianoche
// cron.schedule('0 0 * * *', () => {
//   console.log('Ejecutando limpieza de carritos viejos');
//   eliminarCarritoLocalAntiguo();
// });

import { deletePeriodicoCarritoLocal } from "./deletes";
const cron = require('node-cron');

// Función para eliminar carritos viejos
async function eliminarCarritoLocalAntiguo() {
  const fechaLimite = new Date();
  fechaLimite.setMinutes(fechaLimite.getMinutes() - 15);
  const fecha = fechaLimite.toISOString();

  await deletePeriodicoCarritoLocal({ fecha });
}

// Configura un cron job para ejecutar la función cada 5 minutos
cron.schedule('*/5 * * * *', () => {
  console.log('Ejecutando limpieza de carritos viejos');
  eliminarCarritoLocalAntiguo();
});
