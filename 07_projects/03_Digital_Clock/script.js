const clock = document.querySelector("#clock");

setInterval(() => {
    let date = new Date();
    // Avoid using createTextNode here
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)