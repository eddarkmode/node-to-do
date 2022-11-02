const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = ( data ) => {

    fs.writeFileSync( archivo, JSON.stringify(data));
}

const leerDB = ( data ) => {

    if( !fs.existsSync(archivo) ) {
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf8' });
    //console.log(JSON.parse(info));

    return JSON.parse(info);
}


module.exports = {
    guardarDB,
    leerDB
}