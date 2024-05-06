import {header} from "./header.js";

export default {
    assertPageTitleEql(title) {
        header.elements.title().should('have.text', title);
    }
}