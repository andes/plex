/// <reference types="Cypress" />

context('button', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'button-badge' });

        cy.visit('/button-badge');
    });

    it('test button', () => {
        cy.server();
        cy.route({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            delay: 1000,
            response: {}
        })
        cy.eyesCheckWindow('main - button');

        cy.plexButton('Default').click();
        cy.plexButton('Default').should('have.attr', 'disabled');
        cy.wait(1000);
        cy.plexButton('Default').should('not.have.attr', 'disabled');

        cy.eyesClose();

    });
});