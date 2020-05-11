import BasePage from './BasePage';

export default class SearchPage extends BasePage {
    constructor() {
        super();
        this.searchInput = '#search_query_top';
        this.productNameLink = '//div[@class="product-container"]//a[@class="product-name"]';
        this.searchButton = '.button-search';
    }
    
    search(search_string) {
        this.fillField(this.searchInput, search_string);
        this.clickSelector(this.searchButton);       
    }
    
    verifyProductIsDisplayed(product_name) {
        this.Assert.verifySelectorContainsTextByXPATH(this.productNameLink, product_name);
    }
}

