# Tip Calculator - Professional Bill Splitting App

A modern, production-quality tip calculator built with HTML5, CSS3, and Vanilla JavaScript. Calculate tips, split bills, and manage multiple currencies with an intuitive, responsive interface.

![Tip Calculator](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)

## 🔗 Live Demo

- **🌐 Live App**: [https://shme-cs.github.io/js-tip-calculator/](https://shme-cs.github.io/js-tip-calculator/)
- **📦 GitHub Repository**: [https://github.com/Shme-CS/js-tip-calculator](https://github.com/Shme-CS/js-tip-calculator)

## 🎯 Overview

Tip Calculator is a fully-featured web application that makes calculating tips and splitting bills effortless. Built without frameworks, it showcases clean JavaScript architecture, modern UI design, and professional development practices.

## ✨ Features

### Core Features
- **Bill Calculation**: Enter bill amount with real-time validation
- **Tip Selection**: Quick-select buttons for common tip percentages (5%, 10%, 15%, 20%, 25%)
- **Custom Tip**: Enter any custom tip percentage
- **Tip Slider**: Interactive slider for precise tip selection (0-50%)
- **Bill Splitting**: Split bills between 1-100 people
- **Real-Time Updates**: Instant calculation as you type
- **Multiple Currencies**: Support for USD, EUR, GBP, JPY, CAD, AUD

### Advanced Features
- **Split Visualization**: Visual representation of bill split per person
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **LocalStorage**: Saves your preferences and last calculation
- **Animated Results**: Smooth number animations and transitions
- **Input Validation**: Comprehensive error handling with friendly messages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Keyboard Accessible**: Full keyboard navigation support
- **Tipping Guide**: Helpful tipping suggestions for different services

## 🚀 Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**:
  - CSS Variables for theming
  - Flexbox and Grid layouts
  - Smooth animations and transitions
  - Media queries for responsiveness
- **JavaScript (ES6+)**:
  - Modular architecture
  - State management
  - DOM manipulation
  - LocalStorage API
  - Event handling

## 📁 Project Structure

```
js-tip-calculator/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Complete styling with themes
├── js/
│   └── script.js          # Application logic
├── assets/
│   ├── icons/             # Icon assets
│   └── images/            # Image assets
└── README.md              # Project documentation
```

## 🎮 How to Use

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shme-CS/js-tip-calculator.git
```

2. Navigate to the project directory:
```bash
cd js-tip-calculator
```

3. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or use a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

### Using the Calculator

1. **Enter Bill Amount**: Input the total bill amount
2. **Select Tip**: Choose a preset percentage or enter custom amount
3. **Adjust Slider**: Fine-tune tip percentage with the slider
4. **Set People Count**: Use +/- buttons or type the number of people
5. **View Results**: See tip amount, total, and per-person breakdown
6. **Split Visualization**: View visual representation of the split
7. **Change Currency**: Select your preferred currency
8. **Reset**: Click reset to start a new calculation

## 🎨 Features Breakdown

### Calculation Logic
```javascript
Tip Amount = Bill Amount × (Tip Percentage / 100)
Total Amount = Bill Amount + Tip Amount
Tip Per Person = Tip Amount / Number of People
Total Per Person = Total Amount / Number of People
```

### Input Validation
- Empty field detection
- Negative number prevention
- Non-numeric value handling
- Range checking (people: 1-100, tip: 0-100%)
- Real-time error messages

### Currency Support
| Currency | Symbol | Code |
|----------|--------|------|
| US Dollar | $ | USD |
| Euro | € | EUR |
| British Pound | £ | GBP |
| Japanese Yen | ¥ | JPY |
| Canadian Dollar | $ | CAD |
| Australian Dollar | $ | AUD |

### Tipping Guide
- **Restaurant**: 15-20% for good service
- **Taxi/Uber**: 10-15% of fare
- **Hair Salon**: 15-20% of service
- **Hotel Staff**: $2-5 per service

## 💻 Code Architecture

### Modular Functions
```javascript
initializeApp()          // Initialize the application
handleBillInput()        // Process bill amount input
handleTipSelection()     // Handle tip button clicks
handleCustomTip()        // Process custom tip input
handleSliderInput()      // Handle slider changes
handlePeopleInput()      // Process people count
adjustPeople()           // Increment/decrement people
calculateTip()           // Calculate tip amount
calculateTotal()         // Calculate total bill
calculatePerPerson()     // Calculate per-person amounts
updateUI()               // Update all displays
resetCalculator()        // Reset all values
toggleTheme()            // Switch themes
savePreferences()        // Save to localStorage
loadPreferences()        // Load from localStorage
```

### State Management
```javascript
const appState = {
    billAmount: 0,
    tipPercentage: 15,
    numPeople: 1,
    currency: 'USD',
    theme: 'light'
};
```

### Best Practices
- ✅ Minimal global variables
- ✅ Reusable functions
- ✅ Optimized DOM updates
- ✅ Clean code structure
- ✅ Comprehensive comments
- ✅ Error handling
- ✅ Accessibility support

## 🎯 Code Quality

### Performance Optimizations
- Efficient DOM manipulation
- CSS transforms for animations
- Event delegation
- Debounced calculations

### Accessibility Features
- Semantic HTML elements
- ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader support

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

### Mobile Optimizations
- Touch-friendly buttons
- Optimized layouts
- Readable font sizes
- Simplified navigation

## 🔧 Customization

### Changing Theme Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #26c0ab;
    --secondary-color: #00494d;
    --accent-color: #f3a712;
}
```

### Adding More Currencies

Update the `currencySymbols` object in `js/script.js`:

```javascript
currencySymbols: {
    USD: '$',
    EUR: '€',
    // Add more currencies
}
```

### Modifying Tip Presets

Edit the tip buttons in `index.html`:

```html
<button class="tip-btn" data-tip="5">5%</button>
<button class="tip-btn" data-tip="10">10%</button>
<!-- Add more presets -->
```

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🚀 Future Improvements

- [ ] Add more currencies
- [ ] Tax calculation option
- [ ] Service quality rating
- [ ] Receipt generation
- [ ] Share calculation feature
- [ ] History of calculations
- [ ] Export to PDF
- [ ] Multiple bill items
- [ ] Discount calculation
- [ ] Progressive Web App (PWA)

## 📸 Screenshots

### Desktop View
![Desktop View](assets/images/screenshot-desktop.png)

### Mobile View
![Mobile View](assets/images/screenshot-mobile.png)

### Dark Mode
![Dark Mode](assets/images/screenshot-dark.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Tip Calculator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

Created with ❤️ by [Shme-CS](https://github.com/Shme-CS)

## 🙏 Acknowledgments

- Inspired by modern fintech applications
- Color palette inspired by teal/cyan themes
- Design principles from Material Design
- Icons from Unicode standard

---

⭐ Star this repository if you found it helpful!

📧 Questions? Open an issue or reach out!

🔗 **Links**:
- [GitHub Repository](https://github.com/Shme-CS/js-tip-calculator)
- [Live Demo](https://shme-cs.github.io/js-tip-calculator/)
- [Report Bug](https://github.com/Shme-CS/js-tip-calculator/issues)
- [Request Feature](https://github.com/Shme-CS/js-tip-calculator/issues)
