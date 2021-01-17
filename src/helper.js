
//Obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar según la marca
export function calcularMarca(marca){
    let incremento;

    switch(marca) {
        case 'mercedes':
            incremento = 1.8;
            break;
        case 'audi':
            incremento = 1.75;
            break;
        case 'bmw':
            incremento = 1.7;
            break;
        case 'alfa':
            incremento = 1.65;
            break;
        case 'vw':
            incremento = 1.6;
            break;
        case 'seat':
            incremento = 1.55;
            break;
        case 'toyota':
            incremento = 1.5;
            break;
        case 'nissan':
            incremento = 1.45;
            break;
        case 'ford':
            incremento = 1.4;
            break;       
        case 'opel':
            incremento = 1.35;
            break;
        case 'hyundai':
            incremento = 1.3;
            break;
        case 'peugeot':
            incremento = 1.25;
            break;
        case 'renault':
            incremento = 1.20;
            break;
        default:
            break;
    };

    return incremento;
};

//Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
};

//Muestra la primera letra en mayuscula
export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}