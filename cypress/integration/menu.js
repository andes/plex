/// <reference types="Cypress" />


context('menu-principal', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'menú principal (hamburguesa)' });
        cy.visit('/home');
        cy.eyesCheckWindow('start - menú principal');
    });
    after(() => {
        cy.eyesCheckWindow('end - menú principal');
        cy.eyesClose();
    })

    it('Mostrar y ocultar menú principal', () => {
        
        cy.get('.action.dropdown').click();

        cy.eyesCheckWindow('start - muestra menú principal');
        cy.get('.dropdown-menu.dropdown-menu-right').should('be.visible');

        cy.get('.action.dropdown.show').click();
        cy.get('.dropdown-menu.dropdown-menu-right').should('not.be.visible');

    });

});