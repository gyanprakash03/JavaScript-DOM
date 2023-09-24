// function to validate a form on submit event

function validateForm(event) {
    event.preventDefault(); 
    const form = event.target; 
    let isValid = true; 

    for (let i = 0; i < form.elements.length; i++) {
        const input = form.elements[i];
        const value = input.value.trim(); 
    
        if (input.hasAttribute("required") && value === "") {
            isValid = false; 
            input.classList.add("invalid"); 
        } 
        else {
            input.classList.remove("invalid"); 
        }
    }

    const message = document.getElementById("message");
    if (isValid) {
        message.classList.remove("error");
        message.innerText = "Form submitted successfully!";
    } 
    else {
        message.classList.add("error");
        message.innerText = "Please fill out all required fields.";
    }
}

const form = document.getElementById("myForm");
form.addEventListener("submit", validateForm);

// function to load an image asynchronously and handle the load event with a callback.

function loadImageAsync(url, callback) {
    const img = new Image();

    img.addEventListener('load', () => {
        callback(null, img);
    });

    img.addEventListener('error', () => {
        callback(new Error(`Failed to load image at ${url}`));
    });
  
    img.src = url;
}
  
// Example usage:
loadImageAsync('https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', (error, img) => {
    if (error) {
        console.error(error);
    } 
    else {
        // Add the loaded image to the page
        document.body.appendChild(img);
    }
});