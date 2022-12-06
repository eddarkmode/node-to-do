const Tarea = require('./tarea');
/**
 * _listado: { 'uuid-123412-123123213-1': { id: 12, desc: asd, completadoEn: 92312 } }
 */

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(  id = '' ) {

        if( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        // completada: verde, pendiente: rojo
        this.listadoArr.forEach( (tarea, i) => {
           const idx = `${ i + 1 }`.green;
           const { desc, completadoEn } = tarea;
           const estado = ( completadoEn ) 
                                ? 'Completada'.green 
                                : 'Pendiente'.red;                                  

            console.log( `${ idx + '. ' + desc + ' :: ' + estado }`);
        })
    }

    listarPendientesCompletadas ( completadas = true ) {

        let contador = 0;
        this.listadoArr.forEach( (tarea, i) => {
            
            const idx = `${ i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                               ? 'Completada'.green
                               : 'Pendiente'.red;

            if( completadas ){ //Si se selecciono la opcion completadas
                if( completadoEn ){
                    
                    contador +=  1;
                    console.log( `${ (contador  + '.').green + desc + ' :: ' + estado }` );
                }
            }
            else{
                if(! completadoEn ){
                    
                    contador+=1;
                    console.log( `${ (contador  + '.').green + desc + ' :: ' + estado }` );
                }
            }
        });
    }

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;
        });
    }

    toggleCompletadas ( ids = [] ) {

        ids.forEach((id) => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id) ){

                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}


module.exports = Tareas;