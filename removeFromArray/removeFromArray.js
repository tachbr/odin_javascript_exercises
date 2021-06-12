const removeFromArray = function(testArray, ...args) {
    args.forEach((arg) => {if (testArray.includes(arg)) testArray.splice(testArray.indexOf(arg), 1)});
    return testArray;
};

module.exports = removeFromArray;
