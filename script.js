// Function with Parameters and Return Values
function calculateArea(length, width) {
    return length * width;
}

const calculateAreaButton = document.getElementById('calculateAreaButton');
calculateAreaButton.addEventListener('click', () => {
    const length = parseFloat(prompt("Enter the length:"));
    const width = parseFloat(prompt("Enter the width:"));
    const area = calculateArea(length, width);
    document.getElementById('areaResult').textContent = `The area is ${area}`;
});

// Function Demonstrating Scope
let globalVar = "I am a global variable";

function scopeDemo() {
    let localVar = "I am a local variable";
    console.log(globalVar);
    console.log(localVar); 
}

scopeDemo();
console.log(globalVar);

// Function to Toggle Modal Visibility
const toggleModalButton = document.getElementById('toggleModalButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');

toggleModalButton.addEventListener('click', () => {
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
