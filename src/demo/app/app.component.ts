import { Component, OnInit } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { DropdownItem } from './../../lib/dropdown/dropdown-item.inteface';

@Component({
    selector: 'plex-app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    // Hace que PlexService sea un singleton para toda la aplicación
    constructor(public plex: Plex) { }

    ngOnInit() {
        this.plex.updateTitle('Plex: UI/UX para ANDES');

        const menu: DropdownItem[] = [
            { label: 'Ir al Inicio', icon: 'mdi mdi-home', route: '/incio' },
            { label: 'Accordion', icon: 'view-day', route: '/accordion' },
            { label: 'Bool', icon: 'checkbox-marked', route: '/bool' },
            { label: 'Box', icon: 'selection', route: '/box' },
            { label: 'Button & Badge', icon: 'solid', route: '/button-badge' },
            { label: 'DateTime', icon: 'calendar', route: '/datetime' },
            { label: 'Detail', icon: 'account', route: '/detail' },
            { label: 'Dropdown', icon: 'menu-right', route: '/dropdown' },
            { label: 'Help', icon: 'help-circle', route: '/help' },
            { label: 'Float', icon: 'decimal', route: '/float' },
            { label: 'Int', icon: 'numeric', route: '/int' },
            { label: 'Item List', icon: 'format-list-checks', route: '/item' },
            { label: 'Label', icon: 'account-circle', route: '/label' },
            { label: 'Loader', icon: 'dots-horizontal', route: '/loader' },
            { label: 'Swal modal', icon: 'application', route: '/swal-modal' },
            { label: 'Modal', icon: 'application', route: '/modal' },
            { label: 'Nav bar', icon: 'page-layout-header', route: '/navbar' },
            { label: 'Phone', icon: 'phone', route: '/phone' },
            { label: 'Ribbon', icon: 'ribbon', route: '/ribbon' },
            { label: 'Select', icon: 'format-list-bulleted', route: '/select' },
            { label: 'Tabs', icon: 'folder', route: '/tabs' },
            { label: 'Text', icon: 'form-textbox', route: '/text' },
            { label: 'Tooltip & Hint', icon: 'tooltip', route: '/tooltip-hint' },
            { label: 'Wizard', icon: 'auto-fix', route: '/wizard' },
            { label: 'Wrapper', icon: 'view-quilt', route: '/wrapper' },
            { label: 'Grid', icon: 'view-grid', route: '/grid' },
            { label: 'Card', icon: 'card-account-details-star-outline', route: '/card' },
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
