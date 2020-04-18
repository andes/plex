import { Component, Input, ContentChild, AfterViewInit, AfterContentInit, AfterContentChecked, ComponentRef, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventEmitter } from 'events';

/**
 * ATENCION! SI NO SE ESTABLECE FOCO SE MANTIENE FUNCIONALIDAD ANTERIOR.
 *
 * TIENEN UN NGIF SI MAIN = 12
 * HACIENDO QUE EL CONTENIDO DEL SIDEBAR NO SE RENDERIZE.
 * SI SIMPLEMENTE LO OCULTO, PUEDE CAUSAR ERRORES QUE NO SABEMOS
 * NO TODOS LOS SIDEBAR DEBEN ESTAR PREPARADOS
 */

@Component({
    selector: 'plex-layout',
    template: `
    <section responsive>
        <div class="row">
            <div class="col-{{ main }} h-100"
                 [class.focused]="foco === 'main'"
                 [class.not-focused]="foco !== 'main'">
                <ng-content select="plex-layout-main"></ng-content>
            </div>
            <div class="col-{{ maxcolumns - main }} h-100"
                 *ngIf="(main < maxcolumns && !foco) || !!foco"
                 [hidden]="main === maxcolumns && foco"
                 [class.focused]="foco === 'sidebar'"
                 [class.not-focused]="foco !== 'sidebar'">
                <ng-content select="plex-layout-sidebar"></ng-content>
            </div>
        </div>
    </section>
    <ng-content select="plex-layout-footer"></ng-content>
  `,
})
export class PlexLayoutComponent {
    // Compatibility mode
    public maxcolumns = 12;
    @Input() main = 12;

    @Input() foco: 'main' | 'sidebar' = null;


    constructor() {
    }


}
