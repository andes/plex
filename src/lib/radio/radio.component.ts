import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { hasRequiredValidator } from '../core/validator.functions';

@Component({
    selector: 'plex-radio',

    template: `<div class="form-group" [ngClass]="{'has-danger': (control.dirty || control.touched) && !control.valid }">
                <label *ngIf="label" class="form-control-label">{{label}}
                    <span *ngIf="control.name && esRequerido" class="requerido"></span>
                </label>
                <ng-container *ngIf="!multiple">
                    <mat-radio-group [(ngModel)]="value">
                        <mat-radio-button *ngFor="let item of data" [value]="item[keyField]" [disabled]="readonly" (change)="radioChange($event)" [class.d-block]="type == 'vertical'">
                        <span class="wrap-mat-radio-label">
                            {{ item[labelField] || item.text }}
                        </span>
                         </mat-radio-button>
                     </mat-radio-group>
                </ng-container>
                <ng-container *ngIf="multiple">
                    <mat-checkbox *ngFor="let item of data"
                                  [disabled]="readonly"
                                  [(ngModel)]="multipleCheck[item[keyField]]"
                                  (click)="$event.stopPropagation()"
                                  (change)="multipleChange()"
                                  [class.d-block]="type == 'vertical'"
                                  [class.ml-2]="type == 'horizontal'"
                    >
                        <span class="wrap-mat-checkbox-label">
                            {{ item[labelField] }}
                        </span>
                    </mat-checkbox>
                </ng-container>
                 <!-- Validation -->
                 <plex-validation-messages *ngIf="(control.dirty || control.touched) && !control.valid" [control]="control?.control"></plex-validation-messages>
               </div>
              `
})
export class PlexRadioComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    public value: any;

    public multipleCheck = {};

    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    constructor(
        @Self() @Optional() public control: NgControl,
    ) {
        if (this.control) {
            this.control.valueAccessor = this;
        }
    }
    // Propiedad públicas
    @Input() keyField = 'id';

    @Input() labelField = 'label';

    @Input() data: any[];

    @Input() label: string;

    @Input() readonly: boolean;

    @Input() multiple = false;

    @Input() type: 'vertical' | 'horizontal' = 'vertical';

    @Output() change = new EventEmitter();

    // Funciones privadas
    private onChange = (_: any) => { };

    // Inicialización
    ngOnInit() {
    }

    ngAfterViewInit() { }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        if (this.multiple && Array.isArray(value)) {
            this.multipleCheck = {};
            value.forEach(item => this.multipleCheck[item[this.keyField]] = true);
        } else {
            this.value = value;
        }
    }

    // Actualización Vista -> Modelo
    registerOnTouched(fn: any) { }
    registerOnChange(fn: any): void {
        this.onChange = (value) => {
            fn(value);
            this.change.emit({
                value
            });
        };
    }

    radioChange(event) {
        this.control.control.markAsTouched();
        this.onChange(event.value);
    }

    multipleChange() {
        const checked = this.data.filter(item => this.multipleCheck[item[this.keyField]]);
        this.onChange(checked);
    }
}
