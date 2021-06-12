const leapYears = function(year) {
    return (year % 100 === 0 && year % 400 === 0) ? true : (year % 4 === 0 && year %100 !== 0) ? true : false; 
};

module.exports = leapYears;
