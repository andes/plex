/// <reference types="Cypress" />

context('select', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'select' });
        cy.visit('/select');
    });

    it('test accordion', () => {

        cy.server();
        cy.route('GET', '**/api/core/tm/paises?nombre=brasil', [{
            id: 2,
            nombre: 'Brasil',
            continente: 'Latinoamerica',
        }]).as('paisesBrasil');

        cy.route('GET', '**/api/core/tm/paises?nombre=argentina', [{
            id: 1,
            nombre: 'Argentina',
            continente: 'Latinoamerica',
        }]).as('paisArgentina');


        cy.eyesCheckWindow('select - main');

        cy.plexSelectType('name="select1"', 'Brasil').as('select1');
        cy.get('@select1').isSelectedLabel('Brasil');
        cy.get('@select1').isSelectedID('2');
        cy.get('@select1').clearSelect();
        cy.get('@select1').validationMessage();

        cy.plexSelect('name="selectmultiple"').as('selectMultiple');
        cy.plexSelectAsync('name="selectmultiple"', 'brasil', '@paisesBrasil', 0);
        cy.plexSelectAsync('name="selectmultiple"', 'argentina', '@paisArgentina', 0);

        cy.get('@selectMultiple').isSelectedLabel('Brasil');
        cy.get('@selectMultiple').isSelectedLabel('Argentina');
        cy.get('@selectMultiple').clearSelect('2');

        cy.plexSelectType('name="selectmultiple"', '{esc}')

        cy.plexBool('name="soloLectura"', true);

        cy.get('@selectMultiple').clearSelect('1');



        cy.plexSelect('label="Seleccione un país"').clearSelect();

        cy.eyesCheckWindow('select - end');

        cy.eyesClose();

    });
});