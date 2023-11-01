import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
    templateUrl: 'table.html',
})

export class TableDemoComponent {

    data$ = of([
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000005', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000003', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000006', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000007', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000005', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000003', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000002', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000001', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000003', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000002', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000001', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' }
    ]);

    colsVisibles = {
        'col-1': true,
        'col-2': true,
        'col-3': true,
        'col-4': false,
        'col-5': false,
        'col-6': true,
    };

    colsVisibles2 = {
        'col-1': true,
        'col-2': true,
        'col-3': true,
    };

    // Permite :hover y click()
    @Input() selectable = true;

    // Muestra efecto de selección
    @Input() selected = false;

    public sortBy: string;
    public sortOrder = 'desc';
    botonera = true;

    public columns = [
        {
            key: 'col-1',
            label: 'Nombre',
            sorteable: true,
            opcional: false,
            sort: (a: any, b: any) => a.nombre.localeCompare(b.nombre)
        },
        {
            key: 'col-2',
            label: 'Apellido',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.apellido.localeCompare(b.apellido),
            filterBy: (a) => a.apellido
        },
        {
            key: 'col-3',
            label: 'Documento',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.documento.localeCompare(b.documento),
            filterBy: (a) => a.documento

        },
        {
            key: 'col-4',
            label: 'Fecha',
            sorteable: false,
            opcional: true,
        },
        {
            key: 'col-5',
            label: 'Localidad',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.ciudad.localeCompare(b.ciudad),
        },
        {
            key: 'col-6',
            label: '',
            sorteable: true,
            opcional: false,
            right: true,
        }
    ];

    public columns2 = [
        {
            key: 'col-1',
            label: 'Nombre',
            sorteable: true,
            opcional: false,
            sort: (a: any, b: any) => a.nombre.localeCompare(b.nombre)
        },
        {
            key: 'col-2',
            label: 'Apellido',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.apellido.localeCompare(b.apellido),
            filterBy: (a) => a.apellido
        },
        {
            key: 'col-3',
            label: 'Documento',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.documento.localeCompare(b.documento),
            filterBy: (a) => a.documento

        }
    ];

    constructor(
    ) { }


    onScroll() {
        // tslint:disable-next-line:no-console
        console.log('VIRTUAL SCROLL');
    }
}
