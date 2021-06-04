context('directive hint', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'hint' });
        cy.visit('/directives/listado-sidebar/hint');
        cy.eyesCheckWindow('start - hint');
    });
    after(() => {
        cy.eyesCheckWindow('end - hint');
        cy.eyesClose();
    });
    it('hint directive content', () => {
        const hintText = '¿Sabías que... el hint es un texto que sugiere acciones o indica alguna novedad?';
        cy.get('#cdk-describedby-message-container div').eq(0).should('not.be.visible');
        cy.get('plex-hint').eq(0).find('span').focus().trigger('mouseover', { force: true });
        cy.get('#cdk-describedby-message-container div').eq(0).should('contain', hintText);
    });

    it.only('hint directive click', () => {
        cy.get('plex-hint').eq(0).find('span').focus().trigger('click', { force: true });
        cy.get('div.hint-click-test').should('contain', '¿Cuántos clicks fallidos hace uno en la vida?');
    });

});
