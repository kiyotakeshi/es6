function getMessage() {
    
    // const year = new Date().getFullYear();

    // return "This year is" + year;
    // `${この中には js なら何を入れてもいい}`
    // return `This year is ${year}`
    return `This year is ${new Date().getFullYear()}`;

}

getMessage();

// ---------------------
function doubleMessage(number) {
    // return number + "を2倍すると" + (2 * number) + "になります";
    return `${number}を2倍すると${number * 2}になります`;
}

doubleMessage(10)

function fullName(firstName, lastName) {
    // return firstName + ' ' + lastName;
    return `${firstName} ${lastName}`;
}
