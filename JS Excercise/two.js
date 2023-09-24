// function that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str) {
    
    const counts = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
    
        if (counts[char]) {
    
            counts[char]++;
        } 
        else {
        
            counts[char] = 1;
        }
    }

        return counts;
  }

const letterCounts = countLetters("WebDevelopment");

console.log(letterCounts);

// function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter() {
    let count = 0;
  
    return function () {
        count++;
        return count; 
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter()); 
console.log(counter()); 

// function that takes an object and returns an array of all the keys in the object.

function getKeys(obj) {
    
    const keys = Object.keys(obj);
  
    return keys;
}
  
const person = {
name: "John",
age: 30,
gender: "male",
city: "New York",
};

console.log(getKeys(person));
console.log(getKeys({}));

// function that takes an array of objects and returns an array of all the values of a specified property name.

function getPropertyValues(arr, propName) {
    
    const values = arr.map((obj) => obj[propName]);
  
    return values;
}

const people = [
{ name: "Pranay", age: 20, gender: "male" },
{ name: "Nidhi", age: 21, gender: "female" },
{ name: "Soumya", age: 21, gender: "male" },
];
  
console.log(getPropertyValues(people, "name")); 
console.log(getPropertyValues(people, "age")); 
console.log(getPropertyValues(people, "gender"));
console.log(getPropertyValues(people, "address"));

// function that takes an array of objects and returns the object with the highest value for a specified property name.

function findMaxByProperty(arr, prop) {
    
    if (arr.length === 0) {
        return null;
    }

    let maxObj = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i][prop] > maxObj[prop]) {
            maxObj = arr[i];
        }
    }

    return maxObj;
}

const arr1 = [
{ name: "apple", price: 1 },
{ name: "banana", price: 2 },
{ name: "orange", price: 3 },
];

const maxObj1 = findMaxByProperty(arr1, "price");
console.log(maxObj1);