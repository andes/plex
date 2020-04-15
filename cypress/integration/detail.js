/// <reference types="Cypress" />

context('detail', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-detail' });
        cy.visit('/detail');
    });

    it('test accordion', () => {
        cy.eyesCheckWindow('plex-detail - main');

        cy.get('plex-layout-sidebar .plex-box-content').scrollTo('bottom');

        cy.eyesCheckWindow('plex-detail - scrool');

        cy.get('plex-layout plex-help').click();

        cy.eyesCheckWindow('plex-detail - plex-help');

        cy.eyesClose();

    });
});