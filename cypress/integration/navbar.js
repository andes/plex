/// <reference types="Cypress" />


context('nav-bar', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'navbar' });
        cy.visit('/navbar');
        cy.eyesCheckWindow('start - navbar');
    });
    after(() => {
        cy.eyesCheckWindow('end - navbar');
        cy.eyesClose();
    })

    it('Mostrar y ocultar navbar', () => {

        cy.get('nav .title span').should('contain', 'Bienvenido a Plex');
        cy.plexButtonIcon('close').click();
        cy.get('nav .title span').should('not.contain', 'Bienvenido a Plex');
        cy.plexButtonIcon('eye').click();
        cy.get('nav .title span').should('contain', 'Bienvenido a Plex');

    });

});