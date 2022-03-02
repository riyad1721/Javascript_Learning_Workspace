// Problem-1 "calculate a random number 1 to 6 for dice"
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(` The random number is : ` + getRndNumber(1, 6));

//problem-2 " given a list of your classmate name Alphabetically order "
const student = ["Dip", "Shuvo", "Rafsun", "Saif", "Ridwan", "Nasim"];

console.log(student.sort());

//problem-3 " sort your classmate number "

const roll_number = [3, 5, 1, 6, 2, 30];

console.log(roll_number.sort(function (a, b) {
    return a - b;
}));

//problem-4 " Check the year is leap year or not "

function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year!`);
    }
    else {
        console.log(`${year} is not a leap year!`);
    }
}

isLeapYear(2028);

//problem-5 " calculate the vowel number in one sentence  "

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function (value, index, array) {
        if (vowels.includes(value)) {
            count++;
        }
    });
    return count;

}

console.log(countVowels("I Love Bangladesh"));

//problem-6 " How to extract duplicate number  in one array"

const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
});
console.log(duplicates);