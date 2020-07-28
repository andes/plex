/// <reference types="Cypress" />

context('tabs', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-tabs' });
        cy.visit('/tabs');
    });

    it('abre y cierra tabs', () => {

        cy.get('plex-layout plex-tabs:first')

        cy.eyesCheckWindow('tab selected');

        cy.plexTab('Tab 2')

        cy.plexButtonIcon('chevron-right').click();

        cy.eyesClose();

    });
});