import { NgForm } from '@angular/forms';
import { Component, Input, HostBinding, HostListener, Optional, forwardRef } from '@angular/core';

@Component({
    selector: 'plex-button',
    template: `<ng-container *ngIf="type">
                    <button plexRipples style="pointer-events: auto" class="btn btn-{{type}} {{(size ? 'btn-' + size : '')}}" [disabled]="disabled">
                    <i *ngIf="icon" class="mdi mdi-{{icon}}" style="pointer-events: none"></i>
                        <span *ngIf="label" style="pointer-events: none"> {{label}} </span>
                        <ng-content *ngIf="!icon && !label"></ng-content>
                    </button>
               </ng-container>`,
})
export class PlexButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'default';
    @Input() size: 'lg' | 'sm' | 'block';
    @Input() validateForm: boolean | NgForm;
    @Input() @HostBinding('attr.disabled') disabled: boolean;
    /**
     * Previene el problema del click bubbling. Ver template para más usos de pointer-events
     */
    @Input() @HostBinding('style.pointer-events') pointerEvents = 'none';

    constructor(@Optional() private parentForm?: NgForm) {
        this.type = 'default';
        this.disabled = false;
        this.size = null;
    }

    @HostListener('click', ['event'])
    clickHandler() {
        // Si está asociado a un formulario, fuerza la validación de los controles
        if (this.validateForm) {
            const form: NgForm = (this.validateForm instanceof NgForm) ? (this.validateForm as NgForm) : this.parentForm;
            if (!form) {
                throw new Error('plex-button no pudo vincularse a ningún NgForm');
            }

            for (const key in form.controls) {
                form.controls[key].markAsDirty();
            }
            // Inyecta la propiedad para que sea fácilmente accesible desde los controladores
            if (event) {
                (event as any).formValid = form.valid;
            }
        }
    }
}
