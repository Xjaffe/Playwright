# Playwright Automation - Securiti.ai Test

This project automates a form submission using [Playwright](https://playwright.dev/) and verifies:

- Redirection to a Thank You page
- Thank You message or title matches the item title from the original page
- Screenshot is taken after redirection

---

## 📦 Requirements

- Node.js (v16 or later)
- npm (or yarn)

---

## 🚀 Setup Instructions

### 1. Install dependencies

```bash
npm install

npx playwright install

npx playwright test

thank-you.png

.
├── tests/
│   └── example.spec.ts       # Your Playwright test script
├── playwright.config.ts      # Playwright configuration
├── package.json
└── README.md                 # This file
