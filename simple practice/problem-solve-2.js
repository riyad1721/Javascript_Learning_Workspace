const sentence = "Dear vai, thanks for your sincerity and integrity. You are already blessed with the initial mindset every programmer should own. Now you just need to practice practice and practice. Find similar problems from google and try to solve them yourself. Try to solve them in different ways. The more you do that, the more you will be confident. Programming is all about practicing and collecting different use cases. The more you solve use cases, the more benefit you will get. Best wishes vai.";

const matches = sentence.match(/sumit/gi);
console.log(matches);

const occurances = matches ? matches.length : 0;

console.log(occurances);

let position = sentence.search(/sumit/i);

position = position >= 0 ? position : "not found!";

console.log(position);

//Problem-2 -- linearSearch function implement
//input : linearSearch(['a','b','c','d','c'],'c')
//output: 2 or "Not found"

function linearSearch(arr, val) {
    const lengthA = arr.length;
    for (let i = 0; i < lengthA; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return 'not found';
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));

//problem - 3 -- find the biggest string in array and show the index number

function longestString(names) {
    let longestWord = '';
    for (name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;

        }
    }
    return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(["Sumit Saha", "Learn with Sumit", "akash", "Saad", "Daiyan"]));