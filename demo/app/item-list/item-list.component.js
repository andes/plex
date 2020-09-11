"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemDemoComponent = /** @class */ (function () {
    function ItemDemoComponent() {
        this.lista = [
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
        this.modelo1 = { select: null, radio: null };
        this.modelo2 = {
            select: null,
            soloLectura: false,
            selectMultiple: null
        };
    }
    ItemDemoComponent.prototype.ngOnInit = function () {
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
            { label: 'Item con handler', icon: 'eye     ', handler: (function () { alert('Este es un handler'); }) }
        ];
    };
    ItemDemoComponent.prototype.onScroll = function () {
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
        this.lista.push({ name: 'MAS ITEMS' });
    };
    ItemDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'item-list.html',
        })
    ], ItemDemoComponent);
    return ItemDemoComponent;
}());
exports.ItemDemoComponent = ItemDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/item-list/item-list.component.js.map