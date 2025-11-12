import { Component, Input, OnInit } from '@angular/core';
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
                                        <canvas baseChart [datasets]="chart.dataset" [labels]="chart.labels" [options]="chart.options" [legend]="false"
                                            [type]="'line'">
                                        </canvas>
                                    </div>
                                </div>
                            </div>
                            <div *ngIf="plex.userInfo" class="userinfo hidden-sm-down">
                                <div>
                                    <span>{{ plex.userInfo.usuario.nombreCompleto }}</span><br><span *ngIf="plex.userInfo.organizacion">{{ plex.userInfo.organizacion.nombre }}</span>
                                </div>
                                <div class="user-menu">
                                    <div nav-item>
                                        <plex-icon name="menu-down" size="lg" class="hover"></plex-icon>
                                        <plex-title titulo="Mis Datos"></plex-title>
                                        <ng-content select=".user-profile"></ng-content>
                                    </div>
                                </div>
                            </div>
                            <ng-content select="[main-menu]"></ng-content>
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
                <div role="main" class="content" [ngClass]="{'nav-top-margin': plex.navbarVisible, 'nav-top-no-margin': !plex.navbarVisible}">
                    <router-outlet></router-outlet>
                </div>`,
})

export class PlexAppComponent implements OnInit {
    @Input() type = 'inverse';

    public loginOpen = false;
    public online = true;
    public chart = {
        maxPoints: 10,
        dataset: [{ data: [] }],
        labels: [],
        options: {
            scales: {
                y: {
                    display: true,
                    grid: { display: false },
                    ticks: { beginAtZero: true }
                }
            },
            plugins: {
                tooltip: { enabled: true }
            }
        } as any,
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
        public plexVisualizador: PlexVisualizadorService
    ) {
        this.initAppStatusCheck();
    }

    ngOnInit() {
        this.chart.labels = [];
        for (let i = 0; i < this.chart.maxPoints; i++) {
            this.chart.labels.push('');
        }

        for (let i = 0; i < this.chart.maxPoints; i++) {
            this.chart.dataset[0].data.push(1);
        }
    }
}
