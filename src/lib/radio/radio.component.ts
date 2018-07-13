import { PlexRadioGroupComponent } from './radio-group.component';
import { Component, OnInit, AfterViewInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'plex-radio',
    template: ` <mat-radio-button [disabled]="readonly" (change)="radioChange($event)" [value]="value" [name]="name">
                <span *ngIf="label">
                    {{label}}
                </span>
                </mat-radio-button>
                `,
})
export class PlexRadioComponent {
    // Propiedad públicas
    @Input() label: string;
    @Input() value: any;
    @Input() name: string;
    @Input() disabled: boolean;

    constructor(private radioGroup: PlexRadioGroupComponent) {
    }

    radioChange(event) {
        this.radioGroup.childChange(event);
    }
}
