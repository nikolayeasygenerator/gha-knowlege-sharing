describe('Test', () => {
  before(() => {
    Cypress.on('uncaught:exception', error => {
      if (
        ['gaconnector2', 'multislider'].some(m => error.message.includes(m))
      ) {
        return false;
      }
    });
  });

  it('should redirect the user to the "Why Easygenerator" page', () => {
    cy.contains('Why Easygenerator?').should('not.exist');
    cy.contains('a', 'Why Easygenerator').click();
    cy.contains('Why Easygenerator?').should('be.visible');
  });
});
