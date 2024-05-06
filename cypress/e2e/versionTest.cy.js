import {header} from "../POM/header/header.js";
import {loginPage} from "../POM/loginPage/loginPage.js";
import aboutModalAssertions from "../POM/aboutModal/aboutModalAssertions.js";

describe('Version Test', () => {
    it('Should display the same version in login page and about modal', () => {
        loginPage.elements.version().then(version$ => {
            const versionOnLoginPage = version$.text()
            cy.loginAsAdmin()
            header.clickAbout()

            aboutModalAssertions.assertVersionEql(versionOnLoginPage)
        })
    })
})
