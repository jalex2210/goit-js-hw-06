const subtractButton = document.querySelector('[data-action="decrement"]');
const addingButton = document.querySelector('[data-action="increment"]');
const valueElements = document.getElementById('value');
let adderValue = 0;

function updateCounter(value) {
    adderValue = value;
    valueElements.textContent = adderValue;
}

subtractButton.addEventListener('click', () => {
    updateCounter(adderValue - 1);
});

addingButton.addEventListener('click', () => {
    updateCounter(adderValue + 1);
});
updateCounter(adderValue);
