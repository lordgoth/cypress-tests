import BasePage from './BasePage';

export default class HomePage extends BasePage {
    constructor() {
        super();
        this.yourLogoIcon = '.logo';
    }

    visitHomePage() {
        cy.allure().step('I visit HomePage');
        cy.visit('/index.php');
    }

    verifyHomepageDisplayed() {
        cy.allure().step('I verify the HomePage is displayed');
        this.Assert.verifySelectorExistByCSS(this.yourLogoIcon);
    }
}
