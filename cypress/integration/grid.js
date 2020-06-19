/// <reference types="Cypress" />

context('grid', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-grid' });
        cy.visit('/grid');
    });

    it('test grid', () => {
        cy.eyesCheckWindow('plex-grid - start');

        cy.get('plex-layout-main plex-grid').first().should('have.attr', 'cols', '2');

        cy.eyesClose();

    });
});