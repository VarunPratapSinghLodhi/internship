// Get the counter element
var counterElement = document.getElementById('counter');

// Initial counter value
var counterValue = 0;

// Function to increment the counter
function increment() {
    counterValue++;
    updateCounter();
}

// Function to decrement the counter
function decrement() {
    counterValue--;
    updateCounter();
}

// Function to reset the counter to 0
function reset() {
    counterValue = 0;
    updateCounter();
}

// Function to update the counter element with the current value
function updateCounter() {
    counterElement.textContent = counterValue;
}