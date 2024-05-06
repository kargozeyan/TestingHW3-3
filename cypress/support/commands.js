require('cypress-xpath')
const {loginPage} = require("../POM/loginPage/loginPage.js");

Cypress.Commands.add('loginAsAdmin', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickSubmit()

    cy.wait(1000)
})
