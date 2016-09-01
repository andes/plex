import { Component, Input }         from '@angular/core';
import { FormGroup, FormControl }   from '@angular/forms';

import { ValidationService }        from '/app/services/validation.service';

@Component({
    selector: 'validation-messages',
    // template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
    template: `
    <div class="help-block" *ngIf="errorMessage !== null">
        {{errorMessage}}
    </div>
    `

})

export class ValidationMessagesComponent {
    @Input() control: FormControl;
    constructor() { }

    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}
