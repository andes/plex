import { Component, OnInit } from '@angular/core';
import { Plex } from './../core/service';
import { DropdownItem } from './../dropdown/dropdown-item.inteface';

@Component({
    selector: 'plex-app',
    templateUrl: 'app.html',
})
export class PlexAppComponent implements OnInit {
    public loginOpen = false;
    public menuOpen = false;
    public online = true;
    public chart = {
        maxPoints: 10,
        dataset: [{ data: [] }],
        labels: [],
        options: {
            // responsive: true,
            scales:
            {
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
    }

    private initAppStatusCheck() {
        this.plex.appStatus.subscribe((value) => {
            this.online = value.API === 'OK';
            this.chart.dataset = this.chart.dataset.slice();
            this.chart.dataset[0].data = this.chart.dataset[0].data.splice(1);
            this.chart.dataset[0].data.push(this.online ? 1 : 0);
        });
    }

    constructor(public plex: Plex) {
        this.initAppStatusCheck();
    };

    ngOnInit() {
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
}
