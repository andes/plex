import { Component, OnInit } from '@angular/core';
import { Plex } from '@andes/plex';


@Component({
    templateUrl: 'menu.html'
})

export class MenuDemoComponent implements OnInit {
    public menuItems = [];
    public selectedItem = null;
    public demoMenuOpen = false;

    constructor(public plex: Plex) { }

    ngOnInit() {
        this.menuItems = this.getMenuItems();
        this.plex.updateMenu(this.menuItems);
    }

    getMenuItems() {
        return [
            {
                label: 'Página Principal',
                icon: 'home',
                prefix: 'adi'
            },
            {
                label: 'Padrones',
                icon: 'magnify',
                prefix: 'adi'
            },
            {
                id: '5f907c805de6d357ca0b778d',
                label: 'MPI',
                icon: 'familia',
                prefix: 'adi',
                color: '#00afa0',
                submodulos: [
                    {
                        id: 0,
                        label: 'Punto Inicio  MPI ',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'Auditoría de  Pacientes ',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b778e',
                label: 'RUP',
                icon: 'medico',
                prefix: 'adi',
                color: '#967da0',
                submodulos: [
                    {
                        id: 0,
                        label: 'Punto Inicio  RUP ',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b778f',
                label: 'INT',
                icon: 'bed',
                prefix: 'adi',
                color: '#7f8899',
                submodulos: [
                    {
                        id: 0,
                        label: 'Punto Inicio  Internación ',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'Mapa de  Camas ',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b7790',
                label: 'Gestor de Usuarios',
                icon: 'credencial-usuario',
                prefix: 'adi',
                color: '#d9a21b',
                submodulos: [
                    {
                        id: 0,
                        label: 'Perfiles y permisos',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b7792',
                label: 'Citas',
                icon: 'calendario-rango-bold',
                prefix: 'adi',
                color: '#058db1',
                submodulos: [
                    {
                        id: 0,
                        label: 'Gestor de  Agendas ',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'Ventanilla  CITAS ',
                        prefix: 'adi'
                    },
                    {
                        id: 2,
                        label: 'Auditoría de Agendas',
                        prefix: 'adi'
                    },
                    {
                        id: 3,
                        label: 'Demanda Insatisfecha',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b7793',
                label: 'HUDS',
                icon: 'medico',
                prefix: 'adi',
                color: '#bc5485',
                submodulos: [
                    {
                        id: 0,
                        label: 'Punto Inicio  HUDS ',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'Préstamo Carpetas ',
                        prefix: 'adi'
                    },
                    {
                        id: 2,
                        label: 'Exportar HUDS',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b7794',
                label: 'Novedades',
                icon: 'bell',
                prefix: 'adi',
                color: '#879357',
                submodulos: [
                    {
                        id: 0,
                        label: '¿Qué hay de nuevo en ANDES?',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b7796',
                label: 'Solicitudes',
                icon: 'mano-corazon',
                prefix: 'adi',
                color: '#a486ae',
                submodulos: [
                    {
                        id: 0,
                        label: 'TOP: Tránsito Ordenado de Pacientes',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b7797',
                label: 'Tablas Maestras',
                icon: 'hospital',
                prefix: 'adi',
                color: '#9b6762',
                submodulos: [
                    {
                        id: 0,
                        label: 'Organizaciones',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'Espacios físicos',
                        prefix: 'adi'
                    },
                    {
                        id: 2,
                        label: 'Especialidades',
                        prefix: 'adi'
                    },
                    {
                        id: 3,
                        label: 'Profesionales',
                        prefix: 'adi'
                    },
                    {
                        id: 4,
                        label: 'Farmacias',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b7799',
                label: 'Campañas de Salud',
                icon: 'manos-corazon',
                prefix: 'adi',
                color: '#b1c02c',
                submodulos: [
                    {
                        id: 0,
                        label: 'Gestor de campañas',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b779a',
                label: 'Facturación',
                icon: 'compu-listado',
                prefix: 'adi',
                color: '#7c87a5',
                submodulos: [
                    {
                        id: 0,
                        label: 'Nominalizadas',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'No nominali -zadas',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b779b',
                label: 'Visualización',
                icon: 'file-chart',
                prefix: 'adi',
                color: '#ad5555',
                submodulos: [
                    {
                        id: 0,
                        label: 'Dashboard  CITAS ',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'Dashboard  HUDS ',
                        prefix: 'adi'
                    },
                    {
                        id: 2,
                        label: 'Dashboard  Solicitudes ',
                        prefix: 'adi'
                    },
                    {
                        id: 3,
                        label: 'Gestión de  Reportes ',
                        prefix: 'adi'
                    },
                    {
                        id: 4,
                        label: 'BI-Queries',
                        prefix: 'adi'
                    },
                    {
                        id: 5,
                        label: 'Vacunación COVID-19',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '5f907c805de6d357ca0b779c',
                label: 'COM',
                icon: 'maletin-salud',
                prefix: 'adi',
                color: '#df5c16',
                submodulos: [
                    {
                        id: 0,
                        label: 'Centro Operativo Médico',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '6076d36b73fecc9a0e3b6e63',
                label: 'Vacunación COVID19',
                icon: null,
                prefix: 'adi',
                color: '#A74482',
                submodulos: [
                    {
                        id: 0,
                        label: 'Listado',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'Dación de turnos',
                        prefix: 'adi'
                    },
                    {
                        id: 2,
                        label: 'Estado de vacunación',
                        prefix: 'adi'
                    }
                ]
            },
            {
                id: '6081a9d4138a6865a3d592c6',
                label: 'Perinatal',
                icon: 'circulo-madre-hijo',
                prefix: 'adi',
                color: '#44A756',
                submodulos: [
                    {
                        id: 0,
                        label: 'Seguimiento de embarazo',
                        prefix: 'adi'
                    },
                    {
                        id: 1,
                        label: 'SIP PLUS',
                        prefix: 'adi'
                    }
                ]
            }
        ];
    }

    public selectItem(item) {
        this.selectedItem = item;
    }

    toggleDemoMenu() {
        this.demoMenuOpen = !this.demoMenuOpen;
    }

    handleMenuToggle(isOpen: boolean) {
        this.demoMenuOpen = isOpen;
    }

    collapseAllMenus() {
        this.menuItems.forEach(item => {
            if (item.submodulos) {
                item.collapsed = true;
            }
        });
    }
}
