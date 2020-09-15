import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { hasRequiredValidator } from '../core/validator.functions';

@Component({
    selector: 'plex-radio',

    template: `<div class="form-group" [ngClass]="{'has-danger': (control.dirty || control.touched) && !control.valid }">
                <label *ngIf="label" class="form-control-label">{{label}}
                    <span *ngIf="control.name && esRequerido" class="requerido"></span>
                </label>
                <mat-radio-group [(ngModel)]="value">
                    <mat-radio-button *ngFor="let item of data" [value]="item.id" [disabled]="readonly" (change)="radioChange($event)" [ngClass]="{'d-block': type == 'vertical'}">
                        {{item.label || item.text}}
                     </mat-radio-button>
                 </mat-radio-group>
                 <!-- Validation -->
                 <plex-validation-messages *ngIf="(control.dirty || control.touched) && !control.valid" [control]="control"></plex-validation-messages>
               </div>
              `
})
export class PlexRadioComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    public value: any;

    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    constructor(
        @Self() @Optional() public control: NgControl,
    ) {
        if (this.control) {
            this.control.valueAccessor = this;
        }
    }
    // Propiedad públicas
    @Input() data: any[];
    @Input() label: string;
    @Input() readonly: boolean;
    @Input() type: 'vertical' | 'horizontal' = 'vertical';
    @Output() change = new EventEmitter();

    // Funciones privadas
    private onChange = (_: any) => { };

    // Inicialización
    ngOnInit() {
    }

    ngAfterViewInit() { }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;
    }

    // Actualización Vista -> Modelo
    registerOnTouched(fn: any) { }
    registerOnChange(fn: any): void {
        this.onChange = (value) => {
            fn(value);
            this.change.emit({
                value
            });
        };
    }

    radioChange(event) {
        this.control.control.markAsTouched();
        this.onChange(event.value);
    }
}
