import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
    templateUrl: 'table.html',
})

export class TableDemoComponent {

    data$ = of([
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000000', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000000', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000000', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000000', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000000', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' },
        { nombre: 'andres', documento: '34934522', apellido: 'botta', fecha: new Date(2021, 0, 0), ciudad: 'rosario' },
        { nombre: 'mariano', documento: '10000000', apellido: 'santarelli', fecha: new Date(2020, 0, 0), ciudad: 'buenos aires' },
        { nombre: 'julio', documento: '20000000', apellido: 'botcho', fecha: new Date(2024, 0, 0), ciudad: 'mar del plata' },
        { nombre: 'gabo', documento: '15000000', apellido: 'cancelierie', fecha: new Date(1990, 0, 0), ciudad: 'pinamar' }
    ]);

    colsVisibles = {
        'col-1': true,
        'col-2': true,
        'col-3': true,
        'col-4': false,
        'col-5': false,
        'col-6': true,
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
            label: 'columna 1',
            sorteable: true,
            opcional: false,
            sort: (a: any, b: any) => a.nombre.localeCompare(b.nombre)
        },
        {
            key: 'col-2',
            label: 'columna 2',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.apellido.localeCompare(b.apellido)
        },
        {
            key: 'col-3',
            label: 'columna 3',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.documento.localeCompare(b.documento)
        },
        {
            key: 'col-4',
            label: 'columna 4',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.fecha.getTime() - b.fecha.getTime()
        },
        {
            key: 'col-5',
            label: 'columna 5',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.ciudad.localeCompare(b.ciudad),
        },
        {
            key: 'col-6',
            label: 'columna 6',
            sorteable: true,
            opcional: true,
            sort: (a: any, b: any) => a.ciudad.localeCompare(b.ciudad),
            right: true
        }
    ];

    public datos = [
        { label: 'edad', valor: '41 años', type: 'success' },
        { label: 'documento', valor: '29.879.253', type: 'info' },
        { label: 'sexo', valor: 'Masculino', type: 'default' },
        { label: 'género', valor: 'Hospital Provincial de Neuquen Castro Rendon', type: 'warning' },
        { label: 'fecha de nacimiento', valor: '14 de Julio de 1953', type: 'success' },
        { label: 'CUIL', valor: '20-16879253-5', type: 'warning' },
        { label: 'Nota', valor: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum sonnet.', type: 'warning' },
        { label: 'Comience buscando un paciente en la barra superior', valor: 'Ingrese al menos tres caracteres. Si la búsqueda no arroja el resultado esperado, presione el botón "Paciente Nuevo"', type: 'warning' }
    ];

    constructor(
    ) { }


    onScroll() {
        // tslint:disable-next-line:no-console
        console.log('VIRTUAL SCROLL');
    }
}
