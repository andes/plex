import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '@andes/plex';
import * as moment from 'moment';

@Component({
    templateUrl: 'item-list.html',
    styles: [
        `
        .baja {
            color: #80b266;
        }
        .media {
            color: #C6B300;
        }
        .alta {
            color: #B70B0B;
        }
        .especial {
            color: #02111C;
        }
        `
    ]
})
export class ItemDemoComponent implements OnInit {

    colores = {
        prioridadBaja: {
            border: '#80b266',
            hover: '#4aa11b',
            background: '#e9f2e5',
            name: 'baja'
        },
        prioridadMedia: {
            border: '#d5c743',
            hover: '#b6a700',
            background: '#f8f5de',
            name: 'media'
        },
        prioridadAlta: {
            border: '#e4a4a4',
            hover: '#B70B0B',
            background: '#f8e6e6',
            name: 'alta'
        },
        prioridadEspecial: {
            border: '#7a6f93',
            hover: '#02111C',
            background: '#dddae3',
            name: 'especial'
        },
    };

    public opcionesRadio = [
        { id: 1, label: 'Baja' },
        { id: 2, label: 'Media' },
        { id: 2, label: 'media' }
    ];

    public modeloRadio: any = {
    };

    lista = [
        {
            selectable: true,
            selected: false,
            componente: 'PlexTextComponent',
            name: 'UNO',
            internals: {
                password: true
            },
            id: 1,
            colores: this.colores['prioridadAlta'],
            prioridad: 'alta'
        },
        {
            selectable: true,
            selected: false,
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
            id: 2,
            colores: this.colores['prioridadMedia'],
            prioridad: 'media'
        },
        {
            selectable: false,
            selected: false,
            componente: 'PlexIntComponent',
            name: 'TRES',
            internals: {
                readonly: true
            },
            id: 3,
            colores: this.colores['prioridadBaja'],
            prioridad: 'baja'
        },
        {
            selectable: false,
            selected: false,
            componente: 'PlexBoolComponent',
            name: 'CUATRO',
            internals: {
                type: 'slide',
                checkbox: false
            },
            id: 4,
            colores: this.colores['prioridadEspecial'],
            prioridad: 'especial'
        },
        {
            selectable: true,
            selected: false,
            componente: 'PlexTextComponent',
            name: 'CINCO',
            internals: {
                password: true
            },
            id: 5,
            colores: this.colores['prioridadAlta'],
            prioridad: 'alta'
        },
        {
            selectable: true,
            selected: false,
            componente: 'PlexItemComponent',
            name: 'SEIS',
            itemType: 'heading-item',
            internals: {
                password: true,
                items: [
                    'Nombre',
                    'Apellido'
                ]
            },
            id: 6,
            colores: this.colores['prioridadMedia'],
            prioridad: 'media'
        },
        {
            selectable: false,
            selected: false,
            componente: 'PlexIntComponent',
            name: 'SIETE',
            internals: {
                readonly: true
            },
            id: 7,
            colores: this.colores['prioridadBaja'],
            prioridad: 'baja'
        },
        {
            selectable: false,
            selected: false,
            componente: 'PlexBoolComponent',
            name: 'OCHO',
            internals: {
                type: 'slide',
                checkbox: false
            },
            id: 8,
            colores: this.colores['prioridadEspecial'],
            prioridad: 'especial'
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
    tModelFecha: { fechaHora: any; fecha: any; hora: any; horados: any; disabled: boolean; min: Date; minHora: any; maxHora: any };

    ngOnInit() {
        // Template-Form1 model
        this.tModel = { valor: null };
        this.model1 = { valor: null };
        this.model2 = { valor: null };
        this.modelo1.select = this.modelo2.select = this.opciones;

        // plex-select
        this.opciones = [
            {
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

        // this.onScroll();
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

    prioridad(i) {
        if (i < 3) {
            this.lista[i].prioridad = 'baja';
            this.lista[i].colores = this.colores['prioridadBaja'];
            return this.colores['prioridadBaja'];
        } else if (i >= 3 && i < 6) {
            this.lista[i].prioridad = 'media';
            this.lista[i].colores = this.colores['prioridadMedia'];
            return this.colores['prioridadMedia'];
        } else if (i >= 6 && i < 9) {
            this.lista[i].prioridad = 'alta';
            this.lista[i].colores = this.colores['prioridadAlta'];
            return this.colores['prioridadAlta'];
        } else if (i >= 9 && i < 12) {
            this.lista[i].prioridad = 'especial';
            this.lista[i].colores = this.colores['prioridadEspecial'];
            return this.colores['prioridadEspecial'];
        }
    }

    ordenarLista(prioridad) {
        this.lista = this.lista.sort((a: any, b: any) => {
            if (b && b.prioridad === prioridad) {
                return 1;
            } else if (a && a.prioridad === prioridad) {
                return -1;
            } else {
                return 0;
            }
        });
    }
}
