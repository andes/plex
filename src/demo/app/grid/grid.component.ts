import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './grid.component.html',
})
export class GridDemoComponent {

    colCount = 4;
    colType = 'auto';
    colsSm = 1;
    colsMd = 2;
    colsLg = 3;

    datos = [
        { label: '1', valor: 'mobile: una columna (todo el ancho)', type: 'success', color: '#00bcb4' },
        { label: '2', valor: 'tablet: grilla de dos columnas', type: 'info', color: '#EA1E79' },
        { label: '3', valor: 'desktop: grilla de tres columnas', type: 'default', color: '#92278e' },
        { label: '4', valor: 'texto secundario', type: 'warning', color: '#062837' },
        { label: '5', valor: 'texto secundario', type: 'success', color: '#0070cc' },
        { label: '6', valor: 'texto secundario', type: 'warning', color: '#66DFFF' },
        { label: '7', valor: 'texto secundario', type: 'warning', color: '#a0a0a0' },
        { label: '8', valor: 'texto secundario', type: 'warning', color: '#b9c512' }
    ];
}
