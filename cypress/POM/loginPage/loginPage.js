import {loginPageLocators} from "./loginPageLocators.js";

class LoginPage {
    elements = {
        title: () => cy.get(loginPageLocators.title),
        version: () => cy.xpath(loginPageLocators.version),
        usernameInput: () => cy.get(loginPageLocators.inputUsername),
        passwordInput: () => cy.get(loginPageLocators.inputPassword),
        submitButton: () => cy.get(loginPageLocators.buttonSubmit),
    }

    enterUsername(username) {
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickSubmit() {
        this.elements.submitButton().click();
    }
}

export const loginPage = new LoginPage();
