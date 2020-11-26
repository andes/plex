/// <reference types="Cypress" />

context('plex-radio', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-radio' });

        cy.visit('/radio');
    });

    it('test plex-radio', () => {
        cy.eyesCheckWindow('main - radio');

        cy.plexRadio('label="Selecciona un color"', 0);

        cy.plexRadioMultiple('label="Multiple seleccion"', 0);

        cy.eyesCheckWindow('start - media seleccion');

        cy.plexRadioMultiple('label="Multiple seleccion"', 1);

        cy.eyesCheckWindow('seleccion completa');


    });
});