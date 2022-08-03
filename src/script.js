// Variables y referencias
const bill = document.querySelector('.main__bill--input');
const tip = document.querySelector('.main__tip--percentages');
const tipInput = document.querySelector('#custom');
const people = document.querySelector('.main__people--input')
const reset = document.querySelector('.main__results--button');

// Errores
const cons = document.querySelector('.main__people--quantity')
const error = document.querySelector('#error');

eventListeners();

// Referencias para dar totales
const totalTip = document.querySelector('#totalTip');
const totalMoney = document.querySelector('#totalPerson');

let total = 0;
let tipAmount = 0;
let totalPeople = 0;

// Variables que pondrán numeros en la pantalla
let tipByPerson = 0;
let totalByPerson = 0;

function eventListeners() {
    bill.addEventListener('blur', e => {
        total = parseFloat(e.target.value);
    });
    tip.addEventListener('click', e => {
        tipInput.addEventListener('blur', e => {
            tipAmount = parseInt(e.target.value);
        });
        if(e.target != tipInput) {
            tipAmount = e.target.innerText.split("%");
            tipAmount.pop();
            tipAmount = parseInt(tipAmount[0]);
        }
    });

    people.addEventListener('blur', e => {
        totalPeople = parseInt(e.target.value);
        if(e.target.value == 0) {
            cons.style.borderRadius = '5px';
            cons.style.border = '2px solid rgb(212 166 156)';
            error.style.display = 'inline';
        }
        else {
            cons.style.border = '0';
            error.style.display = 'none';
            calcular();
        }
    });
    reset.addEventListener('click', limpiar);
}
function calcular() {
    if(total != 0 && tipAmount >= 0 && totalPeople >= 1 && totalPeople <= 30) {
        tipByPerson = (total * tipAmount / 100) / totalPeople;
        totalTip.textContent = `$${tipByPerson.toFixed(2)}` // Se agrega a la pantalla, propina por persona

        totalByPerson = (((tipByPerson * totalPeople) + total) / totalPeople);
        totalMoney.textContent = `$${totalByPerson.toFixed(2)}`;
    }
}

function limpiar() {
    bill.value = "0.00";
    tip.value = 0;
    tipInput.textContent = "Custom";
    people.value = 0;
    totalTip.textContent = "$0";
    totalMoney.textContent = "$0";
}
