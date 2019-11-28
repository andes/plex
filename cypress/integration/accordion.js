/// <reference types="Cypress" />

context('accordion', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'accordion' });
        cy.visit('/accordion');
    });

    it('test accordion', () => {
        cy.eyesCheckWindow('main - accordion');
        cy.plexAccordion().plexPanel(0).as('primerPanel');
        cy.get('@primerPanel').contains('TOOGLE INACTIVE');
        cy.get('@primerPanel').plexBool('name="activo"', true);
        cy.get('@primerPanel').contains('TOOGLE ACTIVE');
        cy.plexAccordion(0);
        cy.plexAccordion(1);
        cy.plexAccordion().plexPanel(1).contains('SEGUNDO PANEL');
        cy.eyesCheckWindow('end - accordion');
        cy.eyesClose();

    });
});