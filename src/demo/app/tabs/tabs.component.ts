import { Plex } from './../../../lib/core/service';
import { Component, OnDestroy } from '@angular/core';
import { from, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    templateUrl: 'tabs.html',
})
export class TabsDemoComponent {
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

    constructor(private plex: Plex) {
    }


    public next() {
        this.activo++;
        if (this.activo > 2) {
            this.activo = 0;
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
