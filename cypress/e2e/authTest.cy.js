import headerAssertions from "../POM/header/headerAssertions.js";
import loginPageAssertions from "../POM/loginPage/loginPageAssertions.js";
import {header} from "../POM/header/header.js";

describe('Auth Test ', () => {

    it('should login and show dashboard page', () => {
        cy.loginAsAdmin()

        headerAssertions.assertPageTitleEql('Dashboard')
    });

    it('should logout and show login page', () => {
        cy.loginAsAdmin()

        header.clickLogout()

        loginPageAssertions.assertTitleEql('Login')
    });
})
