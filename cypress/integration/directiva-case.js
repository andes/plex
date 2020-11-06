context('directive case', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'case' });
        cy.visit('/directives/listado-sidebar/case');
        cy.eyesCheckWindow('start - case');

        // Original:
        // 'este es Un TEXTO de prueba'

    });
    after(() => {
        cy.eyesCheckWindow('end - case');
        cy.eyesClose();
    });

    it('none', () => {
        const none = 'este es Un TEXTO de prueba';
        cy.get('div[case="none"]').should('have.text', none);

    });
    
    it('lowercase', () => {
        const lowercase = 'este es un texto de prueba';
        cy.document().then((doc) => {
            cy.expect(doc.querySelector('[case=lowercase]').innerText).equal(lowercase);
        });
    });
    it('uppercase', () => {
        const uppercase = 'ESTE ES UN TEXTO DE PRUEBA';

        cy.document().then((doc) => {
            cy.expect(doc.querySelector('[case=uppercase]').innerText).equal(uppercase);
        });
    });

    it('capitalize', () => {
        const capitalized = 'Este Es Un TEXTO De Prueba';
        cy.document().then((doc) => {
            cy.expect(doc.querySelector('[case=capitalize]').innerText).equal(capitalized);
        });
    });

    it('capitalizeFirst', () => {
        const capitalizedFirst = 'Este es Un TEXTO de prueba';
        cy.document().then((doc) => {
            cy.expect(doc.querySelector('[case=capitalize-first]').innerText).equal(capitalizedFirst);
        });
    });


});
