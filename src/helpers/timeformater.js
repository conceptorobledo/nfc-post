//Pasa unix timestamp que otorga JS a disintos tipos de formatos de fecha/hora

const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
    'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export function theTime(timestamp) {
    const toDate = new Date(timestamp);
    //Si el minuto tiene 1 digito, agregarle 0 en frente
    const hours = (toDate.getHours() < 10 ? '0' : '') + toDate.getHours();
    const minutes = (toDate.getMinutes() < 10 ? '0' : '') + toDate.getMinutes();
    const seconds = (toDate.getSeconds() < 10 ? '0' : '') + toDate.getSeconds();
    const time = hours + ':' + minutes
    return time;
};

//TODO
//Short date hace que carge lento
export function shortDate(timestamp) {
    const toDate = new Date(timestamp);
    const monthNumber = toDate.getMonth();
    const monthName = monthNames[monthNumber];
    const date = toDate.getDay() + ' de ' + monthName;
    return date;
}