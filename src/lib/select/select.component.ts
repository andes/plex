import {
    ViewChild,
    ContentChild,
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    forwardRef,
    ElementRef,
    Renderer
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NgControl,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
    SelectItem
} from './select-item';

// interface objectSelect{
//     id:string,
//     name:string
// }

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

export class PlexSelectComponent implements OnInit, ControlValueAccessor {
    private renderer: Renderer;
    private onChange = (_: any) => { };
    @ViewChild('ref') ref: ElementRef;
    @ContentChild(NgControl) control: any;

    //El array de datos que recibo desde la demo
    @Input() data: any[];
    //El array de datos que devuelvo a la demo
    @Output() dataChange = new EventEmitter();

    constructor(renderer: Renderer) {
        this.renderer = renderer;
        this.dataChange.emit(this.data)
    }


    ngOnInit() {

    }

    ngAfterViewInit() {

        }
        // Actualización Modelo -> Vista
    writeValue(value: any) {
            
            this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
        }
    

        // Actualización Vista -> Modelo
    registerOnTouched(fn: any) {
        

    }

    registerOnChange(fn: any): void {
        this.onChange = function (value) {
            //Me lo devuelve en json al modelo
            fn(value == '' ? null : JSON.parse(value));
        };
    }

    stringify(o: any): string {
        return JSON.stringify(o);
    }

   

}