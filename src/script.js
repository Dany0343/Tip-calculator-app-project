// Variables
const bill = document.querySelector('.main__bill--input');
const tip = document.querySelector('.main__tip--percentages');
eventListeners();
let total = 0;

function eventListeners() {
    bill.addEventListener('blur', e => {
        let total = e.target.value
    });
}
