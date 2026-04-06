// ===================================
// Application State Management
// ===================================
const appState = {
    billAmount: 0,
    tipPercentage: 15,
    numPeople: 1,
    currency: 'USD',
    theme: 'light',
    currencySymbols: {
        USD: '$',
        EUR: '€',
        GBP: '£',
        JPY: '¥',
        CAD: '$',
        AUD: '$'
    }
};

// ===================================
// DOM Elements
// ===================================
const elements = {
    // Inputs
    billAmount: document.getElementById('billAmount'),
    customTip: document.getElementById('customTip'),
    numPeople: document.getElementById('numPeople'),
    tipSlider: document.getElementById('tipSlider'),
    currency: document.getElementById('currency'),
    
    // Buttons
    tipButtons: document.querySelectorAll('.tip-btn'),
    decreasePeople: document.getElementById('decreasePeople'),
    increasePeople: document.getElementById('increasePeople'),
    resetBtn: document.getElementById('resetBtn'),
    themeToggle: document.getElementById('themeToggle'),
    
    // Display
    currencySymbol: document.getElementById('currencySymbol'),
    sliderValue: document.getElementById('sliderValue'),
    tipAmount: document.getElementById('tipAmount'),
    totalAmount: document.getElementById('totalAmount'),
    tipPerPerson: document.getElementById('tipPerPerson'),
    totalPerPerson: document.getElementById('totalPerPerson'),
    splitItems: document.getElementById('splitItems'),
    
    // Errors
    billError: document.getElementById('billError'),
    peopleError: document.getElementById('peopleError')
};

// ===================================
// Initialize Application
// ===================================
function initializeApp() {
    loadPreferences();
    setupEventListeners();
    updateUI();
}

// ===================================
// Event Listeners Setup
// ===================================
function setupEventListeners() {
    // Bill input
    elements.billAmount.addEventListener('input', handleBillInput);
    
    // Tip buttons
    elements.tipButtons.forEach(btn => {
        btn.addEventListener('click', handleTipSelection);
    });
    
    // Custom tip
    elements.customTip.addEventListener('input', handleCustomTip);
    
    // Tip slider
    elements.tipSlider.addEventListener('input', handleSliderInput);
    
    // People controls
    elements.numPeople.addEventListener('input', handlePeopleInput);
    elements.decreasePeople.addEventListener('click', () => adjustPeople(-1));
    elements.increasePeople.addEventListener('click', () => adjustPeople(1));
    
    // Currency
    elements.currency.addEventListener('change', handleCurrencyChange);
    
    // Reset
    elements.resetBtn.addEventListener('click', resetCalculator);
    
    // Theme
    elements.themeToggle.addEventListener('click', toggleTheme);
}

// ===================================
// Bill Input Handler
// ===================================
function handleBillInput(e) {
    const value = parseFloat(e.target.value);
    
    // Clear error
    clearError('bill');
    
    // Validate
    if (e.target.value && (isNaN(value) || value < 0)) {
        showError('bill', 'Please enter a valid amount');
        return;
    }
    
    appState.billAmount = value || 0;
    calculateAndUpdate();
    savePreferences();
}

// ===================================
// Tip Selection Handler
// ===================================
function handleTipSelection(e) {
    const tipValue = parseInt(e.target.dataset.tip);
    
    // Update state
    appState.tipPercentage = tipValue;
    
    // Update UI
    elements.tipButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Clear custom tip
    elements.customTip.value = '';
    
    // Update slider
    elements.tipSlider.value = tipValue;
    elements.sliderValue.textContent = tipValue;
    
    calculateAndUpdate();
    savePreferences();
}

// ===================================
// Custom Tip Handler
// ===================================
function handleCustomTip(e) {
    const value = parseFloat(e.target.value);
    
    if (e.target.value && (isNaN(value) || value < 0 || value > 100)) {
        return;
    }
    
    if (value) {
        appState.tipPercentage = value;
        
        // Remove active from preset buttons
        elements.tipButtons.forEach(btn => btn.classList.remove('active'));
        
        // Update slider
        if (value <= 50) {
            elements.tipSlider.value = value;
            elements.sliderValue.textContent = value;
        }
        
        calculateAndUpdate();
        savePreferences();
    }
}

// ===================================
// Slider Input Handler
// ===================================
function handleSliderInput(e) {
    const value = parseInt(e.target.value);
    
    appState.tipPercentage = value;
    elements.sliderValue.textContent = value;
    
    // Clear custom tip
    elements.customTip.value = '';
    
    // Remove active from preset buttons
    elements.tipButtons.forEach(btn => btn.classList.remove('active'));
    
    // Activate matching preset button if exists
    const matchingBtn = Array.from(elements.tipButtons).find(
        btn => parseInt(btn.dataset.tip) === value
    );
    if (matchingBtn) {
        matchingBtn.classList.add('active');
    }
    
    calculateAndUpdate();
    savePreferences();
}

// ===================================
// People Input Handler
// ===================================
function handlePeopleInput(e) {
    const value = parseInt(e.target.value);
    
    // Clear error
    clearError('people');
    
    // Validate
    if (e.target.value && (isNaN(value) || value < 1)) {
        showError('people', 'Must be at least 1 person');
        return;
    }
    
    appState.numPeople = value || 1;
    calculateAndUpdate();
    savePreferences();
}

// ===================================
// Adjust People Count
// ===================================
function adjustPeople(change) {
    const newValue = appState.numPeople + change;
    
    if (newValue >= 1 && newValue <= 100) {
        appState.numPeople = newValue;
        elements.numPeople.value = newValue;
        calculateAndUpdate();
        savePreferences();
    }
}

// ===================================
// Currency Change Handler
// ===================================
function handleCurrencyChange(e) {
    appState.currency = e.target.value;
    elements.currencySymbol.textContent = appState.currencySymbols[appState.currency];
    updateUI();
    savePreferences();
}

// ===================================
// Calculate Tip
// ===================================
function calculateTip() {
    return (appState.billAmount * appState.tipPercentage) / 100;
}

// ===================================
// Calculate Total
// ===================================
function calculateTotal() {
    return appState.billAmount + calculateTip();
}

// ===================================
// Calculate Per Person
// ===================================
function calculatePerPerson() {
    const tipAmount = calculateTip();
    const totalAmount = calculateTotal();
    
    return {
        tipPerPerson: tipAmount / appState.numPeople,
        totalPerPerson: totalAmount / appState.numPeople
    };
}

// ===================================
// Calculate and Update
// ===================================
function calculateAndUpdate() {
    updateUI();
}

// ===================================
// Update UI
// ===================================
function updateUI() {
    const symbol = appState.currencySymbols[appState.currency];
    const tipAmount = calculateTip();
    const totalAmount = calculateTotal();
    const perPerson = calculatePerPerson();
    
    // Update displays with animation
    animateValue(elements.tipAmount, tipAmount, symbol);
    animateValue(elements.totalAmount, totalAmount, symbol);
    animateValue(elements.tipPerPerson, perPerson.tipPerPerson, symbol);
    animateValue(elements.totalPerPerson, perPerson.totalPerPerson, symbol);
    
    // Update split visualization
    updateSplitVisualization(perPerson.totalPerPerson, symbol);
}

// ===================================
// Animate Value
// ===================================
function animateValue(element, value, symbol) {
    const formatted = formatCurrency(value, symbol);
    element.textContent = formatted;
    
    // Trigger animation
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'countUp 0.5s ease';
    }, 10);
}

// ===================================
// Format Currency
// ===================================
function formatCurrency(amount, symbol) {
    return `${symbol}${amount.toFixed(2)}`;
}

// ===================================
// Update Split Visualization
// ===================================
function updateSplitVisualization(amountPerPerson, symbol) {
    elements.splitItems.innerHTML = '';
    
    for (let i = 0; i < appState.numPeople; i++) {
        const item = document.createElement('div');
        item.className = 'split-item';
        item.innerHTML = `
            <div class="split-icon">👤</div>
            <div class="split-amount">${formatCurrency(amountPerPerson, symbol)}</div>
        `;
        elements.splitItems.appendChild(item);
    }
}

// ===================================
// Validation Functions
// ===================================
function showError(field, message) {
    const errorElement = elements[`${field}Error`];
    const inputElement = field === 'bill' ? elements.billAmount : elements.numPeople;
    
    errorElement.textContent = message;
    inputElement.classList.add('error');
}

function clearError(field) {
    const errorElement = elements[`${field}Error`];
    const inputElement = field === 'bill' ? elements.billAmount : elements.numPeople;
    
    errorElement.textContent = '';
    inputElement.classList.remove('error');
}

// ===================================
// Reset Calculator
// ===================================
function resetCalculator() {
    // Reset state
    appState.billAmount = 0;
    appState.tipPercentage = 15;
    appState.numPeople = 1;
    
    // Reset inputs
    elements.billAmount.value = '';
    elements.customTip.value = '';
    elements.numPeople.value = 1;
    elements.tipSlider.value = 15;
    elements.sliderValue.textContent = 15;
    
    // Clear errors
    clearError('bill');
    clearError('people');
    
    // Reset tip buttons
    elements.tipButtons.forEach(btn => btn.classList.remove('active'));
    
    // Update UI
    updateUI();
    
    // Save preferences
    savePreferences();
}

// ===================================
// Theme Management
// ===================================
function toggleTheme() {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    savePreferences();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', appState.theme);
    const icon = elements.themeToggle.querySelector('.theme-icon');
    icon.textContent = appState.theme === 'dark' ? '☀️' : '🌙';
}

// ===================================
// LocalStorage Functions
// ===================================
function savePreferences() {
    try {
        const preferences = {
            billAmount: appState.billAmount,
            tipPercentage: appState.tipPercentage,
            numPeople: appState.numPeople,
            currency: appState.currency,
            theme: appState.theme
        };
        localStorage.setItem('tipCalculatorPrefs', JSON.stringify(preferences));
    } catch (error) {
        console.error('Error saving preferences:', error);
    }
}

function loadPreferences() {
    try {
        const saved = localStorage.getItem('tipCalculatorPrefs');
        if (saved) {
            const preferences = JSON.parse(saved);
            
            // Load saved values
            if (preferences.billAmount) {
                appState.billAmount = preferences.billAmount;
                elements.billAmount.value = preferences.billAmount;
            }
            
            if (preferences.tipPercentage) {
                appState.tipPercentage = preferences.tipPercentage;
                elements.tipSlider.value = preferences.tipPercentage;
                elements.sliderValue.textContent = preferences.tipPercentage;
            }
            
            if (preferences.numPeople) {
                appState.numPeople = preferences.numPeople;
                elements.numPeople.value = preferences.numPeople;
            }
            
            if (preferences.currency) {
                appState.currency = preferences.currency;
                elements.currency.value = preferences.currency;
                elements.currencySymbol.textContent = appState.currencySymbols[preferences.currency];
            }
            
            if (preferences.theme) {
                appState.theme = preferences.theme;
                applyTheme();
            }
        }
    } catch (error) {
        console.error('Error loading preferences:', error);
    }
}

// ===================================
// Initialize App on Load
// ===================================
document.addEventListener('DOMContentLoaded', initializeApp);
