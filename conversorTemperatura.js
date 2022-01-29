import entradaDados from 'readline-sync';

console.log("Conversor de CELSIUS para KEVIN");

let c = entradaDados.question("Informe a temperatuda em Celsius: ");

let kelvin = Number(c) + 273.15;

console.log("A temperatura informada em CELSIUS " + c + " em kelvin é: " + kelvin);
