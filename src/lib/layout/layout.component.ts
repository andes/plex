import { Component, Input, ContentChild, AfterViewInit, AfterContentInit, AfterContentChecked, ComponentRef, ElementRef, DebugElement, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs-compat/Subscription';

/**
 * ATENCION! SI NO SE ESTABLECE FOCO SE MANTIENE FUNCIONALIDAD ANTERIOR.
 *
 * TIENE UN NGIF SI MAIN = 12
 * HACIENDO QUE EL CONTENIDO DEL SIDEBAR NO SE RENDERIZE.
 * SI SIMPLEMENTE LO OCULTO, PUEDE CAUSAR ERRORES QUE NO SABEMOS
 * NO TODOS LOS SIDEBAR DEBEN ESTAR PREPARADOS
 */

/**
 * Formas de uso:
 *
 * 1. Statico:
 *    Setear main
 * 2. Responsive manual
 *    Setear main=8 y manualmente cambiar el foco de atención
 * 3. Responsive Automatico
 *    Setear aspect=8 y usar >router-outlet> en el sidebar.
 *
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
export class PlexLayoutComponent implements AfterContentInit, OnInit, OnDestroy {
    // Compatibility mode
    public maxcolumns = 12;
    @Input() main = 12;

    @ContentChild(RouterOutlet, { static: true }) routerOutlet: RouterOutlet;

    @Input() aspect = null;

    @Input() foco: 'main' | 'sidebar' = null;


    private subscription1: Subscription;
    private subscription2: Subscription;

    ngOnInit() {
        if (this.aspect) {
            this.foco = 'main';
            this.main = 12;
        }
    }

    ngOnDestroy() {
        if (this.subscription1) {
            this.subscription1.unsubscribe();
        }
        if (this.subscription2) {
            this.subscription2.unsubscribe();
        }
    }
    ngAfterContentInit() {
        // MODO MANUAL
        if (!this.aspect) { return; }
        if (this.routerOutlet) {
            if (this.routerOutlet.isActivated) {
                this.main = this.aspect;
                this.foco = 'sidebar';
            } else {
                this.foco = 'main';
            }
            this.subscription1 = this.routerOutlet.activateEvents.subscribe(() => {
                this.main = this.aspect;
                this.foco = 'sidebar';
            });

            this.subscription2 = this.routerOutlet.deactivateEvents.subscribe(() => {
                this.main = 12;
                this.foco = 'main';
            });
        }
    }


    constructor() {
    }


}
