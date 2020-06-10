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

        cy.get('nav .title span').should('contain', 'Plex: UI/UX para ANDES');
        cy.plexButtonIcon('eye-off').click();

        cy.eyesCheckWindow('start - sin navbar');
        cy.get('plex-app nav').should('not.be.visible');

        cy.plexButtonIcon('eye').click();
        cy.get('nav .title span').should('contain', 'Plex: UI/UX para ANDES');

    });

});