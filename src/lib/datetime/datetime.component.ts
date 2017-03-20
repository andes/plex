import {
    ContentChild, Component, OnInit, Input, Output, forwardRef, ElementRef,
    Renderer, EventEmitter, AfterViewInit
} from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

// Importo las librerías de jQuery
let jQuery = window['jQuery'] = require('jquery/dist/jquery'); // @jgabriel: No encontré una forma más elegante de incluir jQuery
let moment = window['moment'] = require('moment/moment.js');
require('moment/locale/es.js');
require('./bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.ts');

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
export class PlexDateTimeComponent implements OnInit, AfterViewInit {
    private format: string;
    private value: any;
    private $button: any;
    private $input: any;
    @ContentChild(NgControl) control: NgControl;

    // Input properties
    @Input() autoFocus: boolean;
    @Input() type: string;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() disabled = false;
    @Input() min: String;
    @Input() max: String;
    // Eventos
    @Output() change = new EventEmitter();

    // Funciones públicas
    public onChange = (_: any) => { };

    constructor(private element: ElementRef, private renderer: Renderer) {
        moment.locale('es');
        this.placeholder = '';
        this.type = 'datetime';
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        this.format = this.type === 'date' ? 'DD/MM/YYYY' : (this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm');
        this.$input = jQuery('INPUT', this.element.nativeElement.children[0]);
        this.$button = jQuery('BUTTON', this.element.nativeElement.children[0]);
        this.$button.bootstrapMaterialDatePicker({
            lang: 'es',
            format: this.format,
            currentDate: this.value,
            okText: 'Ok',
            cancelText: 'Cancelar',
            clearButton: false,
            nowButton: false,
            switchOnClick: true,
            date: this.type === 'date' || this.type === 'datetime',
            time: this.type === 'time' || this.type === 'datetime',
            minDate : this.min,
            maxDate: this.max
        });
        this.$button.on('change', (event, date) => {
            this.onChange(date.toDate());
            this.writeValue(this.value);
        });
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;

        let temp = this.value ? moment(this.value).format(this.format) : null;
        if (this.$button) {
            this.$button.val(temp);
        }
        if (this.$input) {
            this.$input.val(temp);
        }
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        this.onChange = (value) => {
            if (typeof value === 'string') {
                let m = moment(value, this.format);
                if (m.isValid()) {
                    value = m.toDate();
                } else {
                    value = null;
                }
            }

            this.value = value;
            fn(value);
            this.change.emit({
                value: value
            });
        };
    }

    onBlur() {
        this.writeValue(this.value);
    }
}
