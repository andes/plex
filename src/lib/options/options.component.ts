import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


export interface IPlexOptionsItems {
    key: string;
    label: string;
}

@Component({
    selector: 'plex-options',
    template: `
        <div class="row">
            <div class="btn-group col">
                <ng-container *ngFor="let item of items">
                    <button class="btn btn-primary btn-sm btn-block m-0" (click)="onOptionsClick(item)" [class.active]="active === item.key">
                        {{ item.label }}
                    </button>
                </ng-container>
            </div>
        </div>
    `
})
export class PlexOptionsComponent implements OnInit {

    /**
     * Listado de items a mostrar
     */
    @Input() items: IPlexOptionsItems[];

    public active = '';

    /**
     * Emite la opción seleccionada
     */

    @Output() activated = new EventEmitter();


    /**
     * Activa una opción de forma dinamica.
     * @param key Clave del item.
     */
    activate(key: string) {
        const exist = this.items.find(item => item.key === key);
        if (exist) {
            this.active = key;
        }
    }

    ngOnInit() {
        if (this.items.length > 0) {
            this.active = this.items[0].key;
        }
    }

    onOptionsClick(item: IPlexOptionsItems) {
        this.active = item.key;
        this.activated.emit(item.key);
    }
}