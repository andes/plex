/// <reference types="Cypress" />

context('modal', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'modal' });
        cy.visit('/modal');
        cy.eyesCheckWindow('start - modal');
    });
    after(() => {
        cy.eyesCheckWindow('end - modal');
        cy.eyesClose();
    })

    it('test modal danger form 50%', () => {
        cy.plexButton('ACEPTAR').should('be.disabled');
        cy.plexRadio('name="motivos"', 2, true)
        cy.get('.mat-radio-label-content').eq(2).should('contain', 'Procesos Administrativos');
        cy.plexButton('ACEPTAR').click();
    });

    it('test modal warning long text 50%', () => {
        cy.plexButtonIcon('eye', 1).click();
        cy.get('plex-modal main').scrollTo('bottom').should('contain', 'correspondiente');
        cy.plexButton('ACEPTAR').click();
    });

    it('test modal success 25%', () => {
        cy.plexButtonIcon('eye', 2).click();
        cy.wrap('plex-modal').get('.plex-modal-content.sm').should('exist').should('contain', 'Puede usarse como confirm');
        cy.plexButton('ACEPTAR').click();
    });

    it('test modal info 80%', () => {
        cy.plexButtonIcon('eye', 3).click();
        cy.wrap('plex-modal').get('.plex-modal-content.lg').should('exist').should('contain', 'Columna');
        cy.plexButton('ACEPTAR').click();
    });
});