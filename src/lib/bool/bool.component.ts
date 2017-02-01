import { ViewChild, ContentChild, Component, OnInit, AfterViewInit, Input, forwardRef, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'plex-bool',
    templateUrl: 'bool.html',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexBoolComponent),
            multi: true,
        }
    ]
})
export class PlexBoolComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    // Propiedades privadas
    private value: boolean;

    // Propiedad públicas
    @Input() label: string;
    @Input() type: string;

    // Funciones privadas
    private onChange = (_: any) => { };

    constructor() {
        this.type = 'checkbox';
    }

    // Inicialización
    ngOnInit() { }

    ngAfterViewInit() { }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;
    }

    // Actualización Vista -> Modelo
    registerOnTouched(fn: any) { }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    innerChange() {
        this.onChange(this.value);
    }
}
