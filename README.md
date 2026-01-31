# SwiftTranslator Playwright Test Automation

Automated end-to-end testing suite for [SwiftTranslator](https://www.swifttranslator.com/) - A Singlish to Sinhala transliteration tool.

## 📋 Project Overview

This project contains **35 automated test cases** using Playwright to validate the functionality of the SwiftTranslator web application. The test cases are derived from the Excel test specification document (`IT23857162.xlsx`).

## 🧪 Test Case Summary

| Category | Count | Description |
|----------|-------|-------------|
| **Positive Functional Tests** | 24 | Tests verifying correct translation behavior |
| **Negative Functional Tests** | 10 | Tests documenting known issues/limitations |
| **UI Tests** | 1 | Backspace/real-time update validation |

### Positive Functional Tests (Pos_Fun_01 - Pos_Fun_24)

| Test ID | Test Name | Description |
|---------|-----------|-------------|
| Pos_Fun_01 | Simple sentence conversion | Basic Singlish to Sinhala translation |
| Pos_Fun_02 | Compound Sentence with Conjunction | Handles conjunctions correctly |
| Pos_Fun_03 | Complex Conditional Sentence | Conditional "if" structure handling |
| Pos_Fun_04 | Interrogative Personal Question | Question mark preservation |
| Pos_Fun_05 | Imperative Command | Command structure interpretation |
| Pos_Fun_06 | Negative Statement Form | Negative form conversion |
| Pos_Fun_07 | Polite Request with Object | Polite structure preservation |
| Pos_Fun_08 | Polite Response | Agreement phrase conversion |
| Pos_Fun_09 | Repeated Words for Emphasis | Repetition handling |
| Pos_Fun_10 | Past Tense Event | Past tense accuracy |
| Pos_Fun_11 | Future Tense Action | Future tense conversion |
| Pos_Fun_12 | Plural Subject Usage | Plural form handling |
| Pos_Fun_13 | Pronoun Variation | Third person pronoun conversion |
| Pos_Fun_14 | Informal Slang | Slang word handling |
| Pos_Fun_15 | Mixed English Tech Terms | English terms preservation |
| Pos_Fun_16 | English Place Names | Proper noun handling |
| Pos_Fun_17 | Standard Abbreviation | Abbreviation preservation |
| Pos_Fun_18 | Web URL Handling | URL preservation |
| Pos_Fun_19 | Punctuation Variation | Punctuation handling |
| Pos_Fun_20 | Currency and Numbers | Currency/number preservation |
| Pos_Fun_21 | Date Format Handling | ISO date format preservation |
| Pos_Fun_22 | Line Break Formatting | Multi-line format preservation |
| Pos_Fun_23 | Long Paragraph Input | Long text handling |
| Pos_Fun_24 | Slang/Colloquial Phrase | Colloquial language conversion |

### Negative Functional Tests (Neg_Fun_01 - Neg_Fun_10)

These tests document known limitations of the translator:

| Test ID | Test Name | Known Issue |
|---------|-----------|-------------|
| Neg_Fun_01 | Joined Words (Typo) | Fails to separate joined words |
| Neg_Fun_02 | English Email Conversion | Email handling behavior |
| Neg_Fun_03 | Mixed Case Confusion | Mixed case disrupts mapping |
| Neg_Fun_04 | Ambiguous "t" sound | Phonetic ambiguity |
| Neg_Fun_05 | Double Vowels Handling | Extra vowels parsed literally |
| Neg_Fun_06 | Numeric-Text Joined | Missing space after numbers |
| Neg_Fun_07 | Special Char in Word | Special chars break word formation |
| Neg_Fun_08 | Incorrect English Transliteration | English words incorrectly transliterated |
| Neg_Fun_09 | Phonetic Mismatch (Gn) | Complex phonetic issues |
| Neg_Fun_10 | Bandi Akuru (Joined) Failure | Ligature formation issues |

### UI Tests

| Test ID | Test Name | Description |
|---------|-----------|-------------|
| Pos_UI_01 | Backspace / Text Removal | Real-time output update on text deletion |

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/inusha-nawanjana/ITP-Playwright.git
cd ITP-Playwright
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🎯 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run with list reporter (shows each test)
```bash
npx playwright test --reporter=list
```

### Run specific test file
```bash
npx playwright test tests/swifttranslator.spec.ts
```

### Run specific test by name
```bash
npx playwright test --grep "Pos_Fun_01"
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run tests with HTML report
```bash
npx playwright test --reporter=html
npx playwright show-report
```

## 📁 Project Structure

```
IT23857162_Playwright/
├── tests/
│   ├── swifttranslator.spec.ts    # Main test file (35 test cases)
│   └── debug.spec.ts              # Debug/exploration tests
├── test-results/                   # Test execution results
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Project dependencies
├── IT23857162.xlsx               # Excel test case specifications
├── read-excel.js                 # Excel file reader utility
└── README.md                     # This file
```

## ⚙️ Configuration

The project is configured to run tests on **Chromium** browser by default. To enable additional browsers, modify `playwright.config.ts`:

```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  // Uncomment for additional browsers:
  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },
  // {
  //   name: 'webkit',
  //   use: { ...devices['Desktop Safari'] },
  // },
]
```

## 📊 Test Reports

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```

Screenshots of failed tests are automatically saved in `test-results/`.

## 🔧 Troubleshooting

### API Unavailability
The SwiftTranslator website uses an external API for transliteration. If you see warnings like:
```
⚠️ Warning: No output received - API might be unavailable
```
This indicates the translation API is temporarily unavailable (HTTP 503). The tests will still pass but with warnings.

### Timeout Issues
If tests timeout, try increasing the timeout in `playwright.config.ts`:
```typescript
timeout: 60000, // 60 seconds
```

## 👤 Author

- **Student ID:** IT23857162

## 📄 License

This project is for educational purposes as part of the ITP module.

## 🔗 References

- [SwiftTranslator Website](https://www.swifttranslator.com/)
- [Playwright Documentation](https://playwright.dev/)
