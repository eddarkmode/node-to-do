const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
require('colors');

const main = async() => {

    console.log( 'Hola mundo' );
    
    let opt = '';
    const tareas = new Tareas();

    do {
        
      opt = await inquirerMenu();
      console.log( { opt } );

      switch ( opt ){
        case '1':
            const desc = await leerInput( 'Descripcion: ' );

            console.log(desc);
            break;
        case '2':
            break;
      }

      await pausa();

    } while ( opt !== '0' );
}


main();