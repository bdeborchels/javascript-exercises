const palindromes = function (string) {

    //pasamos todo a minusculas y quitamos caracteres no deseados (espacios, comas, puntos..)
    //dividimos el string, le damos la vuelta y lo volvemos a juntar
    //comparamos si son iguales

    var re = /[\W_]/g;
    var lowRegStr = string.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 

    return reverseStr == lowRegStr;

};
palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
