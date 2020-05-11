import HomePage from '../../pages/HomePage';
import SearchPage from '../../pages/SearchPage';

describe('HomePage Tets', () => {
    const home_page = new HomePage();
    const search_page = new SearchPage();

    it('Verify user can open Homepage', () => {
        home_page.visitHomePage();
        home_page.Assert.verifySelectorExistByCSS(home_page.yourLogoIcon);
    })

    it('Verify user can search product using product name', () => {
        search_page.search("Faded Short Sleeve T-shirts");
        search_page.verifyProductIsDisplayed("Faded Short Sleeve T-shirts");
    })
})
