/// <reference types="Cypress" />

context('help', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'plex-help' });
        cy.visit('/help');
    });

    it('Abre y cierra help', () => {

        const helpOpen = cy.get('plex-layout plex-help:first').plexButtonIcon('information-variant');
        helpOpen.click();
        cy.get('.card-body:first').should('contain.text', 'Organización');

        const helpClose = cy.get('plex-layout plex-help:first').plexButtonIcon('close');
        helpClose.click();

        cy.eyesCheckWindow('plex-help');

        cy.eyesClose();

    });

    it('Falla porque el botón está oculto por otro panel de plex-help', (done) => {

        const helpOpen = cy.get('plex-layout plex-help:first').plexButtonIcon('information-variant');
        helpOpen.click();

        const helpOpenFail = cy.get('plex-layout plex-help').eq(1).plexButtonIcon('help');
        helpOpenFail.click();

        cy.once('fail', (err) => {

            expect(err.message).to.include('`cy.click()` failed because this element');
            expect(err.message).to.include('is being covered by another element');

            done();
        });
    });
});