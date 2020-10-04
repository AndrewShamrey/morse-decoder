// const MORSE_TABLE = {
    // '.-':     'a',
    // '-...':   'b',
    // '-.-.':   'c',
    // '-..':    'd',
    // '.':      'e',
    // '..-.':   'f',
    // '--.':    'g',
    // '....':   'h',
    // '..':     'i',
    // '.---':   'j',
    // '-.-':    'k',
    // '.-..':   'l',
    // '--':     'm',
    // '-.':     'n',
    // '---':    'o',
    // '.--.':   'p',
    // '--.-':   'q',
    // '.-.':    'r',
    // '...':    's',
    // '-':      't',
    // '..-':    'u',
    // '...-':   'v',
    // '.--':    'w',
    // '-..-':   'x',
    // '-.--':   'y',
    // '--..':   'z',
    // '.----':  '1',
    // '..---':  '2',
    // '...--':  '3',
    // '....-':  '4',
    // '.....':  '5',
    // '-....':  '6',
    // '--...':  '7',
    // '---..':  '8',
    // '----.':  '9',
    // '-----':  '0',
// };

function decode(expr) {
    let morseStr = expr;
    let numOfSymbols = morseStr.length / 10; 
    let curLet = '';
    let resultStr = '';
    let curMorseSym = '';
    let decodeStr = '';
    
    for (let i = 0; i < numOfSymbols; i += 1) {

        for (let j = 0; j < 5; j += 1) {
            curLet = morseStr[0] + morseStr[1];

            if (curLet === '**') {
                curMorseSym = '**';
            } 
            if (curLet === '00') {
                curMorseSym = '';
            } 
            if (curLet === '10') {
                curMorseSym = '.';
            } 
            if (curLet === '11') {
                curMorseSym = '-';
            } 

            decodeStr += curMorseSym;
            morseStr = morseStr.slice(2);
        }

        resultStr += morse(decodeStr);
        decodeStr = '';
    }


    function morse(letter) {
        switch(letter) {
            case '**********':    return  ' ';
            case '.-':    return  'a';
            case '-...':  return  'b';
            case '-.-.':  return  'c';
            case '-..':   return  'd';
            case '.':     return  'e';
            case '..-.':  return  'f';
            case '--.':   return  'g';
            case '....':  return  'h';
            case '..':    return  'i';
            case '.---':  return  'j';
            case '-.-':   return  'k';
            case '.-..':  return  'l';
            case '--':    return  'm';
            case '-.':    return  'n';
            case '---':   return  'o';
            case '.--.':  return  'p';
            case '--.-':  return  'q';
            case '.-.':   return  'r';
            case '...':   return  's';
            case '-':     return  't';
            case '..-':   return  'u';
            case '...-':  return  'v';
            case '.--':   return  'w';
            case '-..-':  return  'x';
            case '-.--':  return  'y';
            case '--..':  return  'z';
            case '.----': return  '1';
            case '..---': return  '2';
            case '...--': return  '3';
            case '....-': return  '4';
            case '.....': return  '5';
            case '-....': return  '6';
            case '--...': return  '7';
            case '---..': return  '8';
            case '----.': return  '9';
            case '-----': return  '0';
        }
    }

    return resultStr;

}

module.exports = {
    decode
}