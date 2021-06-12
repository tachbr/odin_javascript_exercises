const palindromes = function (palString) {
    palString = palString.toLowerCase().replace(/\s|[?!"',.]/g, '');
    return (palString === [...palString].reverse().join(''));
};

module.exports = palindromes;
