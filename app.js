const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return Math.floor(valueInDollar * 100) / 100;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return Math.floor(valueInYen * 100) / 100;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 159.87;
    // retornamos el valor
    return Math.floor(valueInPound * 100) / 100;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};