const findTheOldest = function(people) {
    return people.reduce((a, b) => (calcAge(a) > calcAge(b)) ? a : b);
};

module.exports = findTheOldest;

function calcAge(a) {
    if (!a.yearOfDeath) a.yearOfDeath = 2021;
    return a.yearOfDeath - a.yearOfBirth;
}