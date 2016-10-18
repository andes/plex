import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'plex-validation-messages',
    templateUrl: 'validation-messages.html', 
})
export class ValidationMessagesComponent {
    @Input() control: FormControl;

    constructor() { }
}
