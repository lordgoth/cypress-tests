export default class BasePage  {
  constructor() {

  }

  getElementByCSSSelectors(css_selector) {
    return cy.get(css_selector)
  }
}
