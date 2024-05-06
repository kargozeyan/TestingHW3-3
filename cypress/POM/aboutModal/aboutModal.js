import {aboutModalLocators} from "./aboutModalLocators.js";

class AboutModal {
    elements = {
        version: () => cy.xpath(aboutModalLocators.version)
    }
}

export const aboutModal = new AboutModal();
