/// <reference types="Cypress" />

context('label', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-label' });
        cy.visit('/label');
    });

    it('navega label', () => {

        cy.get('plex-layout plex-title:first');

        cy.get('plex-label:first plex-icon + div > span').should('contain.text', 'Comience buscando un paciente en la barra superior');

        cy.get('small:first');

        cy.get('plex-layout-sidebar plex-title:nth(2)');

        cy.get('plex-label:nth(1) plex-icon + div > span').should('contain.text', 'documento');

        cy.get('small:nth(1)').should('contain.text', '29.879.253');

        cy.eyesCheckWindow('plex-label');

        cy.eyesClose();

    });
});