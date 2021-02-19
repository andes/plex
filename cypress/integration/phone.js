/// <reference types="Cypress" />


context('<plex-phone>', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'phone' });
        cy.visit('/phone');
        cy.eyesCheckWindow('start - phone');
    });
    after(() => {
        cy.eyesCheckWindow('end - phone');
        cy.eyesClose();
    })

    // plex-phone común y silvestre
    it('plex-phone required="false', () => {
        // Se ingresa valor válido
        cy.plexPhone('name="valor1"', '290000000')
            .should('not.have', '.form-control-feedback');
        
        // Se ingresa valor inválido (no se escribe, se espera valor vacío)
        cy.plexPhone('name="valor1"', 'Salvador Dalí').should('contain', '');
        
    });

    // plex-phone con ícono
    it('plex-phone con icon', () => {

        // Texto incorrecto: con menos de 10 caracteres
        cy.plexPhone('name="valor2"').get('plex-icon').should('exist');

    });

    // plex-phone con prefix y suffix
    it('plex-phone prefix y suffix', () => {

        // Prefix
        cy.plexPhone('name="valor3"')
            .get('span').should('contain', '(0299)');

        // Suffix
        cy.plexPhone('name="valor4"')
            .get('span').should('contain', '(particular)');

    });

    it('plex-phone model dinámico', () => {
    
        // Model null/undefined no debe mostrar errores
        cy.plexPhone('name="dinamico"')
            .get('span').should('contain', '');
            
        // Se asigna un modelo válido
        cy.plexButton('Setear modelo').click();

        // Se mantiene vacío
        cy.plexPhone('name="dinamico"')
            .get('span').should('contain', '');

        cy.plexPhone('name="dinamico"', '299000000');

    });

});