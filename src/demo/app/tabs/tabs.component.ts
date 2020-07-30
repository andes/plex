import { Plex } from './../../../lib/core/service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DropdownItem } from '../../../lib/dropdown/dropdown-item.inteface';


@Component({
    templateUrl: 'tabs.html',
})
export class TabsDemoComponent implements OnInit {
    public activo = 1;
    public activoDinamico = 0;
    public mostrar = true;
    public tabs = [
        { label: 'account este es un ejemplo re largo', icon: 'account', color: 'procedimiento' },
        { label: 'amplifier', icon: 'amplifier', color: 'trastorno' },
        { label: 'amazon', icon: 'amazon', color: 'default' }
    ];
    public contenidoAsync = of([1, 2, 3]).pipe(
        // tslint:disable-next-line:no-console
        tap(console.log)
    );

    public items: DropdownItem[];

    constructor(private plex: Plex) {
    }

    ngOnInit() {
        this.items = [
            { label: 'Ir a inicio', icon: 'dna', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' },
            { divider: true },
            { label: 'Item con handler', icon: 'wrench', handler: (() => { alert('Este es un handler'); }) }
        ];
    }

    public next() {
        this.activo++;
        if (this.activo > 2) {
            this.activo = 0;
        }
    }

    public previous() {
        if (this.activo > 0) {
            this.activo = this.activo - 1;
        }
    }

    public cambio(value: number) {
        this.plex.toast('info', 'Tab seleccionado: ' + value);
        this.activo = value;
    }

    public close(value: number) {
        this.plex.toast('danger', 'Tab cerrado: ' + value);
        this.tabs.splice(value, 1);
        if (value < this.activoDinamico) {
            this.activoDinamico--;
        }
    }

    public add() {
        const icons = [
            'folder-outline',
            'folder-search-outline',
            'minus-circle',
            'smoking',
            'skull',
            'airplane-off',
            'folder-edit',
            'microphone-settings',
            'food-off',
            'checkbox-intermediate'];

        const random = Math.round(Math.random() * icons.length);
        this.tabs.push({ label: icons[random], icon: icons[random], color: 'default' });
        this.activoDinamico = this.tabs.length - 1;
    }
}
