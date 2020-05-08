/// <reference types="Cypress" />


context('<plex-text>', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'text' });
        cy.visit('/text');
        cy.eyesCheckWindow('start - text');
    });
    after(() => {
        cy.eyesCheckWindow('end - text');
        cy.eyesClose();
    })

    it('plex-text type="text"', () => {

        // Input normal con FOCUS
        cy.plexText('name="usuario"').click().should('have.value', 'FOCUSED');
        cy.plexText('name="usuario"').clear();
        cy.plexText('name="usuario"').get('.form-control-feedback').should('contain', 'Valor requerido');
        cy.plexText('name="usuario"', 'Max Ernst').should('not.have', '.form-control-feedback');


    });

    it('plex-text type="email"', () => {
        // cy.eyesCheckWindow('start - text/email');

        // Email incorrecto
        cy.plexText('name="email"', 'email inválido 1').should('have', '.form-control-feedback');
        cy.plexText('name="email"').get('.form-control-feedback').should('contain', 'Formato incorrecto');

        // Email correcto
        cy.plexText('name=email').clear();
        cy.plexText('name="email"', 'plex@mailinator.com').should('not.have', '.form-control-feedback');

        // cy.eyesCheckWindow('end - text/email');
        // cy.eyesClose();
    });

    it('plex-text con validación de patrón', () => {

        // Texto que NO coincide con el patrón
        cy.plexText('name="patron"', 'ASD 123456789').should('have', '.form-control-feedback');
        cy.plexText('name="patron"').get('.form-control-feedback').should('contain', 'Formato incorrecto');

        // Texto que SI coincide con el patrón
        cy.plexText('name="patron"').clear();
        cy.plexText('name="patron"', 'André Breton y André Kértesz entran a un bar').should('not.have', '.form-control-feedback');

    });

    it('plex-text con mínimo 10 chars y debounce 1000ms', () => {

        // Texto incorrecto: con menos de 10 caracteres
        cy.plexText('name="nombre"', '12345').should('have', '.form-control-feedback');
        cy.plexText('name="nombre"').get('.form-control-feedback').should('contain', 'Debe ingresar un mínimo de 10 caracteres');

        // Texto incorrecto: con más de 15 caracteres
        cy.plexText('name="nombre"', '67890987654321').should('have', '.form-control-feedback');
        cy.plexText('name="nombre"').get('.form-control-feedback').should('contain', 'Puede ingresar un máximo de 15 caracteres');

        // Texto correcto: entre 10 y 15 caracteres
        cy.plexText('name="nombre"').clear();
        cy.plexText('name="nombre"', '1234567890 123').should('not.have', '.form-control-feedback');

    });

    it('plex-text multiline', () => {

        // Editor texto simple
        cy.plexTextArea('name="multi"', 'Este\nTexto\nEstá\nCortado en cuatro');

        // HTML Editor con texto en negrita
        cy.plexTextArea('name="contenido1"', '<strong>Este\nTexto\nEstá\nEn negrita</strong>')
        cy.get('.ql-container.ql-snow .ql-editor p').should('have', '<strong>');

        // HTML Editor con height = 500
        cy.plexTextArea('name="contenido2"').find('.ql-container.ql-snow').should(($el) => {
            expect($el).to.have.css('height', '500px');
        })
    });
});