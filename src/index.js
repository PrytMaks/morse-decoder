const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  for(let i = 0; i < expr.length; i += 10){
    let strI = '';
    strI = expr.slice(i, i + 10);
    arr.push(strI);
    strI = ''
  }
  let morzeArr = [];
  arr.forEach( e => {
    let morzeStr = '';
    for(let i = 0; i < e.length;){
      for(let j = 1; j < e.length; j += 2){
        if(e[i] == 1 && e[j] == 0){
          morzeStr += '.'
          i = j + 1;
        } else if(e[i] == 1 && e[j] == 1) {
          morzeStr += '-';
          i = j + 1;
        };
        i = j + 1;
      }
    }
    morzeArr.push(morzeStr);
    morzeStr = '';
  })
  let res = '';
  for(let i = 0; i < morzeArr.length; i++){
    if(MORSE_TABLE[morzeArr[i]] == undefined) {
      res += ' '
    } else  res += MORSE_TABLE[morzeArr[i]];
  }
  return res;
}

module.exports = {
    decode
}