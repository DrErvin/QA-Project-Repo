# QA-Project-Repo

QA Project using playwright automation testing for ekipa student-platform

## 🧪 Test Automation with Playwright

The testing/automation branch includes a comprehensive suite of automated tests written using **Playwright**. The suite includes **smoke tests** (critical path tests) and **functional tests** to verify the platform's features.

### 🛠 Setup Instructions

Once you cloned the repository and are in root directory of the project you can install dependencies

```bash
npm install
npx playwright install
```

### 🚀 How to Run the Tests

#### Step 1

To run the tests you need to locally run the backend and the frontend application. For running the backend, instructions are provided in the readme file of the backend repository: https://github.com/DrErvin/Student_platform_server.git

#### Step 2

To run the frontend application we are using http static server. Instruction for starting it:

```bash
 npm start
```

#### Step 3

Next, open up another terminal window to run tests. Now you can run tests.

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
