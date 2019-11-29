/// <reference types="Cypress" />

context('select', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'select' });
        cy.visit('/select');
    });

    it('test accordion', () => {
        cy.server();
        cy.route('GET', '**/api/core/tm/paises**').as('paises');
        cy.eyesCheckWindow('select - main');

        cy.plexSelectType('name="select1"', 'Brasil').as('select1');
        cy.get('@select1').isSelectedLabel('Brasil');
        cy.get('@select1').isSelectedID('2');
        cy.get('@select1').clearSelect();
        cy.get('@select1').validationMessage();

        cy.plexSelect('name="selectmultiple"').as('selectMultiple');
        cy.plexSelectAsync('name="selectmultiple"', 'brasil', '@paises', 0);
        cy.plexSelectAsync('name="selectmultiple"', 'argentina', '@paises', 0);

        cy.get('@selectMultiple').isSelectedLabel('Brasil');
        cy.get('@selectMultiple').isSelectedLabel('Argentina');
        cy.get('@selectMultiple').clearSelect('57f523e269fe79a5980fc5eb');

        cy.plexSelect('label="Seleccione un país"').clearSelect();

        cy.eyesCheckWindow('select - end');

        cy.eyesClose();

    });
});