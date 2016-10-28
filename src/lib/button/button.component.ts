import { ViewChild, ContentChild, Component, OnInit, Input, forwardRef, ElementRef, Renderer }   from '@angular/core';
import {  ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
  selector: 'plex-button',
  templateUrl: 'button.html',
//   host: {
//     '(click)': 'events($event)',
//   },
  providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexButtonComponent),
            multi: true,
        }
    ]
})
export class PlexButtonComponent implements OnInit, ControlValueAccessor {
  private renderer: Renderer;
  private onChange = (_: any) => { };
   
  @ViewChild('ref') ref: ElementRef;
  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() disabled: boolean;
 
  constructor(renderer: Renderer) {
      this.renderer = renderer;
      this.type = "default";
      this.disabled = false;
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
    registerOnTouched(fn: any){
    }
    registerOnChange(fn: any):void {
    }

//     events(event : Event) {
//        this.disabled = true;
//   }

}
