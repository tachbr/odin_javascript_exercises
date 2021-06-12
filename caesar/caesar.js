const caesar = function(caesarString, offset) {

    return [...caesarString].map((char, index, arr) => 
        ((/[a-zA-Z]/).test(char)) ? arr[index] = String.fromCharCode(calcNewCharCode(arr[index].charCodeAt(), offset)) : arr[index]
    ).join('');


};

module.exports = caesar;


function calcNewCharCode(charCode, offset) {
    offset = offset % 26;
    if (charCode <= 90){
        if (charCode + offset > 90) return (charCode + offset) % 90 + 64 ;
        if (charCode + offset < 65) return 91 - (65 -(charCode + offset));
        return (charCode + offset);
    }

    if (charCode <= 122){
        if (charCode + offset > 122) return (charCode + offset) % 122 + 96;
        if (charCode + offset < 97) return 123 - (97 -(charCode + offset));
        return (charCode + offset);
    }

}