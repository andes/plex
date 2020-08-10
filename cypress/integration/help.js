/// <reference types="Cypress" />

context('help', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-help' });
        cy.visit('/help');
    });

    it('abre y cierra help', () => {

        cy.get('plex-layout plex-help:first').plexButtonIcon('help-circle').click();

        cy.get('plex-layout plex-help').plexButtonIcon('informacion').click();

        cy.eyesCheckWindow('plex-help');

        cy.eyesClose();

    });
});