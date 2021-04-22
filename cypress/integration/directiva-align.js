context('directive align', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'align' });
        cy.visit('/directives/listado-sidebar/align');
        cy.eyesCheckWindow('start - align');
    });
    after(() => {
        cy.eyesCheckWindow('end - align');
        cy.eyesClose();
    });

    it('title (align) directive', () => {
        const alignValue = 'align = center';
        cy.get('plex-layout-sidebar plex-card:first').should('contain', alignValue);
    });
});
