import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { PlexVisualizadorService } from '@andes/plex';
import { Plex } from '@andes/plex';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent implements OnInit {
    public field = '';
    public tooltip = 'Este es un tooltip<br>multilinea que ocupa mucho espacio';
    public data = [];
    documento = '45979360';

    public modelSelector;

    constructor(
        public plex: Plex,
        private ref: ChangeDetectorRef,
        public plexVisualizador: PlexVisualizadorService
    ) {
        this.plex.updateTitle('Bienvenido a Plex');
        this.loadData();
    }

    ngOnInit() {
        this.ref.detectChanges();
    }

    openVisualizador() {
        this.plexVisualizador.open(this.imagenes, 3);
    }

    public imagenes = [
        'https://www.prodapt.com/wp-content/uploads/user-icon.png',
        { url: 'https://someurl.to.pdf', ext: 'pdf' },
        { url: 'https://pbs.twimg.com/media/D1nedjKXQAAe-4v.jpg:large', ext: 'png' },
        'data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20id%3D"Layer_4"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20x%3D"0px"%20y%3D"0px"%0D%0A%09%20width%3D"480px"%20height%3D"535px"%20viewBox%3D"0%200%20480%20535"%20enable-background%3D"new%200%200%20480%20535"%20xml%3Aspace%3D"preserve">%0D%0A<g%20id%3D"Layer_3">%0D%0A%09<linearGradient%20id%3D"SVGID_1_"%20gradientUnits%3D"userSpaceOnUse"%20x1%3D"240"%20y1%3D"535"%20x2%3D"240"%20y2%3D"4.882812e-04">%0D%0A%09%09<stop%20%20offset%3D"0"%20style%3D"stop-color%3A%23C5C5C5"%2F>%0D%0A%09%09<stop%20%20offset%3D"1"%20style%3D"stop-color%3A%239A9A9A"%2F>%0D%0A%09<%2FlinearGradient>%0D%0A%09<rect%20fill%3D"url%28%23SVGID_1_%29"%20width%3D"480"%20height%3D"535"%2F>%0D%0A<%2Fg>%0D%0A<g%20id%3D"Layer_2">%0D%0A%09<path%20fill%3D"%23FFFFFF"%20d%3D"M347.5%2C250c0%2C59.375-48.125%2C107.5-107.5%2C107.5c-59.375%2C0-107.5-48.125-107.5-107.5%0D%0A%09%09c0-59.375%2C48.125-107.5%2C107.5-107.5C299.375%2C142.5%2C347.5%2C190.625%2C347.5%2C250z"%2F>%0D%0A%09<path%20fill%3D"%23FFFFFF"%20d%3D"M421.194%2C535C413.917%2C424.125%2C335.575%2C336.834%2C240%2C336.834c-95.576%2C0-173.917%2C87.291-181.194%2C198.166%0D%0A%09%09H421.194z"%2F>%0D%0A<%2Fg>%0D%0A<%2Fsvg>'
    ];
    guardar($event) {
        // Ejemplo de como limpiar el navbar
        this.plex.clearNavbar();
    }

    loadData() {
        const max = Math.random() * 20 + 5;
        for (let i = 0; i < max; i++) {
            this.data = [...this.data, { identificador: Math.round(Math.random() * 1000) + 1 }];
        }
    }

    helpClick() {
    }

    back() {
        alert('Navegando...');
    }
}
