context('directive tooltip', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'tooltip' });
        cy.visit('/directives/listado-sidebar/tooltip');
        cy.eyesCheckWindow('start - tooltip');
    });
    after(() => {
        cy.eyesCheckWindow('end - tooltip');
        cy.eyesClose();
    });

    it('title (tooltip) directive', () => {
        const tooltipText = 'El tooltip es un texto que refuerza la acción a realizar';
        cy.plexButton('tooltip').focus().tooltip(tooltipText).should('contain', tooltipText);
        cy.plexButton('tooltip').blur();
    });

});
