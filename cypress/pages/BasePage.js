import Assert from './Assert';

export default class BasePage {
    constructor() {
        this.Assert = new Assert();
    }

    fillField(css_selector, input) {
        return cy.get(css_selector).type(input);
    }

    clickSelector(css_selector) {
        return cy.get(css_selector).click();
    }
}
