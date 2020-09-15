/// <reference types="Cypress" />

context('float', () => {
    before(() => {
        cy.visit('/float');
    });

    it('test bool', () => {
        cy.plexFloat('name="valor"', '20');
        cy.get('[data-testid="modelo"]').contains(20);

        cy.plexFloat('name="valor2"', "-9")
            .parent().parent().parent()
            .validationMessage('El valor debe ser mayor a 10');
    });
});