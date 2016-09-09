// https://github.com/angular/angular/blob/d2ad871279c410334314def0be5c5d0599f4368e/modules/%40angular/forms/src/directives/validators.ts
import { Component, OnInit, Input, Output, EventEmitter }   from '@angular/core';
import { FormGroup, FormControl }                           from '@angular/forms';

@Component({
    selector: 'plex-number',
    template: `
    <div [formGroup]="form">
        <div class="form-group" [ngClass]="{'has-error': control.touched && !control.valid }">

            <label >{{plexLabel}}</label>
            <input type="number" formControlName="{{plexName}}" class="form-control {{plexClass}}" placeholder="{{plexPlaceholder}}"

                [attr.minlength]="plexMinLength"
                [attr.maxlength]="plexMaxLength"
                [attr.readonly]="plexReadOnly"

                [attr.autofocus]="plexAutofocus"
                [attr.disabled]="plexDisabled"


                [(ngModel)]="plexModel" (ngModelChange)="updateData($event)"
            />

            <validation-messages [control]="control"></validation-messages>

        </div>
    </div>
    `,
})

export class PlexNumberComponent implements OnInit {
    @Input() control: FormControl;  // * requerido si o si: usado para identificar el control dentro del formulario
    @Input() form: FormGroup;       // * requerido si o si: usado para identificar el control dentro del formulario
    @Input() plexName: string;      // * requerido si o si: usado para identificar el control dentro del formulario

    // atributos html
    @Input() id: string;

    @Input() plexAutofocus: boolean;
    @Input() plexClass: boolean;
    @Input() plexDisabled: boolean; // Bug: Poder pasar una funcion a validar como parametro
    @Input() plexLabel: string;
    @Input() plexMaxLength: number;
    @Input() plexMinLength: number;
    @Input() plexModel: string;
    @Input() plexPlaceholder: string;
    // @Input() plexMax: number; // la validacion se hace en el controller
    // @Input() plexMin: number; // la validacion se hace en el controller
    // @Input() plexRequired: boolean; // la validacion se hace en el controller
    @Input() plexReadOnly: boolean;

    @Input() isError: boolean = false;

    constructor() {
    }

    ngOnInit() {
        // console.log("INIT:");
        // console.log("form: " + this.form);
        // console.log("control: " + this.control);
        // console.log("plexName: " + this.plexName);
        // console.log("plexPlaceholder: " + this.plexPlaceholder);
        // console.log(this.form.controls);
    }


    // note that this must be named as the input name + "Change"
    @Output() plexModelChange: any = new EventEmitter();

    updateData(value: any) {
        this.plexModel = value;
        this.plexModelChange.emit(value);
    }
}
