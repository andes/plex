import { ViewChild, ContentChild, Component, OnInit, Input, forwardRef, ElementRef, Renderer }   from '@angular/core';
import {  ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
    selector: 'plex-text',
    template: `<div class="form-group" [ngClass]="{'has-error': (control.dirty || control.touched) && !control.valid }">
                    <label *ngIf="label">{{label}}</label>
                    <input #ref type="text" class="form-control" (change)="onChange($event.target.value)" (input)="onChange($event.target.value)" >
                    <plex-validation-messages *ngIf="(control.dirty || control.touched) && !control.valid" [control]="control"></plex-validation-messages>
               </div>`,
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexTextComponent),
            multi: true,
        }
    ]
})
export class PlexTextComponent implements OnInit, ControlValueAccessor {
    private renderer: Renderer;
    private onChange = (_: any) => { };
    @ViewChild('ref') ref: ElementRef;
    @Input('auto-focus') autofocus: boolean;
    @Input() label: string;
    @ContentChild(NgControl) control: any;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.autofocus)
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
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
