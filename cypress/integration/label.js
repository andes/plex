/// <reference types="Cypress" />

context('label', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-label' });
        cy.visit('/label');
    });

    it('navega label', () => {

        cy.get('plex-layout plex-title:first');

        cy.get('plex-label:first plex-icon + div > p').should('contain.text', 'Comience buscando un paciente en la barra superior');

        cy.get('small:first');

        cy.get('plex-layout plex-title:nth(2)').should('contain.text', 'Cronología');

        cy.get('p[dato]:nth(3)').should('contain.text', '27/11/2020');

        cy.eyesCheckWindow('plex-label');

        cy.eyesClose();

    });
});