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
                 [class.not-focused]="foco && foco !== 'main'">
                <ng-content select="plex-layout-main"></ng-content>
            </div>
            <div class="col-{{ maxcolumns - main }} h-100"
                 *ngIf="(main < maxcolumns && !foco) || !!foco"
                 [hidden]="main === maxcolumns && foco"
                 [class.focused]="foco === 'sidebar'"
                 [class.not-focused]="foco && foco !== 'sidebar'">
                <ng-content select="plex-layout-sidebar"></ng-content>
                <span *ngIf="resizable" class="resizable-btn-wrapper" [class.resizable]="resizable" draggable="true">
                    <plex-button size="sm" (click)="expandir($event)" (dragover)="expandir($event)" type="link" icon="pico-izquierda"></plex-button>
                    <hr class="divisor">
                    <plex-button size="sm" (click)="contraer($event)" (dragover)="contraer($event)" type="link" icon="pico-derecha" ></plex-button>
                </span>
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

    // Sidebar expandible
    @Input() resizable: boolean;
    @Input() min: 2 | 3 | 4 = 3;
    @Input() max: 6 | 7 | 8 | 9 | 10 = 6;
    @Input() steps: 0 | 1 | 2 | 3 = 0;

    public sidebarSize = this.maxcolumns - this.main;

    private subscription1: Subscription;
    private subscription2: Subscription;

    constructor() {
    }

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

    // Sidebar expandible
    public contraer() {
        if (this.steps > 0 && this.main < this.max && this.sidebarSize > this.min) {
            this.main++;
            this.main = this.main + this.steps - 1;
        } else {
            this.sidebarSize = this.min;
            this.main = this.maxcolumns - this.sidebarSize;
        }
    }

    public expandir(max) {
        if (this.main > max) {
            this.main = max;
        }

        /* define el valor maximo del sidebar */
        if (this.sidebarSize = this.max) {
            this.main = this.maxcolumns - this.sidebarSize;
        }
    }
}
