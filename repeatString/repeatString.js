// const repeatString = function() {

// }

// module.exports = repeatString

function capitalize(string) {
    str = string.toLowerCase();
    first = str[0].toUpperCase();
    capitalized = first + str.slice(1);
    console.log(capitalized);
}

capitalize('bOrAT'); //returns: Borat

function lastLetter(streeng) {
    last = streeng.slice(-1);
    console.log(last);
}

lastLetter("Westwood"); //returns: 'd'
lastLetter("abcd"); //returns: 'd'


