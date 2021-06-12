const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    
    return (Math.max(end, start) - Math.min(end, start) + 1) * (end + start)/2;
};

module.exports = sumAll;
