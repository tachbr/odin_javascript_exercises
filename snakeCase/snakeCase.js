const snakeCase = function(testString) {
    if (testString.match(/[A-Z][a-z]/g) != null && testString.match(/[A-Z][a-z]/g).length > 1) testString = testString.toLowerCase();
    return testString.replace(/\s|-|[.]{2}\b/g, '_').replace(/[!?'".,]/g, '').replace(/(?<=[a-z])[A-Z](?=[a-z])/, '_$&').toLowerCase();
};

module.exports = snakeCase;

