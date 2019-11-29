Cypress.Commands.add('swal', (acction) => {
    return cy.get('div.swal2-modal').find(`.swal2-${acction}`).click({ force: true });
    // return cy.get('div.swal2-modal').then(($body) => {
    //     if ($body.hasClass('swal2-container')) {
    //         return cy.get(`.swal2-${acction}`).click({
    //             force: true
    //         })
    //     }
    // });
});

/**
 * selectize no renderiza las opciones hasta que no interactuas. Por esos en los select que son fijas
 * hay que hacer un click o escribir antes.
 */

Cypress.Commands.add('plexSelect', { prevSubject: 'optional' }, (subject, label, option) => {
    const selector = `plex-select[${label}]`;
    let element;
    if (subject) {
        element = cy.wrap(subject).find(selector)
    } else {
        element = cy.get(selector);
    }
    if (option !== null && option !== undefined) {
        if (typeof option === 'string') {
            element = element.children()
                .children('.selectize-control')
                .find('.selectize-dropdown-content')
                .find(`.option[data-value="${option}"]`, { force: true });
        } else {
            element.children().children('.selectize-control').click();
            element.find('.selectize-dropdown-content').children().eq(option);
        }
    } else {
        return element.children().eq(0);
    }
    return element;
});

Cypress.Commands.add('plexSelectType', { prevSubject: 'optional' }, (subject, label, data = null, clicked = true) => {
    const selector = `plex-select[${label}] input`;
    let element;
    if (subject) {
        element = cy.wrap(subject).find(selector);
    } else {
        element = cy.get(selector);
    }
    // element = element.first();
    if (data && typeof data === 'string') {
        const textForType = clicked ? `${data}{enter}` : data;
        element = element.type(textForType, {
            force: true
        });
    } else if (data) {
        if (data.clear) {
            element.type('{backspace}', { force: true });
        }
        if (data.text) {
            const textForType = clicked ? `${data.text}{enter}` : data.text;
            element = element.type(textForType, {
                force: true
            });
        }
    }
    return element.parent().parent().parent();
});

Cypress.Commands.add('plexSelectAsync', { prevSubject: 'optional' }, (subject, label, text, alias, option) => {
    if (subject) {
        cy.wrap(subject).plexSelectType(label, text, false);
        cy.wait(alias);
        cy.wrap(subject).plexSelect(label, option).click({ force: true });
    } else {
        cy.plexSelectType(label, text, false);
        cy.wait(alias);
        cy.plexSelect(label, option).click({ force: true });
    }
});

Cypress.Commands.add('isSelectedID', { prevSubject: 'element' }, (subject, value) => {
    return cy.wrap(subject).find(`.selectize-input .item[data-value="${value}"]`);
});

Cypress.Commands.add('isSelectedLabel', { prevSubject: 'element' }, (subject, label) => {
    return cy.wrap(subject).find(`.selectize-input .item`).contains(label);
});

Cypress.Commands.add('clearSelect', { prevSubject: 'element' }, (subject, id) => {
    if (!id) {
        return cy.wrap(subject).find('.mdi-close-circle').click();
    } else {
        return cy.wrap(subject).find(`.selectize-input .item[data-value="${id}"]`).find('.mdi-close-circle').click();

    }
});

Cypress.Commands.add('plexInt', { prevSubject: 'optional' }, (subject, label, text = null) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-int[${label}] input`);
    } else {
        element = cy.get(`plex-int[${label}] input`);
    }
    if (text) {
        element.type(text);
    }
    return element;
});

Cypress.Commands.add('plexPhone', { prevSubject: 'optional' }, (subject, label, text = null) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-phone[${label}] input`);
    } else {
        element = cy.get(`plex-phone[${label}] input`);
    }
    if (text) {
        element.type(text);
    }
    return element;
});

Cypress.Commands.add('plexText', { prevSubject: 'optional' }, (subject, label, text = null) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-text[${label}] input`).first();
    } else {
        element = cy.get(`plex-text[${label}] input`).first();
    }
    if (text) {
        element.type(text);
    }
    return element;
});

Cypress.Commands.add('plexTextArea', { prevSubject: 'optional' }, (subject, label, text = null) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-text[${label}] textarea`).first();
    } else {
        element = cy.get(`plex-text[${label}] textarea`).first();
    }
    if (text) {
        element.type(text);
    }
    return element.parent().parent().parent();
});


Cypress.Commands.add('plexButton', { prevSubject: 'optional' }, (subject, label) => {
    let element;
    if (subject) {

        element = cy.wrap(subject).find('plex-button').contains(label);
    } else {
        element = cy.get('plex-button').contains(label);
    }
    return element;
});

Cypress.Commands.add('plexButtonIcon', { prevSubject: 'optional' }, (subject, icon) => {
    let element;
    if (subject) {

        element = cy.wrap(subject).find(`plex-button i.mdi.mdi-${icon}`).parent();
    } else {
        element = cy.get(`plex-button i.mdi.mdi-${icon}`).parent();
    }
    return element;
});

Cypress.Commands.add('plexDatetime', { prevSubject: 'optional' }, (subject, label, data = null) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-datetime[${label}] input`)
    } else {
        element = cy.get(`plex-datetime[${label}] input`);
    }
    if (data && typeof data === 'string') {
        element.type(`${data}{enter}`);
    } else if (data) {
        if (data.clear) {
            element.clear();
        }
        if (data.text) {
            element.type(`${data.text}{enter}`);
        }
    }
    element = element.parent().parent().parent();
    return element;
});

Cypress.Commands.add('plexBool', { prevSubject: 'optional' }, (subject, label, checked = false) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-bool[${label}] input[type="checkbox"]`)
    } else {
        element = cy.get(`plex-bool[${label}] input[type="checkbox"]`);
    }
    if (checked) {
        element = element.check({ force: true });
    }
    return element;
});

Cypress.Commands.add('plexTab', { prevSubject: 'optional' }, (subject, label) => {
    let element;
    if (subject) {

        element = cy.wrap(subject).find(`plex-tabs li`).contains(label);
    } else {
        element = cy.get(`plex-tabs li`).contains(label);
    }
    return element;
});

Cypress.Commands.add('plexAccordion', { prevSubject: 'optional' }, (subject, index) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-accordion`);
    } else {
        element = cy.get(`plex-accordion`);
    }
    if (index !== undefined) {
        element.find('plex-panel .card .card-header').eq(index).click();
    }
    return element;
});

Cypress.Commands.add('plexPanel', { prevSubject: 'optional' }, (subject, index) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-panel`);
    } else {
        element = cy.get(`plex-panel`);
    }
    if (index !== undefined) {
        return element.eq(index);
    }
    return element;
});

Cypress.Commands.add('plexDropdown', { prevSubject: 'optional' }, (subject, label, option) => {
    let element;
    if (subject) {
        element = cy.wrap(subject).find(`plex-dropdown[${label}] button`);
    } else {
        element = cy.get(`plex-dropdown[${label}] button`);
    }
    if (option !== undefined && option !== null) {
        element.click();

        if (typeof option === 'string') {
            element.parent().find('ul.dropdown-menu').children().contains(option).click();
        } else {
            element.parent().find('ul.dropdown-menu').children().eq(option).click();
        }
    }
    return element;
});

Cypress.Commands.add('validationMessage', { prevSubject: true }, (subject, text) => {
    text = text || 'Valor requerido';
    return cy.wrap(subject).find('div[class="form-control-feedback"]').should('contain', text);
})


/**
 * @decrecated
 */
Cypress.Commands.add('selectOption', (label, value) => {
    return cy.get(`plex-select[${label}]`).children().children('.selectize-control').click()
        .find(`.option[data-value=${value}]`).click({
            force: true
        });
});

/**
 * @decrecated
 */

Cypress.Commands.add('selectWrite', (label, value) => {
    return cy.get(`plex-select[${label}] input`).first().type(`${value}{enter}`, {
        force: true
    });
});

