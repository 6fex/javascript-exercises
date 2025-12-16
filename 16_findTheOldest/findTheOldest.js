const findTheOldest = function(array) {
    return array.reduce((obj, element) => {
        if (!("yearOfDeath" in obj)) obj.yearOfDeath = (new Date()).getFullYear();
        if (!("yearOfDeath" in element)) element.yearOfDeath = (new Date()).getFullYear();

        function lifespan(person) {
            return person.yearOfDeath - person.yearOfBirth;
        };

        return lifespan(obj) > lifespan(element) ? obj : element;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
