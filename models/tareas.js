const Tarea = require('./tarea');
/**
 * _listado: { 'uuid-123412-123123213-1': { id: 12, desc: asd, completadoEn: 92312 } }
 */

class Tareas {

    _listado = {};


    constructor() {
        this._listado = {};
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}


module.exports = Tareas;