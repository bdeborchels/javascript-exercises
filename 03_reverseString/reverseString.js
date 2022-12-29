const reverseString = function(string) {
    //Primero lo dividimos cada palabra en un array
    //Damos la vuelta al array
    //Finalmente volvemos a juntar las letras de las palabras

    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
