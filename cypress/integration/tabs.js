/// <reference types="Cypress" />

context('tabs', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-tabs' });
        cy.visit('/tabs');
    });

    it('navega tabs', () => {

        cy.get('plex-layout plex-tabs:first')

        cy.eyesCheckWindow('tab selected');

        cy.plexTab('Tab 2').click()

        cy.get('plex-layout plex-tabs:first').find('plex-tab').eq(1).contains('Contenido 2');

        cy.plexButtonIcon('chevron-right').click();

        cy.get('plex-layout plex-tabs:first').find('plex-tab').eq(2).contains('Contenido 3');

        cy.eyesClose();

    });
});