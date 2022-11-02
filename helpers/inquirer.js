const inquirer = require('inquirer');

require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '?Que desea hacer?',
    choices: [ 
        {value: '1', name: '1. Crear lista'}, 
        {value: '2', name: '2. Listar tareas' }, 
        {value: '3', name: '3. Listar tareas completadas'},
        {value: '4', name: '4. Listar tareas pendientes'},
        {value: '5', name: '5. Completar tarea(s)'},
        {value: '6', name: '6. Borrar Tarea'},
        {value: '0', name: '0. Salir'},

    ]
}];

const inquirerMenu = async() => {
 
    console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('============================\n'.green);

    
    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const preg = [{
    type: 'input',
    name: 'opcion',
    message: `PRESIONE ${ 'ENTER'.green } PARA SALIR`
}];

pausa = async() => {
    
    console.log('\n');

    const { opcion} = await inquirer.prompt(preg);

    return opcion;
}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ){
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt( question );
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}