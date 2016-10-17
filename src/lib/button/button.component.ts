import { ViewChild, ContentChild, Component, OnInit, Input, forwardRef, ElementRef, Renderer }   from '@angular/core';
import {  ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'plex-button',
   templateUrl: 'button.html',
   providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexButtonComponent),
            multi: true,
        }
    ]
})
export class PlexButtonComponent {
  private renderer: Renderer;
  @ViewChild('ref') ref: ElementRef;

  @Input() title: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() disabled: boolean

  constructor(renderer: Renderer) {
      this.renderer = renderer;
      this.type = "default";
  }
  // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {

    }
    registerOnChange(fn: any) {
        // this.onChange = function (value) {
        //     fn(value == '' ? null : value);
        // };
    }
}
