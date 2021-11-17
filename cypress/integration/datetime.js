/// <reference types="Cypress" />

context('datetime', () => {
    before(() => {
        cy.eyesOpen({ appName: 'PLEX', testName: 'datetime' });

        cy.visit('/datetime');
    });

    it('test datetime', () => {
        cy.eyesCheckWindow({ tag: 'datetime - main', ignore: { selector: 'pre' } });

        cy.plexDatetime('label="Ingrese la fecha y la hora del evento"', '01/01/2019');
        cy.plexDatetime('label="Fecha menor a"').click();
        cy.plexDatetime('label="Ingrese la fecha y la hora del evento"').find('input').should('have.value', '01/01/2019 00:00');

        cy.get('plex-layout-sidebar pre').contains('2019-01-01T03:00:00.000Z');

        cy.plexDatetime('label="Fecha menor a"', '01/01/1950');
        cy.plexDatetime('label="Fecha menor a"').validationMessage('El valor debe ser mayor a');

        cy.get('plex-layout-sidebar pre').contains('1950-01-01T03:00:00.000Z');

        cy.plexDatetime('name="hora"', '13:00');
        cy.plexDatetime('name="horaconmin"', '10:00');
        cy.plexDatetime('name="horaconmin"').validationMessage('El valor debe ser mayor a');
        cy.plexDatetime('name="horaconmin"', { clear: true, text: '14:00' });

        cy.plexDatetime('name="fechaSkip"').iconClick('menu-right');
        cy.plexDatetime('name="fechaSkip"').find('input').should('have.value', '02/01/1950 00:00');
        cy.plexDatetime('name="fechaSkip"').iconClick('menu-left');
        cy.plexDatetime('name="fechaSkip"').find('input').should('have.value', '01/01/1950 00:00');

        cy.plexDatetime('name="fechaSkip"').iconClick('calendar-clock');
        cy.eyesCheckWindow({ tag: 'datetime - calendario', ignore: { selector: 'pre' } });



        cy.get('.table.dtp-picker-days').find('td[data-date="31"]').click({ multiple: true });

        cy.eyesCheckWindow({ tag: 'datetime - hour pick', ignore: { selector: 'pre' } });

        cy.get('.dtp-picker-datetime').find('[id="h-0"]').click({ multiple: true, force: true });
        cy.get('.dtp-picker-datetime').find('[id="m-0"]').click({ multiple: true, force: true });

        cy.plexDatetime('name="fechaSkip"').find('input').should('have.value', '31/01/1970 00:00');
        cy.get('plex-layout-sidebar pre').contains('1970-01-31T03:00:00.000Z');

        cy.eyesCheckWindow({ tag: 'datetime - end', ignore: { selector: 'pre' } });

        cy.eyesClose();



    });
});