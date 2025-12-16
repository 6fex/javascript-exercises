const palindromes = function (string) {
    const lowerCaseNoSpace = string.toLowerCase()
                                        .split(" ")
                                        .join("");
    const filteredPunctuation = lowerCaseNoSpace.split("")
                                                    .filter(character => /[a-z0-9]/.test(character))
                                                    .join("");
    const reversed = filteredPunctuation.split("")
                                            .reverse()
                                            .join("");
    
    return filteredPunctuation === reversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
