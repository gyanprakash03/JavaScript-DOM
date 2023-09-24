

// *********** asynchrounous code *************
// setTimeout( () => {
//     console.log('after 5 seconds');
// }, 5000)

// console.log('one');
// console.log('two');
// console.log('three');

// ************ promise ****************
// let promise1 = new Promise( function(resolve, reject) {
//     setTimeout ( () => {
//         console.log("promise 1 resolved");
//         resolve("111");
//     }, 2000)

// })

// let output = promise1.then( () => {
//     let promise2 = new Promise( function(resolve, reject) {
//         resolve("promise 2 resolved");
//     })
//     return promise2;
// })

// output.then((value) => {console.log(value)});

// *************** async - await ****************
// async function weather() {

//     let firstWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("this is first weather");
//             resolve();
//         }, 3000);
//     })

//     await firstWeather;

//     let secondWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("this is second weather");
//             resolve();
//         }, 3000);
//     })

//     await secondWeather;

// }

// weather();

// *************** fetch API *********************
// ***** GET ******
// async function apis() {

//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     let data = await content.json();

//     console.log(data);
// }

// apis();

// ****** POST ******
// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'hello',
//         description: 'world',
//         id: '2003',
//     }),
    
//     headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//     },
// }

// async function apis2() {

//     let response = await fetch('https://jsonplaceholder.typicode.com/posts', options);

//     let data = await response.json();
    
//     console.log(data);
// }

// apis2();

// ***************** closure *******************
function func1 () {

    let digit = 254;

    function innerFunc() {
        console.log(digit++);
    }
    innerFunc();

    return innerFunc;
}

let func2 = func1();
func2();
func2();