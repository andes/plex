import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    selector: 'plex-bool',
    template: ` <!-- Slide -->
                <mat-slide-toggle *ngIf="type == 'slide'" [(ngModel)]="value" (change)="innerChange()" [disabled]="readonly" (click)="$event.stopPropagation()">
                    <span  *ngIf="label">
                    {{label}}
                </span>
                </mat-slide-toggle>

                <!-- Checbox -->
                <mat-checkbox *ngIf="type == 'checkbox'" [(ngModel)]="value" (change)="innerChange()" [disabled]="readonly" (click)="$event.stopPropagation()">
                    <span *ngIf="label">
                    {{label}}
                </span>
                </mat-checkbox>
                `,
})
export class PlexBoolComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    // Propiedad públicas
    public value: boolean;
    @Input() label: string;
    @Input() type: string;
    @Input() readonly = false;
    @Output() change = new EventEmitter();

    // Funciones privadas
    private onChange = (_: any) => { };

    constructor(
        @Self() @Optional() public control: NgControl,
    ) {
        if (this.control) {
            this.control.valueAccessor = this;
        }
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
        this.onChange = (value) => {
            fn(value);
            this.change.emit({
                value
            });
        };
    }

    innerChange() {
        this.onChange(this.value);
    }
}
