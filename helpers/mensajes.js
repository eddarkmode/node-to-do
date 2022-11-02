require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('============================='.green);
        console.log('   Seleccione una opción'.green);
        console.log('============================\n'.green);
    
        console.log(`${ '1.'.green } Crear Tarea`);
        console.log(`${ '2.'.green } Listar Tareas`);
        console.log(`${ '3.'.green } Listar Tareas completadas`);
        console.log(`${ '4.'.green } Listar Tarea pendientes`);
        console.log(`${ '5.'.green } Completar Tarea(s)`);
        console.log(`${ '6.'.green } Borrar Tarea`);
        console.log(`${ '0.'.green } Salir \n`);
    
        //Creacion de interfaz
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        //Lectura
        readline.question('Seleccione una opción: ', ( opt ) => {
            readline.close();
            resolve(opt);
        })
    })
}

const pausa = ( ) => {
    return new Promise( resolve => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, ( opt ) => {
            console.log( { opt } );
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}