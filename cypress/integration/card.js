/// <reference types="Cypress" />

context('card', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-card' });
        cy.visit('/card');
    });

    it('navega card', () => {

        cy.get('plex-layout plex-grid:first').find('plex-card div').eq(0).click();

        cy.eyesCheckWindow('div selected');

        cy.eyesClose();

    });
});