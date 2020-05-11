import HomePage from '../../pages/HomePage';

describe('HomePage Tets', () => {
  context('Check Logo Icon on HomePage', () => {
    const home = new HomePage();

    it('I go to the HomePage', () => {
      home.visitHomePage();
    })

    it('I verify the Logo icon should exist in the HomePage', () => {
      cy.getElementByCSSSelectors(home.yourLogoIcon).should("exist");
    })
  })
})
