import {headerLocators} from "./headerLocators.js";

class Header {
    elements = {
        title: () => cy.xpath(headerLocators.title),
        userDropdown: () => cy.get(headerLocators.userDropdown),
        logoutItem: () => cy.get(headerLocators.logoutItem),
        aboutItem: () => cy.get(headerLocators.aboutItem)
    }
    clickLogout() {
        this.elements.userDropdown().click()
        this.elements.logoutItem().click()
    }
    clickAbout() {
        this.elements.userDropdown().click()
        this.elements.aboutItem().click()
    }
}

export const header = new Header();
