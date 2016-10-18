import { ViewChild, ContentChild, Component, OnInit, Input, forwardRef, ElementRef, Renderer } from '@angular/core';
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
export class PlexBoolComponent implements OnInit, ControlValueAccessor {
    private onChange = (_: any) => { };
    private value: boolean;

    // Propiedad
    @Input() label: string;
    @Input() type: string;

    constructor() {
        this.type = "checkbox";
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
