import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'plex-validation-messages',
    template: ` <div class="form-control-feedback" *ngIf="control.errors && control.errors.customValidation">
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.required">
                    <span *ngIf="!mensaje">Valor requerido</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.format">
                    <span *ngIf="!mensaje">Formato incorrecto</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.pattern">
                    <span *ngIf="!mensaje">Formato incorrecto</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.email">
                    <span *ngIf="!mensaje">Formato incorrecto</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.min">
                    <span *ngIf="!mensaje">El valor debe ser mayor a {{control.errors.min.limit}}</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.max">
                    <span *ngIf="!mensaje">El valor debe ser menor a {{control.errors.max.limit}}</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.minlength">
                    <span *ngIf="!mensaje">Debe ingresar un mínimo de {{control.errors.minlength.requiredLength}} caracteres</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>
                <div class="form-control-feedback" *ngIf="control.errors && control.errors.maxlength">
                    <span *ngIf="!mensaje">Puede ingresar un máximo de {{control.errors.maxlength.requiredLength}} caracteres</span>
                    <span *ngIf="mensaje">{{ mensaje }}</span>
                </div>`})

export class ValidationMessagesComponent {
    @Input() control: FormControl;
    @Input() mensaje: string;

    constructor() { }
}
