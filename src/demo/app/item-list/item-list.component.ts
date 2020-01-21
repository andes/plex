import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../../../lib/dropdown/dropdown-item.inteface';

@Component({
    templateUrl: 'item-list.html',
})
export class ItemDemoComponent implements OnInit {

    lista = [
        {
            name: 'UNO',
        },
        {
            name: 'DOS',
        },
        {
            name: 'TRES',
        },
        {
            name: 'CUATRO',
        },
        {
            name: 'CINCO',
        },
        {
            name: 'SEIS',
        },
        {
            name: 'SIETE',
        },
        {
            name: 'OCHO',
        },
        {
            name: 'NUEVE',
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
