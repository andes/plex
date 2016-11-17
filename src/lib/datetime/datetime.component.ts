import { ViewChild, ContentChild, Component, OnInit, Input, Output, forwardRef, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
// Importo las librerías de jQuery
let jQuery = window["jQuery"] = require('jquery/dist/jquery'); // @jgabriel: No encontré una forma más elegante de incluir jQuery
let moment = window["moment"] = require('moment/moment.js');
require('moment/locale/es.js');
require('./bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.js');

@Component({
    selector: 'plex-datetime',
    templateUrl: 'datetime.html',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexDateTimeComponent),
            multi: true,
        }
    ]
})
export class PlexDateTimeComponent implements OnInit {
    private format: string;
    private value: any;
    private onChange = (_: any) => { };
    private $element: any;
    @ContentChild(NgControl) control: any;

    // Input properties
    @Input('auto-focus') autofocus: boolean;
    @Input('type') type: string;
    @Input('label') label: string;
    @Input('placeholder') placeholder: string;
    // Eventos
    @Output('change') valueChange = new EventEmitter();

    constructor(private element: ElementRef, private renderer: Renderer) {
        moment.locale('es');
        this.placeholder = "";
        this.type = "datetime";
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        this.format = this.type == "date" ? "DD/MM/YYYY" : (this.type == "datetime" ? "DD/MM/YYYY HH:mm" : "HH:mm");
        this.$element = jQuery('INPUT', this.element.nativeElement.children[0]);
        this.$element.bootstrapMaterialDatePicker({
            lang: 'es',
            format: this.format,
            currentDate: this.value,
            okText: "Ok",
            cancelText: "Cancelar",
            clearButton: false,
            nowButton: false,
            switchOnClick: true,
            date: this.type == "date" || this.type == "datetime",
            time: this.type == "time" || this.type == "datetime"
        });
        this.$element.on('change', (event, date) => {
            this.onChange(date.toDate())
        });
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;

        if (this.$element) {
            this.$element.val(this.value ? moment(this.value).format(this.format) : null);
        }
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        this.onChange = (value) => {
            this.value = value;
            debugger;
            fn(value);
            this.valueChange.emit({
                value: value
            })
        };
    }
}