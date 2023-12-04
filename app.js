const readlineSync = require('readline-sync');
const {generarNumero, verificar} = require('./adivinanza');
function obtener(){
    return readlineSync.question('Ingresa un número: ');
};
function adivinanza(){
const numeroSecreto = generarNumero();
let numeroAdivinado = 0;
console.log('¡Bienvenido a Adivina el número secreto!');
console.log('Intenta adivinar el número del 1 al 100.\n');
while (numeroAdivinado != numeroSecreto) {
    numeroAdivinado = obtener();
    verificar(numeroSecreto, numeroAdivinado);
}
};
adivinanza();