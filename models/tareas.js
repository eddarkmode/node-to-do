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
            
            //console.log(key)
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas = [] ){

        //this._listado[tarea.id] = tarea;
        tareas.forEach((tarea) => {

            this._listado[tarea.id] = tarea;
        });
    }
}


module.exports = Tareas;