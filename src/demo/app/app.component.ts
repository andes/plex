import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Plex } from '../../lib/core/service';
import { DropdownItem } from './../../lib/dropdown/dropdown-item.inteface';

@Component({
    selector: 'plex-app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
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

    public menuItems: DropdownItem[] = [
        { label: 'Ir al Inicio', icon: 'home', prefix: 'adi', route: '/incio' },
        { label: 'Accordion', icon: 'view-day', prefix: 'adi', route: '/accordion' },
        { label: 'Bool', icon: 'checkbox-marked', prefix: 'adi', route: '/bool' },
        { label: 'Box', icon: 'selection', prefix: 'adi', route: '/box' },
        { label: 'Button & Badge', icon: 'solid', prefix: 'adi', route: '/button-badge' },
        { label: 'Card', icon: 'card-account-details', prefix: 'adi', route: '/card' },
        { label: 'DateTime', icon: 'calendar', prefix: 'adi', route: '/datetime' },
        { label: 'Detail', icon: 'account', prefix: 'adi', route: '/detail' },
        { label: 'Dropdown', icon: 'menu-right', prefix: 'adi', route: '/dropdown' },
        { label: 'Help', icon: 'help-circle', prefix: 'adi', route: '/help' },
        { label: 'Float', icon: 'decimal', prefix: 'adi', route: '/float' },
        { label: 'Group', icon: 'group', prefix: 'adi', route: '/group' },
        { label: 'Icon', icon: 'emoticon', prefix: 'adi', route: '/icon' },
        { label: 'Int', icon: 'numeric', prefix: 'adi', route: '/int' },
        { label: 'Item List', icon: 'format-list-checks', prefix: 'adi', route: '/item' },
        { label: 'Label', icon: 'account-circle', prefix: 'adi', route: '/label' },
        { label: 'Loader', icon: 'dots-horizontal', prefix: 'adi', route: '/loader' },
        { label: 'Swal modal', icon: 'application', prefix: 'adi', route: '/swal-modal' },
        { label: 'Menu', icon: 'menu', prefix: 'adi', route: '/menu' },
        { label: 'Modal', icon: 'application', prefix: 'adi', route: '/modal' },
        { label: 'Nav bar', icon: 'page-layout-header', prefix: 'adi', route: '/navbar' },
        { label: 'Phone', icon: 'phone', prefix: 'adi', route: '/phone' },
        { label: 'Radio', icon: 'checkbox-blank-circle-outline', prefix: 'adi', route: '/radio' },
        { label: 'Ribbon', icon: 'ribbon', prefix: 'adi', route: '/ribbon' },
        { label: 'Select', icon: 'format-list-bulleted', prefix: 'adi', route: '/select' },
        { label: 'Table', icon: 'grid', prefix: 'adi', route: '/table' },
        { label: 'Tabs', icon: 'folder', prefix: 'adi', route: '/tabs' },
        { label: 'Text', icon: 'form-textbox', prefix: 'adi', route: '/text' },
        { label: 'Templates', icon: 'view-grid', prefix: 'adi', route: '/templates' },
        { label: 'Title', icon: 'abecedario', prefix: 'adi', route: '/title' },
        { label: 'Wizard', icon: 'auto-fix', prefix: 'adi', route: '/wizard' },
        { label: 'Wrapper', icon: 'view-quilt', prefix: 'adi', route: '/wrapper' },
        { label: 'Grid', icon: 'view-grid', prefix: 'adi', route: '/grid' },
        { label: 'Slider', icon: 'interaccion', prefix: 'adi', route: '/slider' },
        { divider: true, },
        { label: 'Directivas', icon: 'sign-direction', prefix: 'adi', route: 'directives' },
        { label: 'Directiva Align', icon: 'vector-difference', prefix: 'adi', route: '/directives/listado-sidebar/align' },
        { label: 'Directiva Tooltip', icon: 'tooltip', prefix: 'adi', route: '/directives/listado-sidebar/tooltip' },
        { label: 'Directiva Hint', icon: 'tooltip', prefix: 'adi', route: '/directives/listado-sidebar/hint' },
        { label: 'Directiva Case', icon: 'tooltip', prefix: 'adi', route: '/directives/listado-sidebar/case' },
    ];

    ngOnInit() {
        this.plex.updateTitle('Plex: UI/UX para ANDES');
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
        this.plex.updateMenu(this.menuItems);
    }
}
