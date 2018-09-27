import { Component, OnInit, AfterViewInit, Input, forwardRef, Output, EventEmitter, ContentChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
    selector: 'plex-radio',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexRadioComponent),
            multi: true,
        }
    ],
    template: `<div class="form-group" [ngClass]="{'has-danger': (control.dirty || control.touched) && !control.valid }">
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
    @ContentChild(NgControl) public control: any;

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
                value: value
            });
        };
    }

    radioChange(event) {
        this.control.control.markAsTouched();
        this.onChange(event.value);
    }
}
