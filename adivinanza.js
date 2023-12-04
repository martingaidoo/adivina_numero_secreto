/*
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };
    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
    };
    module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    };
    */

function generarNumero(){
    return Math.floor(Math.random() * 100) + 1;
}
function verificar(secreto, adivinado){
    if (secreto == adivinado){
        console.log("felicidades, adivinaste");
    }else if (secreto > adivinado){
        console.log("el numero secreto es mayor");
    }else{
        console.log("el numero secreto es menor")
    }
}

module.exports = {generarNumero,verificar};