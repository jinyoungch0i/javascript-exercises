const reverseString = function(txt) {

        for (let i = 0; i < txt.length; i++) {

            splitText = txt.split(""); //first split the txt into array of indiv. chars
            reversedArray = splitText.reverse(); //then reverse the order of chars in the array
            reversedString = reversedArray.join("");
            //put the reversed chars of the array into a string,
            //with the default separator (which would otherwise be a comma) as ""
            //thereby eliminating the separator in the join

            return reversedString;
        }

}

module.exports = reverseString


