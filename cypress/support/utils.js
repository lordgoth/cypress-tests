export const fillField = (selector, input) => {
    cy.get(selector).type(input)
}

export const clickButton = (selector) => {
    cy.get(selector).click()
}

export const getError = () => {
    return cy.get("#error .error-message")
}

export const getElementByCSSSelectors =(css_selector) => {
  return cy.get(css_selector)
}
