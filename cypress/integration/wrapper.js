/// <reference types="Cypress" />

context('wrapper', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-wrapper' });
        cy.visit('/wrapper');
    });

    it('test accordion', () => {
        cy.eyesCheckWindow('plex-wrapper - start');

        cy.get('plex-layout-main plex-wrapper').first().plexButtonIcon('chevron-down').click();

        cy.get('plex-layout-main plex-wrapper').eq(1).find('plex-button i.mdi.md-chevron-down').should('not.exist');

        cy.get('plex-layout-sidebar plex-wrapper').first().plexButtonIcon('chevron-down').click();

        cy.plexText('label="Buscar paciente"', 'TEST')

        cy.eyesCheckWindow('plex-wrapper - end');

        cy.eyesClose();

    });
});