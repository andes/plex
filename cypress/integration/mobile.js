/// <reference types="Cypress" />

describe('Andes main nav', () => {
    context('Viewport vertical, ancho >= 768px', () => {

        before(() => {
            cy.eyesOpen({ appName: 'PLEX', testName: 'main title' });
            cy.visit('/inicio');
            cy.viewport(768, 1280);
        });

        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
        });

        it('displays full header', () => {
            cy.get('nav .title').should('be.visible');
            cy.get('nav .actions .action').each(($el) => {
                cy.wrap($el).should('be.visible');
            });
            cy.get('nav .actions .dropdown').should('be.visible');

        });
    });
    context('Viewport vertical, ancho < 768px', () => {

        before(() => {
            cy.eyesOpen({ appName: 'PLEX', testName: 'main title' });
            cy.visit('/inicio');
            cy.viewport(767, 1280);
        });

        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
        });

        it('displays full header', () => {
            cy.get('nav .title').should('be.visible');
            cy.get('nav .actions .action:not(.dropdown)').each(($el) => {
                cy.wrap($el).should('not.be.visible');
            });
            cy.get('nav .actions .dropdown').should('be.visible');
        });
    });
});