import { NgForm } from '@angular/forms';
import { Component, Input, HostBinding, HostListener, Optional, OnInit } from '@angular/core';

@Component({
    selector: 'plex-button',
    templateUrl: `plex-button.html`,
})
export class PlexButtonComponent {
    private _async;
    showLoader = false;
    @Input() label: string;
    @Input() icon: string;
    @Input() type: string;
    @Input() size: 'lg' | 'sm' | 'block';
    @Input() validateForm: boolean | NgForm;
    @Input()
    get async(): boolean {
        return this._async;
    }
    set async(async) {
        this._async = async;
        if (this.async) {
            this.showLoader = true;
            this.disabled = true;
        } else {
            this.showLoader = false;
            this.disabled = false;
        }
    }

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