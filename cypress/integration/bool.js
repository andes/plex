/// <reference types="Cypress" />

context('bool', () => {
    before(() => {
        cy.visit('/bool');
    });

    it('test bool', () => {

        cy.contains('CHECKBOX INACTIVE');
        cy.plexBool('name="checkbox"', true);
        cy.contains('CHECKBOX ACTIVE');

        cy.contains('SLIDE INACTIVE');
        cy.plexBool('name="slide"', true);
        cy.contains('SLIDE ACTIVE');


        cy.get('plex-bool[name="readonly"]').click();

        cy.contains('SLIDE ACTIVE');

    });
});