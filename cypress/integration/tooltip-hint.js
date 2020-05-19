context('tooltip & hint', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'tooltip-hint' });
        cy.visit('/tooltip-hint');
        cy.eyesCheckWindow('start - tooltip-hint');
    });
    after(() => {
        cy.eyesCheckWindow('end - tooltip-hint');
        cy.eyesClose();
    });


    it('title (tooltip) directive', () => {
        const tooltipText = 'El tooltip es un texto que refuerza la acción a realizar';
        cy.plexButton('tooltip').focus().tooltip(tooltipText).should('contain', tooltipText);
        cy.plexButton('tooltip').blur();
    });

    it.only('hint directive', () => {
        const hintText = '¿Sabías que... el hint es un texto que sugiere acciones o indica alguna novedad?';
        cy.get('#cdk-describedby-message-container div').eq(0).should('not.be.visible');
        cy.get('plex-hint').eq(0).find('a').focus().trigger('mouseover', { force: true });
        cy.get('#cdk-describedby-message-container div').eq(0).should('contain', hintText);
    });

});
