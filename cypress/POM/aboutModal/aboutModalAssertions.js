import {aboutModal} from "./aboutModal.js";

export default {
    assertVersionEql(version) {
        aboutModal.elements.version().should('have.text', version);
    }
}
