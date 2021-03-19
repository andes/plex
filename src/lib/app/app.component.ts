import { Component, OnInit, Input, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { PlexVisualizadorService } from '../core/plex-visualizador.service';
import { Plex } from './../core/service';

@Component({
    selector: 'plex-app',
    template: ` <!--Navigation Bar-->
                    <nav [hidden]="!plex.navbarVisible" class="navbar-inverse fixed-top bg-{{type}}">

                        <div class="navbar-container">
                            <ng-content select="[navIcon]"></ng-content>

                            <div class="menu-item">
                                <ng-template #menuItem></ng-template>
                            </div>
                            <div class="title">
                                <ng-container *ngFor="let item of plex.title; let last = last">
                                    <a *ngIf="item.route" [routerLink]="item.route">{{item.name}}</a>
                                    <span *ngIf="!item.route">{{item.name}}</span>
                                    <span *ngIf="!last"> / </span>
                                </ng-container>
                            </div>
                        </div>

                        <div class="actions">

                            <!-- Novedades -->
                            <ng-content select="[nav-item]"></ng-content>

                            <!--App Status-->
                            <div class="action hidden-sm-down">
                                <plex-icon *ngIf="online" name="cloud-check-outline" type="light" size="lg"></plex-icon>
                                <plex-icon *ngIf="!online" name="cloud-off-outline" type="danger" size="lg"></plex-icon>
                                <div class="popover popover-bottom">
                                    <h3 *ngIf="online" class="popover-title bg-success text-white text-center">Conectividad OK</h3>
                                    <h3 *ngIf="!online" class="popover-title bg-danger text-white text-center">Problemas con la conectividad</h3>

                                    <div class="popover-content">
                                        <p *ngIf="online">El servicio ANDES funciona correctamente</p>
                                        <p *ngIf="!online">El servicio ANDES no está disponible</p>
                                        <canvas baseChart [datasets]="chart.dataset" [labels]="chart.labels" [options]="chart.options" [colors]="chart.colors" [legend]="false"
                                            [chartType]="'line'">
                                        </canvas>
                                    </div>
                                </div>
                            </div>
                            <div *ngIf="plex.userInfo" class="userinfo hidden-sm-down">
                                <div>
                                    <span>{{plex.userInfo.usuario.nombreCompleto}}</span><br><span *ngIf="plex.userInfo.organizacion">{{plex.userInfo.organizacion.nombre}}</span>
                                </div>
                            </div>
                            <!--Menu-->
                            <div role="button" *ngIf="plex.menu && plex.menu.length" class="action dropdown" tabindex="1" [ngClass]="{show: menuOpen}" (click)="toggleMenu(); $event.stopImmediatePropagation();" (keyup)="onMenuKeyup($event)">
                                <plex-icon type="light" size="xl" name="menu"></plex-icon>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li *ngFor="let item of plex.menu; let i = index">
                                        <!--Item con router asociado-->
                                        <ng-template [ngIf]="!item.divider && item.route">
                                            <a plexRipples class="dropdown-item" href="#" tabindex="{{i + 1}}" [routerLink]="item.route" routerLinkActive="active">
                                                <plex-icon *ngIf="item.icon" type="dark"  [prefix]="item.prefix" [name]="item.icon"></plex-icon>
                                                {{item.label}}
                                                </a>
                                        </ng-template>
                                        <!--Item con handler asociado-->
                                        <ng-template [ngIf]="!item.divider && item.handler">
                                            <a plexRipples class="dropdown-item" href="#" tabindex="{{i + 1}}" (click)="item.handler($event); false;">
                                                <plex-icon *ngIf="item.icon" type="dark"  [prefix]="item.prefix" [name]="item.icon"></plex-icon>
                                                {{item.label}}
                                                </a>
                                        </ng-template>
                                        <!--Divider-->
                                        <ng-template [ngIf]="item.divider">
                                            <div role="separator" class="dropdown-divider"></div>
                                        </ng-template>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <plex-loader *ngIf="plex.loaderCount > 0" class="loader" type="linear"></plex-loader>
                    </nav>


                <!-- Componente de notificaciones Toast -->
                <simple-notifications></simple-notifications>

                <ng-container *ngIf="plexVisualizador.state$ | async as files">
                    <plex-visualizador
                        [opened]="true"
                        [files]="files.documentos"
                        [index]="files.index"
                        (closed)="plexVisualizador.close()"
                        (click)="plexVisualizador.click()">
                    </plex-visualizador>
                </ng-container>

                <!-- Componente que muestra un ribbon indicando si se está en un entorno de desarrollo/demo -->
                <ng-content select="plex-ribbon"></ng-content>

                <!--Contenedor principal-->
                <div class="content" [ngClass]="{'nav-top-margin': plex.navbarVisible, 'nav-top-no-margin': !plex.navbarVisible}">
                    <router-outlet></router-outlet>
                </div>`,
})
export class PlexAppComponent implements OnInit {
    private unlisten: Function;
    // Referencia al DOM para injectar una componente de forma dinámica
    @ViewChild('menuItem', { static: true, read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

    @Input() type = 'inverse';
    public loginOpen = false;
    public menuOpen = false;
    public online = true;
    public chart = {
        maxPoints: 10,
        dataset: [{ data: [] }],
        labels: [],
        options: {
            // responsive: true,
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                enabled: false,
            }
        },
        colors: [{ pointBackgroundColor: 'grey' }]
    };

    private initAppStatusCheck() {
        this.plex.appStatus.subscribe((value) => {
            this.online = value.API === 'OK';
            this.chart.dataset = this.chart.dataset.slice();
            this.chart.dataset[0].data = this.chart.dataset[0].data.splice(1);
            this.chart.dataset[0].data.push(this.online ? 1 : 0);
        });
    }

    constructor(
        public plex: Plex,
        private renderer: Renderer2,
        public plexVisualizador: PlexVisualizadorService
    ) {
        this.initAppStatusCheck();
    }

    ngOnInit() {
        this.plex.setViewContainerRef(this.viewContainerRef);

        // Genera N labels vacíos
        this.chart.labels = [];
        for (let i = 0; i < this.chart.maxPoints; i++) {
            this.chart.labels.push('');
        }
        // Inicializa todo el dataset en 1 (= 'Ok')
        for (let i = 0; i < this.chart.maxPoints; i++) {
            this.chart.dataset[0].data.push(1);
        }

    }

    public toggleMenu() {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            this.unlisten = this.renderer.listen('document', 'click', (event) => {
                this.toggleMenu();
                this.unlisten();
            });
        } else {
            if (this.unlisten) {
                this.unlisten();
            }
        }
    }

    onMenuKeyup($event) {
        if ($event.keyCode === 32 || $event.keyCode === 13) {
            this.toggleMenu();
        }
    }
}
