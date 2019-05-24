import { Component, AfterViewInit, Input, OnInit } from '@angular/core';
import { DropdownItem } from '../../lib/dropdown/dropdown-item.inteface';

@Component({
    selector: 'plex-item',
    template: ` 
                    <div class="d-flex flex-row justify-content-between align-items-center py-2">
                        <div class="d-flex flex-row">
                            <input *ngIf="checkbox" class="align-self-center" type="checkbox" alt="">        
                            <img class="item-img mr-4" src="{{ imagen }}" alt="">        
                            <article class="d-flex flex-column text-left align-self-center"> 
                                    <h6 class="d-flex flex-row mt-2">
                                    <strong>
                                    <ng-content selector="span[plex-title]"> </ng-content>
                                    </strong>
                                    </h6>
                                    <small>{{ subtitulo }}</small> 
                                    </article>
                                    </div>
                        <!-- Botonera -->
                        <div class="d-flex flex-row">
                            <plex-badge class="mr-2" type="warning">{{ badge }}</plex-badge>
                            <plex-button class="mr-2" type="success" type="sm" icon="mdi mdi-pencil">Editar</plex-button>
                            <plex-button class="mr-2" type="warning" type="sm" icon="mdi mdi-eye">Ver</plex-button>
                            <plex-dropdown *ngIf="dropdown" type="sm" icon="mdi mdi-arrow-down" [items]="dropitems"></plex-dropdown>
                        </div>
                    </div>
                    <hr>
                `,
})


export class PlexItemComponent {
    @Input() checkbox: boolean;
    @Input() imagen: string;
    @Input() titulo: string;
    @Input() subtitulo: string;
    @Input() badge: string;
    @Input() dropdown: boolean;

    mostrarDropdown() {
        this.dropdown = !this.dropdown;
    }

    public dropitems: DropdownItem[];

ngOnInit() {
    
    this.dropitems = [
        { label: 'Ir a inicio', icon: 'flag', route: '/incio' },
        { label: 'Ir a ruta inexistente', icon: 'pencil', route: '/ruta-rota' },
        { label: 'Item con handler', icon: 'eye     ', handler: (() => { alert('Este es un handler'); }) }
    ];
}

}
