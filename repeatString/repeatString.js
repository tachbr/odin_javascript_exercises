const repeatString = function(repeat, times) {
    if (times < 0) return 'ERROR';
    return new Array(times).fill(repeat).join('');
};

module.exports = repeatString;
