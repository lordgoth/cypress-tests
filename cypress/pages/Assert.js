export default class Assert {
    verifySelectorExistByCSS(css_selector) {
        cy.get(css_selector).should('exist');
    }

    verifySelectorExistByXPATH(xpath_selector) {
        cy.xpath(xpath_selector).should('exist');
    }

    verifySelectorContainsTextByXPATH(xpath_selector, contain_string) {
        cy.xpath(xpath_selector).should('have.contain.text', contain_string);
    }
}