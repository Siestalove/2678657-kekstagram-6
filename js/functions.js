function checkLength(str, strlength) {
  return str.length <= strlength;
}


function checkPolindrom(str) {
  str = str.toLowerCase().replaceAll(' ','');
  const strMass = str.split('');
  const reverseStr = strMass.toReversed();
  return strMass.join('') === reverseStr.join('');
}

function parsingString(str) {
  str = str.toString().toLowerCase().replaceAll(' ','');
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  const strMass = str.split('');
  let newStr = '';
  for(let i = 0; i<strMass.length; i++){
    if(numbers.includes(strMass[i])){
      newStr += str[i];
    }
  }
  return parseInt(newStr, 10);
}


function parsingStringNew(str) {
  str = str.toString();
  let newStr = '';
  for (const char of str) {
    if(!isNaN(parseInt(char, 10))) {
      newStr += char;
    }
  }
  return parseInt(newStr, 10);
}


checkLength('2222', 5);
checkPolindrom('Лёша на полке клопа нашёл ');
parsingString('0000fjdnfjndf2323');
parsingStringNew('fjndsfjsjdfnjnsfd342424');
