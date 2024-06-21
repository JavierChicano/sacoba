const cron = require('node-cron');
const sqlite3 = require('sqlite3').verbose();

// Abre una conexión a la base de datos
const db = new sqlite3.Database('path/to/your/database.sqlite');

// Función para eliminar carritos viejos
function eliminarCarritosViejos() {
  const fechaLimite = new Date();
  fechaLimite.setDate(fechaLimite.getDate() - 7);
  const fechaLimiteISO = fechaLimite.toISOString();

  db.run(`DELETE FROM carritoLocal WHERE fecha < ?`, [fechaLimiteISO], function(err: any) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Carritos viejos eliminados:`);
  });
}

// Configura un cron job para ejecutar la función cada día a medianoche
cron.schedule('0 0 * * *', () => {
  console.log('Ejecutando limpieza de carritos viejos');
  eliminarCarritosViejos();
});
