import { NgForm } from '@angular/forms';
import { Component, Input, HostBinding, HostListener, Optional } from '@angular/core';
import { PacienteService } from './../../demo/app/templates/service/paciente.service';

@Component({
    selector: 'plex-button',
    template: `
        <ng-container *ngIf="type">
                <button plexRipples style="pointer-events: auto" [tabIndex]="tabIndex" class="btn btn-{{type}} {{(size ? 'btn-' + size : '')}}" [disabled]="disabled">
                    <plex-icon
                        *ngIf="icon"
                        [name]="icon"
                        type="light"
                        [size]="size"
                        [style.pointer-events]="disabled ? 'none': null">
                    </plex-icon>
                    <span *ngIf="label" [style.pointer-events]="disabled ? 'none': null">
                        {{ label }}
                    </span>
                    <ng-content *ngIf="!icon && !label"></ng-content>
                </button>
            </ng-container>
    `,
})
export class PlexButtonComponent {
    @Input() tabIndex: number;
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

    // Mapping iconografico
    main = 12;
    @Input() sidebarSize: number;
    valor: number;

    public svgs = false;
    //public sidebarSize = window.innerWidth;

    constructor(private data: PacienteService, @Optional() private parentForm?: NgForm) {
        this.type = 'default';
        this.disabled = false;
        this.size = null;

        this.data.valorActual.subscribe(valor => this.valor = valor)
    }

    valueSidebar() {
        //this.sidebarSize = $event;
        console.log(this.sidebarSize)
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
