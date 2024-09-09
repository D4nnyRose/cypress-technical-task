
# INFORCE Technical Task using Cypress E2E

## Preinstallation:

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS version)
- [VSCode](https://code.visualstudio.com/download) (recommended)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/D4nnyRose/cypress-technical-task


2. Navigate to the project directory:
   ```bash
   cd cypress-technical-task


3. Install the dependencies:


    ``` npm install ```






    

# Tests location:
**All the tests** are located in ```cypress\e2e``` folder.

And the custom **command** is storred in ```cypress\support\commands```

## Folder containment:
- login.spec.cy
- cart.spec.cy
- proceedingToCheckout.spec.cy
- makingCheckout.spec.cy
- checkoutInfoPage.spec.cy
- checkoutComplete.spec.cy
- userLogout.spec.cy
- 🚨 **bonusTask.spec.cy - bonus task**


## How to run?



1. Open Cypress Test Runner:

 ``` npx cypress open ```

2. Choose a browser in cypress UI **(Chrome)**

3. Press **Start E2E Testing in Chrome**

4. Pick the test You wish to open

5. To open the **bonus task** search for **bonusTask.spec.cy** in **e2e** folder