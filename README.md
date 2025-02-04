# QA-Project-Repo

QA Project using playwright automation testing for ekipa student-platform

## 🧪 Test Automation with Playwright

This repository includes a comprehensive suite of automated tests written using **Playwright**. The suite covers smoke tests (critical path tests) and functional tests to verify the platform's features.

### 🛠 Setup Instructions

Once you cloned the repository and are in root directory of the project you can install dependencies

```bash
npm install
npx playwright install
```

### 🚀 How to Run the Tests

#### Step 1: Start Backend and Frontend

To run the tests, you must first start both the backend and frontend applications.

Backend: Follow the instructions in the backend repository's README to start the backend server: https://github.com/DrErvin/Student_platform_server.git

Frontend: Follow the instructions in the frontend repository's README to start the frontend server. The frontend should be run using Vite from the frontend repository: https://github.com/DrErvin/Ekipa-Project.git

#### Step 2

Once both the backend and frontend are running, you can execute tests from the QA-Project Repo

##### Run All Tests

```bash
npx playwright test
```

#### Run Smoke Tests Only

```bash
npm run test:smoke
```

#### Run Functional Tests Only

```bash
npm run test:functional
```

### 📌 Notes

- Ensure the backend server is running before executing the tests.
- The tests are designed to run on **Chromium**, **Firefox**, and **WebKit** browsers.
- All tests are executed in **headless mode** by default. If you want to run them with a visible browser window, append the `--headed` flag to the test command.
