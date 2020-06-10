/// <reference types="Cypress" />

context('template listado', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'template-listado' });
        cy.visit('/templates/listado-sidebar');
    });

    it('test accordion', () => {
        cy.eyesCheckWindow('main');

        cy.get('plex-title').plexButtonIcon('chevron-down').click();

        cy.eyesCheckWindow('modal');

        cy.plexButton('CANCELAR').click();

        cy.get('plex-list plex-item').eq(0).plexButtonIcon('eye').click();

        cy.eyesCheckWindow('item list selected');

        cy.get('plex-options button').eq(0).click();

        cy.eyesCheckWindow('plex-options');

        cy.plexTab('tab-2').click();

        cy.eyesCheckWindow('tab selected');

        cy.plexTab('tab-3').click();

        cy.eyesCheckWindow('accordion invert');

        cy.plexAccordion(0);
        cy.plexAccordion(2);

        cy.eyesCheckWindow('accordion open');

        cy.get('plex-help').plexButtonIcon('help-circle').click();

        cy.eyesCheckWindow('plex-help open');

        cy.eyesClose();

    });
});