// event listener

function myfunction() {
    console.log('clicked on document');
}

document.addEventListener("click", myfunction);

// document.removeEventListener("click", myfunction);

// phases of an event -
// capturing phase
// atTarget phase
// bubbling phase

let para = document.querySelector('#hehe');

para.addEventListener("click", function(print) {
    console.log(print);
})

// preventing default action
let links = document.querySelectorAll('a');

links[1].addEventListener("click", function(event) {
    event.preventDefault();
    console.log('failed!!!');
});

// event target
let aDiv = document.createElement('div');

aDiv.addEventListener("click", function(event) {
    console.log(event.target.nodeName + ' ' + event.target.textContent);
});

for(let i=1; i<=10; i++) {
    let aPara = document.createElement('p');
    aPara.textContent = 'paragraph' + i;

    aDiv.appendChild(aPara);
}

document.body.appendChild(aDiv);