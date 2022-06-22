const { data } = require('./data.js');

const materias = [];
const docentes = [];
const notas_1 = [];
const notas_2 = [];
const notas_3 = [];
//cantidad_datos = data.length;


if(data.length > 0){
    const answer = {
        N_PEGE_DOCUMENTOIDENTIDAD : data[0].N_PEGE_DOCUMENTOIDENTIDAD,
        N_PENG_PRIMERAPELLIDO :data[0].N_PENG_PRIMERAPELLIDO,
        N_PENG_SEGUNDOAPELLIDO : data[0].N_PENG_SEGUNDOAPELLIDO,
        N_PENG_PRIMERNOMBRE : data[0].N_PENG_PRIMERNOMBRE,
        N_PENG_SEGUNDONOMBRE : data[0].N_PENG_SEGUNDONOMBRE,
        N_PROG_NOMBRE : data[0].N_PROG_NOMBRE,
        N_UNID_NOMBRE : data[0].N_UNID_NOMBRE,
        N_GRUP_NOMBRE : data[0].N_GRUP_NOMBRE,
        AUTOEVALUACION : 30,
        PARCIAL : 60,
        TAREAS : 10,
    }
}else {
    answer = [];
}

