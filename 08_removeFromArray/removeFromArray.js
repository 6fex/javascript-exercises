const removeFromArray = function(array, ...remove) {
    const copyToFilter = array.slice();
    remove.forEach(toRemove => {
        while (copyToFilter.includes(toRemove)) {
            let index = copyToFilter.findIndex(item => item === toRemove);
            copyToFilter.splice(index, 1);
        }
    });
    return copyToFilter;
};

// Do not edit below this line
module.exports = removeFromArray;
