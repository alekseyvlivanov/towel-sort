// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.map((e, i) => (i % 2 === 0 ? e : e.reverse())).flat();
};
