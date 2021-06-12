const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    return (num < 1) ? 0 : (num < 2) ? 1 : fibonacci(num - 1) + fibonacci(num - 2);

};

module.exports = fibonacci;
