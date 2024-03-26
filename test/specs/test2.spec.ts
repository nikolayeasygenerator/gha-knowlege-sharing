describe('Test 2', () => {
  before(() => {
    Cypress.on('uncaught:exception', error => {
      if (
        ['gaconnector2', 'multislider'].some(m => error.message.includes(m))
      ) {
        return false;
      }
    });
  });

  beforeEach(() => {
    cy.visit('/');

    cy.get('#homepage-images').click();
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    cy.get('#CybotCookiebotDialog').should('not.be.visible');
  });

  it('should allow the user to view the "Careers" page', () => {
    cy.window().scrollTo('top');
    cy.contains('Careers').click();
    // FIXME broken intentionally here
    cy.contains('Work where you loveTEST').should('be.visible');
  });
});
