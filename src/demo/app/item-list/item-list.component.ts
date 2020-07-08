import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../../../lib/dropdown/dropdown-item.inteface';

@Component({
    templateUrl: 'item-list.html',
})
export class ItemDemoComponent implements OnInit {

    lista = [
        {
            componente: 'PlexTextComponent',
            name: 'UNO',
            internals: {
                password: true
            },
            id: 1
        },
        {
            componente: 'PlexItemComponent',
            name: 'DOS',
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
            name: 'TRES',
            internals: {
                readonly: true
            },
            id: 3
        },
        {
            componente: 'PlexBoolComponent',
            name: 'CUATRO',
            internals: {
                type: 'slide',
                checkbox: false
            },
            id: 4
        },
    ];

    public dropitems: DropdownItem[];
    public opciones: any[];
    public modelo1 = { select: null, radio: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };
    public model1: any;
    public model2: any;
    public tModel: any;
    tModelFecha: { fechaHora: any; fecha: any; hora: any; horados: any; disabled: boolean; min: Date; minHora: any; maxHora: any; };

    ngOnInit() {
        // Template-Form1 model
        this.tModel = { valor: null };
        this.model1 = { valor: null };
        this.model2 = { valor: null };
        this.modelo1.select = this.modelo2.select = this.opciones;

        // plex-select
        this.opciones = [{
            id: 1,
            nombre: 'Hermano/a',
        },
        {
            id: 2,
            nombre: 'Padre',
        },
        {
            id: 3,
            nombre: 'Madre',
        },
        {
            id: 4,
            nombre: 'Abuelo/a',
        },
        {
            id: 5,
            nombre: 'Primo/a',
        }
        ];


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

    onScroll() {
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
        this.lista.push({ name: 'MAS ITEMS' } as any);
    }

}
