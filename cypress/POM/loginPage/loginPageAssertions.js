import {loginPage} from "./loginPage.js";

export default {
    assertTitleEql(title) {
        loginPage.elements.title().should('have.text', title);
    }
}