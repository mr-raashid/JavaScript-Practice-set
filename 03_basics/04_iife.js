// IIFE - Immediately Invoked Function Expression

(function chai () {
    // Named IIFE
    console.log(`DataBase Connected`);
})();

// Make sure to put semi-colon after every IIFE.

((name) => {
    console.log(`Welcome to our website ${name}`);
})("Raashid");