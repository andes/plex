import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'item-list.html',
})
export class ItemDemoComponent {

    items = [
        {
            'checkbox' : false,
            'imagen' : false,
            'titulo' : 'Este es el titulo principal del item',
            'subtitulo' : 'Este es el subtitulo del item',
            'badge' : 'estado',
            'boton' : 'accion',
            'dropdown' : true,
        },
        {
            'checkbox' : true,
            'imagen' : true,
            'titulo' : 'Este es el titulo principal de otro item',
            'subtitulo' : 'Este es el subtitulo de otro item',
            'badge' : 'estado',
            'boton' : 'accion',
            'dropdown' : false,
        },
        {
            'checkbox' : false,
            'imagen' : false,
            'titulo' : 'Este es el titulo principal del item',
            'subtitulo' : 'Este es el subtitulo del item',
            'badge' : 'estado',
            'boton' : 'accion',
            'dropdown' : true,
        },
        {
            'checkbox' : true,
            'imagen' : true,
            'titulo' : 'Este es el titulo principal de otro item',
            'subtitulo' : 'Este es el subtitulo de otro item',
            'badge' : 'estado',
            'boton' : 'accion',
            'dropdown' : false,
        }
    ];



ngOnInit() {


}

}
