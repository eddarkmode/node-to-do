const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
require('colors');

const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const TareasDB = leerDB();

    if( TareasDB ){
        //Establecer tareas
        tareas.cargarTareasFromArray( TareasDB );
    }

    await pausa();

    do {
        
      opt = await inquirerMenu();
      //console.log( { opt } );

      switch ( opt ){
        case '1':
            const desc = await leerInput( 'Descripcion: ' );
            tareas.crearTarea( desc );
            //console.log(desc);
            break;
        case '2':  //Listar tareas
            //console.log( tareas.listadoArr );
            tareas.listadoCompleto()
            break;
        case '3': //Listar tareas completadas
            tareas.listarPendientesCompletadas(true);
            break;
        case '4': //Listar tareas pendientes
            tareas.listarPendientesCompletadas(false);
            break;
      }

      guardarDB( tareas.listadoArr );
      await pausa();

    } while ( opt !== '0' );
}


main();