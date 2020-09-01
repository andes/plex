/// <reference types="Cypress" />

context('bool', () => {
    before(() => {
        cy.visit('/int');
    });

    it('test bool', () => {
        cy.plexInt('label="Ingrese la edad del paciente"', '20');
        cy.get('[data-testid="modelo"]').contains(20);

        cy.plexInt('name="valor2"', "-9")
            .parent().parent().parent()
            .validationMessage('El valor debe ser mayor a 1');


    });
});