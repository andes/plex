import { ViewChild, ContentChild, Component, OnInit, Input, forwardRef, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'plex-select',
    templateUrl: 'select.html',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexSelectComponent),
            multi: true,
        }
    ]
})
export class PlexSelectComponent implements OnInit {
    private renderer: Renderer;
    private onChange = (_: any) => { };
    @ViewChild('ref') ref: ElementRef;
    @ContentChild(NgControl) control: any;

    // Input properties
    @Input('auto-focus') autofocus: boolean;
    @Input() label: string;
    @Input() placeholder: string;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
        this.placeholder = "";
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        $('#select-beast').selectize({
            sortField: 'text'
        });
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {

    }
    registerOnChange(fn: any) {
        this.onChange = function (value) {
            fn(value == '' ? null : value);
        };
    }
}