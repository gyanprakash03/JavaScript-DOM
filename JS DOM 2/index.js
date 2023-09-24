// time taken for code execution
// using DOM fragment function

let t1 = performance.now();
const fruits = ["Banana", "Orange", "Mango"];

// Create a document fragment:
const dFrag = document.createDocumentFragment();

for (let x in fruits) {
    const li = document.createElement('li');
    li.textContent = fruits[x];
    dFrag.appendChild(li);
}

// Add fragment to a list: 
document.getElementById('myList').appendChild(dFrag);
let t2 = performance.now();

document.querySelector('#time').textContent = t2 - t1;
    