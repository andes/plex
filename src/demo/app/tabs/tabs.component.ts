import { Plex } from './../../../lib/core/service';
import { Component, OnDestroy } from '@angular/core';

@Component({
    templateUrl: 'tabs.html',
})
export class TabsDemoComponent {
    public activo = 1;
    public activoDinamico = 0;
    public mostrar = true;
    public tabs = [
        { label: 'account', icon: 'account' },
        { label: 'amplifier', icon: 'amplifier' },
        { label: 'amazon', icon: 'amazon' }
    ];

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
        this.tabs.push({ label: icons[random], icon: icons[random] });
        this.activoDinamico = this.tabs.length - 1;
    }
}
