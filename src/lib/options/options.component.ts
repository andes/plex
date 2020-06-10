import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';


export interface IPlexOptionsItems {
    key: string;
    label: string;
}

@Component({
    selector: 'plex-options',
    template: `
        <div class="row">
            <div class="d-flex col flex-wrap">
                <ng-container *ngFor="let item of items">
                    <button class="btn btn-primary btn-sm option-grow m-0" (click)="onOptionsClick(item)" [class.active]="active === item.key">
                        {{ item.label }}
                    </button>
                </ng-container>
            </div>
        </div>
    `
})
export class PlexOptionsComponent implements OnInit, OnChanges {

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

    ngOnChanges(changes: SimpleChanges) {
        if (changes.items) {
            this.checkKey();
        }
    }

    onOptionsClick(item: IPlexOptionsItems) {
        this.active = item.key;
        this.activated.emit(item.key);
    }

    private checkKey() {
        const isKeyPresent = this.items.some(item => item.key === this.active);
        if (!isKeyPresent) {
            this.active = this.items[0].key;
            this.activated.emit(this.active);
        }
    }
}
