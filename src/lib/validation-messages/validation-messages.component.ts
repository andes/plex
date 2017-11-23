import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'plex-validation-messages',
    template: ` <div class="form-control-feedback" *ngIf="control.errors && control.errors.required">
                    <span>Valor requerido</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.format">
                    <span>Formato incorrecto</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.min">
                    <span>El valor debe ser mayor a {{control.errors.min.limit}}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.max">
                    <span>El valor debe ser menor a {{control.errors.max.limit}}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.minlength">
                    <span>Debe ingresar un mínimo de {{control.errors.minlength.requiredLength}} caracteres</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.maxlength">
                    <span>Puede ingresar un máximo de {{control.errors.maxlength.requiredLength}} caracteres</span>
                </div>`})
export class ValidationMessagesComponent {
    @Input() control: FormControl;

    constructor() { }
}
