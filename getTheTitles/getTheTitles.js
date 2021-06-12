const getTheTitles = function(books) {
    return books.map((book, index, arr) => arr[index] = book.title)
};

module.exports = getTheTitles;
