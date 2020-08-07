/// <reference types="Cypress" />

context('tabs', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-tabs' });
        cy.visit('/tabs');
    });

    it('navega tabs', () => {

        cy.get('plex-layout plex-tabs:first')

        cy.eyesCheckWindow('tab selected');

        cy.plexTab('Tab 2')

        cy.get('plex-layout plex-tabs:first plex-tab:nth-child(2) > div.alert.alert-warning').should('contain.text', 'Contenido 2');

        cy.plexButtonIcon('chevron-right').click();

        cy.get('plex-layout plex-tabs:first plex-tab:nth-child(3) > div.alert.alert-danger').should('contain.text', 'Contenido 3');

        cy.eyesClose();

    });
});