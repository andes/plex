import { Component, OnInit, AfterViewInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'plex-radio-group',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexRadioGroupComponent),
            multi: true,
        }
    ],
    template: '<mat-radio-group [(ngModel)]="value"><ng-content></ng-content></mat-radio-group>'
})
export class PlexRadioGroupComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    public value: any;
    @Input() readonly = false;
    @Output() change = new EventEmitter();

    // Funciones privadas
    private onChange = (_: any) => { };

    // Inicialización
    ngOnInit() { }

    ngAfterViewInit() { }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        debugger;
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

    childChange(event) {
        this.onChange(event.value);
    }
}
