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

        // const menu: DropdownItem[] = [
        //     { label: 'Ir al Inicio', icon: 'mdi mdi-home', route: '/incio' },
        //     { label: 'Accordion', icon: 'view-day', route: '/accordion' },
        //     { label: 'Bool', icon: 'checkbox-marked', route: '/bool' },
        //     { label: 'Box', icon: 'selection', route: '/box' },
        //     { label: 'Button & Badge', icon: 'solid', route: '/button-badge' },
        //     { label: 'Card', icon: 'card-account-details', route: '/card' },
        //     { label: 'DateTime', icon: 'calendar', route: '/datetime' },
        //     { label: 'Detail', icon: 'account', route: '/detail' },
        //     { label: 'Dropdown', icon: 'menu-right', route: '/dropdown' },
        //     { label: 'Help', icon: 'help-circle', route: '/help' },
        //     { label: 'Float', icon: 'decimal', route: '/float' },
        //     { label: 'Group', icon: 'group', route: '/group' },
        //     { label: 'Icon', icon: 'emoticon', route: '/icon' },
        //     { label: 'Int', icon: 'numeric', route: '/int' },
        //     { label: 'Item List', icon: 'format-list-checks', route: '/item' },
        //     { label: 'Label', icon: 'account-circle', route: '/label' },
        //     { label: 'Loader', icon: 'dots-horizontal', route: '/loader' },
        //     { label: 'Swal modal', icon: 'application', route: '/swal-modal' },
        //     { label: 'Modal', icon: 'application', route: '/modal' },
        //     { label: 'Nav bar', icon: 'page-layout-header', route: '/navbar' },
        //     { label: 'Phone', icon: 'phone', route: '/phone' },
        //     { label: 'Radio', icon: 'checkbox-blank-circle-outline', route: '/radio' },
        //     { label: 'Ribbon', icon: 'ribbon', route: '/ribbon' },
        //     { label: 'Select', icon: 'format-list-bulleted', route: '/select' },
        //     { label: 'Table', icon: 'grid', route: '/table' },
        //     { label: 'Tabs', icon: 'folder', route: '/tabs' },
        //     { label: 'Text', icon: 'form-textbox', route: '/text' },
        //     { label: 'Templates', icon: 'view-grid', route: '/templates' },
        //     { label: 'Title', icon: 'abecedario', route: '/title' },
        //     { label: 'Wizard', icon: 'auto-fix', route: '/wizard' },
        //     { label: 'Wrapper', icon: 'view-quilt', route: '/wrapper' },
        //     { label: 'Grid', icon: 'view-grid', route: '/grid' },
        //     { label: 'Slider', icon: 'interaccion', route: '/slider' },
        //     { divider: true, },
        //     { label: 'Directivas', icon: 'sign-direction', route: 'directives' },
        //     { label: 'Directiva Align', icon: 'vector-difference', route: '/directives/listado-sidebar/align' },
        //     { label: 'Directiva Tooltip', icon: 'tooltip', route: '/directives/listado-sidebar/tooltip' },
        //     { label: 'Directiva Hint', icon: 'tooltip', route: '/directives/listado-sidebar/hint' },
        //     { label: 'Directiva Case', icon: 'tooltip', route: '/directives/listado-sidebar/case' },
        // ];

        const menu: DropdownItem[] = [
            {
                "label": "Página Principal",
                "icon": "home",
                "route": "/inicio",
                "prefix": "adi"
            },
            {
                "label": "Padrones",
                "icon": "magnify",
                "route": "/puco",
                "prefix": "adi"
            },
            {
                "id": "5f907c805de6d357ca0b778d",
                "label": "MPI",
                "icon": "familia",
                "prefix": "adi",
                "color": "#00afa0",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Punto Inicio  MPI ",
                        "route": "/apps/mpi/busqueda",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "Auditoría de  Pacientes ",
                        "route": "/apps/mpi/auditoria",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b778e",
                "label": "RUP",
                "icon": "medico",
                "prefix": "adi",
                "color": "#967da0",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Punto Inicio  RUP ",
                        "route": "rup",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b778f",
                "label": "INT",
                "icon": "bed",
                "prefix": "adi",
                "color": "#7f8899",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Punto Inicio  Internación ",
                        "route": "internacion/inicio",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "Mapa de  Camas ",
                        "route": "mapa-camas/internacion",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b7790",
                "label": "Gestor de Usuarios",
                "icon": "credencial-usuario",
                "prefix": "adi",
                "color": "#d9a21b",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Perfiles y permisos",
                        "route": "/gestor-usuarios/usuarios",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b7792",
                "label": "CITAS",
                "icon": "calendario-rango-bold",
                "prefix": "adi",
                "color": "#058db1",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Gestor de  Agendas ",
                        "route": "citas/gestor_agendas",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "Ventanilla  CITAS ",
                        "route": "citas/punto-inicio",
                        "prefix": "adi"
                    },
                    {
                        "id": 2,
                        "label": "Auditoría de Agendas",
                        "route": "citas/auditoria_agendas",
                        "prefix": "adi"
                    },
                    {
                        "id": 3,
                        "label": "Demanda Insatisfecha",
                        "route": "citas/demanda-insatisfecha",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b7793",
                "label": "HUDS",
                "icon": "medico",
                "prefix": "adi",
                "color": "#bc5485",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Punto Inicio  HUDS ",
                        "route": "/huds",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "Préstamo  Carpetas ",
                        "route": "prestamosHC",
                        "prefix": "adi"
                    },
                    {
                        "id": 2,
                        "label": "Exportar HUDS",
                        "route": "/visualizacion-informacion/exportar-huds",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b7794",
                "label": "Novedades",
                "icon": "bell",
                "prefix": "adi",
                "color": "#879357",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "¿Qué hay de nuevo en ANDES?",
                        "route": "/novedades",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b7796",
                "label": "Solicitudes",
                "icon": "mano-corazon",
                "prefix": "adi",
                "color": "#a486ae",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "TOP: Tránsito Ordenado de Pacientes",
                        "route": "/solicitudes",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b7797",
                "label": "TABLAS MAESTRAS",
                "icon": "hospital",
                "prefix": "adi",
                "color": "#9b6762",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Organizaciones",
                        "route": "/tm/organizacion",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "Espacios físicos",
                        "route": "/tm/mapa_espacio_fisico",
                        "prefix": "adi"
                    },
                    {
                        "id": 2,
                        "label": "Especialidades",
                        "route": "/tm/especialidad",
                        "prefix": "adi"
                    },
                    {
                        "id": 3,
                        "label": "Profesionales",
                        "route": "/tm/profesional",
                        "prefix": "adi"
                    },
                    {
                        "id": 4,
                        "label": "Farmacias",
                        "route": "/tm/farmacia",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b7799",
                "label": "Campañas de Salud",
                "icon": "manos-corazon",
                "prefix": "adi",
                "color": "#b1c02c",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Gestor de campañas",
                        "route": "/campaniasSalud",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b779a",
                "label": "FACTURACIÓN",
                "icon": "compu-listado",
                "prefix": "adi",
                "color": "#7c87a5",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Nominalizadas",
                        "route": "/buscador",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "No nominali -zadas",
                        "route": "/buscador/no_nominalizadas",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b779b",
                "label": "VISUALIZACIÓN",
                "icon": "file-chart",
                "prefix": "adi",
                "color": "#ad5555",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Dashboard  CITAS ",
                        "route": "/dashboard/citas",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "Dashboard  HUDS ",
                        "route": "/dashboard/ambulatorio",
                        "prefix": "adi"
                    },
                    {
                        "id": 2,
                        "label": "Dashboard  Solicitudes ",
                        "route": "/dashboard/top",
                        "prefix": "adi"
                    },
                    {
                        "id": 3,
                        "label": "Gestión de  Reportes ",
                        "route": "/reportes",
                        "prefix": "adi"
                    },
                    {
                        "id": 4,
                        "label": "BI-Queries",
                        "route": "/visualizacion-informacion/bi-queries",
                        "prefix": "adi"
                    },
                    {
                        "id": 5,
                        "label": "Vacunación COVID-19",
                        "route": "/vacunacion/listado",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "5f907c805de6d357ca0b779c",
                "label": "COM",
                "icon": "maletin-salud",
                "prefix": "adi",
                "color": "#df5c16",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Centro Operativo Médico",
                        "route": "/com",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "6076d36b73fecc9a0e3b6e63",
                "label": "VACUNACIÓN COVID19",
                "icon": null,
                "prefix": "adi",
                "color": "#A74482",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Listado",
                        "route": "/vacunacion/listado",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "Dación de turnos",
                        "route": "/vacunacion/monitoreo",
                        "prefix": "adi"
                    },
                    {
                        "id": 2,
                        "label": "Estado de vacunación",
                        "route": "/vacunacion/estado",
                        "prefix": "adi"
                    }
                ]
            },
            {
                "id": "6081a9d4138a6865a3d592c6",
                "label": "PERINATAL",
                "icon": "circulo-madre-hijo",
                "prefix": "adi",
                "color": "#44A756",
                "submodulos": [
                    {
                        "id": 0,
                        "label": "Seguimiento de embarazo",
                        "route": "/perinatal",
                        "prefix": "adi"
                    },
                    {
                        "id": 1,
                        "label": "SIP PLUS",
                        "route": "https://sipwindows.andes.gob.ar/",
                        "prefix": "adi"
                    }
                ]
            }
        ]

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
