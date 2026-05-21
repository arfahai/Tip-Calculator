// ─── Element References ─────────────────────────────────
const toggleTheme    = document.getElementById('toggle-theme');
const billInput      = document.getElementById('bill');
const customTip      = document.getElementById('custom-tip');
const customToggle   = document.getElementById('custom-toggle');
const customWrapper  = document.getElementById('custom-tip-wrapper');
const peopleDisplay  = document.getElementById('people-display');
const decrementBtn   = document.getElementById('decrement');
const incrementBtn   = document.getElementById('increment');
const tipBtns        = document.querySelectorAll('.tip-btn:not(#custom-toggle)');

const perPersonEl    = document.getElementById('per-person');
const totalAmountEl  = document.getElementById('total-amount');
const tipAmountEl    = document.getElementById('tip-amount');
const resetBtn       = document.getElementById('reset');

let selectedTip  = 20;   
let peopleCount  = 1;
let customOpen   = false;

tipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('active'));

        btn.classList.add('active');
        selectedTip = parseFloat(btn.innerText.replace('%', ''));

        if (customOpen) {
            customOpen = false;
            customWrapper.classList.remove('open');
            customTip.value = '';
        }

        calculate();
    });
});

customToggle.addEventListener('click', () => {
    customOpen = !customOpen;

    if (customOpen) {
        customWrapper.classList.add('open');
        // Deactivate preset buttons, activate the custom toggle button
        document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('active'));
        customToggle.classList.add('active');
        customTip.focus();
    } else {
        customWrapper.classList.remove('open');
        customToggle.classList.remove('active');
        customTip.value = '';
        selectedTip = 0;
        calculate();
    }
});

customTip.addEventListener('input', () => {
    selectedTip = parseFloat(customTip.value) || 0;
    calculate();
});

billInput.addEventListener('input', calculate);

incrementBtn.addEventListener('click', () => {
    peopleCount++;
    updatePeopleDisplay();
    calculate();
});

decrementBtn.addEventListener('click', () => {
    if (peopleCount > 1) {
        peopleCount--;
        updatePeopleDisplay();
        calculate();
    }
});

function updatePeopleDisplay() {
    peopleDisplay.textContent = peopleCount;
    peopleDisplay.classList.remove('bump');
    void peopleDisplay.offsetWidth; 
    peopleDisplay.classList.add('bump');
    setTimeout(() => peopleDisplay.classList.remove('bump'), 200);
}

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const icon = toggleTheme.querySelector('i');
    icon.className = document.body.classList.contains('light')
        ? 'fas fa-sun'
        : 'fas fa-moon';
});

resetBtn.addEventListener('click', () => {
    billInput.value   = '';
    customTip.value   = '';
    selectedTip       = 20;
    peopleCount       = 1;
    customOpen        = false;

    customWrapper.classList.remove('open');

    document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tip-btn:not(#custom-toggle)').forEach(btn => {
        if (btn.innerText.trim() === '20%') btn.classList.add('active');
    });

    updatePeopleDisplay();
    updateUI(0, 0, 0);
});

function calculate() {
    const bill   = parseFloat(billInput.value);
    const people = peopleCount;

    if (!bill || bill <= 0) {
        updateUI(0, 0, 0);
        return;
    }

    const tip             = bill * (selectedTip / 100);
    const total           = bill + tip;
    const perPersonAmount = total / people;

    updateUI(tip, total, perPersonAmount);
}

function updateUI(tip, total, per) {
    tipAmountEl.textContent   = tip.toFixed(2);
    totalAmountEl.textContent = '$' + total.toFixed(2);
    perPersonEl.textContent   = per.toFixed(2);
}