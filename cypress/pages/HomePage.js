import BasePage from './BasePage';

export default class HomePage extends BasePage {
    constructor() {
        super();
        this.yourLogoIcon = '.logo';
    }

    visitHomePage() {
        cy.visit('/index.php');
    }

    verifyHomepageDisplayed() {
        this.Assert.verifySelectorExistByCSS(this.yourLogoIcon);
    }
}
