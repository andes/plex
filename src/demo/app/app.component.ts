import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Plex } from '../../lib/core/service';
import { DropdownItem } from './../../lib/dropdown/dropdown-item.inteface';

@Component({
    selector: 'plex-app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    // Hace que PlexService sea un singleton para toda la aplicación
    constructor(public plex: Plex) { }

    public columns = [
        {
            key: 'col-1',
            label: 'Título',
        },
        {
            key: 'col-2',
            label: 'Matrícula',
        },
        {
            key: 'col-4',
            label: 'Vencimiento/Estado',
        },
    ];

    data$ = of([
        { titulo: 'Médico', matricula: '34934522', vencimiento: new Date(2021, 0, 0), estado: { type: 'success', texto: 'vigente' } },
        { titulo: 'Kinesiólogo', matricula: '10000005', vencimiento: new Date(2020, 0, 0), estado: { type: 'danger', texto: 'suspendida' } },
        { titulo: 'Enfermero', matricula: '20000003', vencimiento: new Date(2024, 0, 0), estado: { type: 'warning', texto: 'vencida' } },
        { titulo: 'Psicólogo', matricula: '15000000', vencimiento: new Date(1990, 0, 0), estado: { type: 'success', texto: 'vigente' } },
    ]);

    ngOnInit() {
        this.plex.updateTitle('Plex: UI/UX para ANDES');

        const menu: DropdownItem[] = [
            { label: 'Ir al Inicio', icon: 'mdi mdi-home', route: '/incio' },
            { label: 'Accordion', icon: 'view-day', route: '/accordion' },
            { label: 'Bool', icon: 'checkbox-marked', route: '/bool' },
            { label: 'Box', icon: 'selection', route: '/box' },
            { label: 'Button & Badge', icon: 'solid', route: '/button-badge' },
            { label: 'Card', icon: 'card-account-details', route: '/card' },
            { label: 'DateTime', icon: 'calendar', route: '/datetime' },
            { label: 'Detail', icon: 'account', route: '/detail' },
            { label: 'Dropdown', icon: 'menu-right', route: '/dropdown' },
            { label: 'Help', icon: 'help-circle', route: '/help' },
            { label: 'Float', icon: 'decimal', route: '/float' },
            { label: 'Group', icon: 'group', route: '/group' },
            { label: 'Icon', icon: 'emoticon', route: '/icon' },
            { label: 'Int', icon: 'numeric', route: '/int' },
            { label: 'Item List', icon: 'format-list-checks', route: '/item' },
            { label: 'Label', icon: 'account-circle', route: '/label' },
            { label: 'Loader', icon: 'dots-horizontal', route: '/loader' },
            { label: 'Swal modal', icon: 'application', route: '/swal-modal' },
            { label: 'Modal', icon: 'application', route: '/modal' },
            { label: 'Nav bar', icon: 'page-layout-header', route: '/navbar' },
            { label: 'Phone', icon: 'phone', route: '/phone' },
            { label: 'Radio', icon: 'checkbox-blank-circle-outline', route: '/radio' },
            { label: 'Ribbon', icon: 'ribbon', route: '/ribbon' },
            { label: 'Select', icon: 'format-list-bulleted', route: '/select' },
            { label: 'Table', icon: 'grid', route: '/table' },
            { label: 'Tabs', icon: 'folder', route: '/tabs' },
            { label: 'Text', icon: 'form-textbox', route: '/text' },
            { label: 'Templates', icon: 'view-grid', route: '/templates' },
            { label: 'Title', icon: 'abecedario', route: '/title' },
            { label: 'Wizard', icon: 'auto-fix', route: '/wizard' },
            { label: 'Wrapper', icon: 'view-quilt', route: '/wrapper' },
            { label: 'Grid', icon: 'view-grid', route: '/grid' },
            { label: 'Slider', icon: 'interaccion', route: '/slider' },
            { divider: true, },
            { label: 'Directivas', icon: 'sign-direction', route: 'directives' },
            { label: 'Directiva Align', icon: 'vector-difference', route: '/directives/listado-sidebar/align' },
            { label: 'Directiva Tooltip', icon: 'tooltip', route: '/directives/listado-sidebar/tooltip' },
            { label: 'Directiva Hint', icon: 'tooltip', route: '/directives/listado-sidebar/hint' },
            { label: 'Directiva Case', icon: 'tooltip', route: '/directives/listado-sidebar/case' },
        ];
        this.plex.updateMenu(menu);
        this.plex.updateAppStatus({ API: 'OK' });
        this.plex.updateUserInfo({
            usuario: {
                nombreCompleto: 'Haruki Murakami',
                nombre: 'Haruki',
                apellido: 'Murakami',
                username: 26108063,
                documento: 26108063
            },
            organizacion: {
                _id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON',
                id: '57e9670e52df311059bc8964'
            }
        });
    }
}
