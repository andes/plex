import { Menu } from './menu';

export const MENU: Menu[] = [
    {
        id: 1,
        nombre: 'huds',
        tipo: 'info',
        semanticTag: 'solicitud',
        icono: 'historial',
        path: 'ancla',
        color: '#0070cc',
        outlet: 'listado',
    },
    {
        id: 2,
        nombre: 'consultas',
        tipo: 'custom',
        semanticTag: 'solicitud',
        icono: 'mano-corazon',
        path: 'misConsultas',
        color: '#0070cc',
        outlet: 'listado',
    },
    {
        id: 11,
        nombre: 'documentos',
        tipo: 'info',
        semanticTag: 'registro',
        icono: 'documento-cursor',
        path: 'misDocumentos',
        color: '#0070cc',
        outlet: 'listado',
    },
    {
        id: 12,
        nombre: 'turnos',
        tipo: 'info',
        semanticTag: 'solicitud',
        icono: 'turno-bold',
        path: 'misTurnos',
        color: '#0070cc',
        outlet: 'listado',
    },
    {
        id: 13,
        nombre: 'mensajes',
        tipo: 'info',
        semanticTag: 'otro',
        icono: 'mail',
        path: 'misMensajes',
        color: '#0070cc',
        outlet: 'listado',
    },
    {
        id: 14,
        nombre: 'organizaciones',
        tipo: 'info',
        semanticTag: 'solicitud',
        icono: 'hospital',
        path: 'misOrganizaciones',
        color: '#0070cc',
        outlet: 'listado',
    },
    {
        id: 9,
        nombre: 'equipo de salud',
        tipo: 'info',
        semanticTag: 'solicitud',
        icono: 'medico',
        path: 'miEquipo',
        color: '#0070cc',
        outlet: 'listado',
    },
];
