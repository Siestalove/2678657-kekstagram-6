function checkLength(str, strlength) {
    return str.length <= strlength
}


function checkPolindrom(str) {
    str = str.toLowerCase().replaceAll(' ','');
    let strMass = str.split('');
    let reverseStr = strMass.toReversed();
    return strMass.join('') === reverseStr.join('');
}

function parsingString(str) {
    str = str.toString().toLowerCase().replaceAll(' ','');
    let numbers = ['0','1','2','3','4','5','6','7','8','9']
    let strMass = str.split('');
    let newStr = '';
    for(let i = 0; i<strMass.length; i++){
        if(numbers.includes(strMass[i])){
                newStr += str[i];
        }
    }
    return parseInt(newStr);
}


function parsingStringNew(str) {
    str = str.toString();
    let newStr = '';
    for (const char of str) {
        if(!isNaN(parseInt(char))) {
            newStr += char;
        }
    }
    return parseInt(newStr);
}


console.log(parsingString(1));