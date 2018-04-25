import { NgForm } from '@angular/forms';
import { Component, Input, HostBinding, HostListener, Optional, forwardRef } from '@angular/core';

@Component({
    selector: 'plex-button',
    template: ` <ng-container *ngIf="type"  >
                    <button plexRipples class="btn btn-{{type}}" [disabled]="disabled" (click)="clickHandler($event)">
                        <i *ngIf="icon" class="mdi mdi-{{icon}}"></i>
                        <span *ngIf="label"> {{label}} </span>
                        <ng-content></ng-content>
                    </button>
                </ng-container>`,
})
export class PlexButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() type: string;
    @Input() validateForm: boolean;
    @Input() @HostBinding('attr.disabled') disabled: boolean;

    constructor( @Optional() private form?: NgForm) {
        this.type = 'default';
        this.disabled = false;
    }

    @HostListener('click')
    clickHandler($event: Event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        } else {
            // Si está asociado a un formulario, fuerza la validación de los controles
            if (this.validateForm && this.form) {
                for (let key in this.form.controls) {
                    this.form.controls[key].markAsDirty();
                }
                // Inyecta la propiedad para que sea fácilmente accesible desde los controladores
                if ($event) {
                    ($event as any).formValid = this.form.valid;
                }
            }
        }
    }
}
