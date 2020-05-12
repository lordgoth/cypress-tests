import BasePage from './BasePage';

export default class SearchPage extends BasePage {
    constructor() {
        super();
        this.searchInput = '#search_query_top';
        this.productNameLink = '//div[@class="product-container"]//a[@class="product-name"]';
        this.searchButton = '.button-search';
    }
    
    search(search_string) {
        cy.allure().step('I search with search string "' + search_string + '"');
        this.fillField(this.searchInput, search_string);
        this.clickSelector(this.searchButton);      
    }
    
    verifyProductIsDisplayed(product_name) {
        cy.allure().step('I verify product "' + product_name + '" is displayed in the search result');
        this.Assert.verifySelectorContainsTextByXPATH(this.productNameLink, product_name);
    }
}

