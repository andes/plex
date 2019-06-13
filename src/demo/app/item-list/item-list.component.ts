import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../../../lib/dropdown/dropdown-item.inteface';
import { PlexItemComponent } from '../../../lib/item-list/item-list.component';

@Component({
    templateUrl: 'item-list.html',
})
export class ItemDemoComponent {

    layout = {
        completo: true,
        contenido: false
    }

    templateModel = {
        nombre: 'Andrrr',
        apellido: 'Botho',
    };


    lista = [
        {
            componente: 'PlexTextComponent',
            name: 'PlexTextComponent',
            internals: {
                password: true
            },
            id: 1
        },
        {
            componente: 'PlexItemComponent',
            name: 'PlexItemComponent',
            itemType: 'heading-item',
            internals: {
                password: true,
                items: [
                    'Nombre',
                    'Apellido'
                ]
            },
            id: 2
        },
        {
            componente: 'PlexIntComponent',
            name: 'PlexIntComponent',
            internals: {
                readonly: true
            },
            id: 3
        },
        {
            componente: 'PlexBoolComponent',
            name: 'PlexBoolComponent',
            internals: {
                type: 'slide',
                checkbox: false
            },
            id: 4
        },
    ];

    public dropitems: DropdownItem[];

    public model1: any;
    public model2: any;
    public tModel: any;
    tModelFecha: { fechaHora: any; fecha: any; hora: any; horados: any; disabled: boolean; min: Date; minHora: any; maxHora: any; };

    ngOnInit() {
        // Template-Form1 model
        this.tModel = { valor: null };
        this.model1 = { valor: null };
        this.model2 = { valor: null };

        this.tModelFecha = {
            fechaHora: null,
            fecha: null,
            hora: null,
            horados: null,
            disabled: false,
            min: new Date(1970, 0, 1),
            minHora: moment().add(30, 'minutes'),
            maxHora: moment().add(180, 'minutes')
        };

        this.dropitems = [
            { label: 'Ir a inicio', icon: 'flag', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'pencil', route: '/ruta-rota' },
            { label: 'Item con handler', icon: 'eye     ', handler: (() => { alert('Este es un handler'); }) }
        ];
    }

    toggleLayout(layout) {
        layout.completo = false;
        layout.contenido = false;
        layout[String(layout)] = true;
    }

}
