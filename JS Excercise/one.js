// program that displays a string in reverse order.

const originalString = "CodeHelp";

function reverseString(str) {
 
    const reversedString = str.split("").reverse().join("");
 
    return reversedString;
}

console.log(reverseString(originalString));

// program that takes a string and prints out the number of vowels in the string.

function countVowels(str) {
    
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
   
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}
  
console.log(countVowels("CodeHelp"));
console.log(countVowels("hello"));

// function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.


function findCommonElements(arr1, arr2) {
    
    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
 
        if (arr2.includes(arr1[i])) {
            
            if (!commonElements.includes(arr1[i])) {
                commonElements.push(arr1[i]);
            }
        }
    }

    commonElements.sort((a, b) => a - b);

    return commonElements;
}
  
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements);