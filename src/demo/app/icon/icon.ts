import { Component } from '@angular/core';

@Component({
    selector: 'plex-icon-demo',
    templateUrl: 'icon.html',
})
export class DemoIconComponent {

    sizes = ['18', '24', '36', '48', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

    get randomSize() {
        return this.sizes[Math.floor(Math.random() * this.sizes.length)];
    }

    icons = [
        'close',
        'account',
        'account-multiple',
        'phone-plus',
        'file-multiple',
        'delete',
        'information-variant',
        'settings',
        'chevron-left',
        'chevron-right',
        'plus',
        'calendar-plus',
        'open-in-app',
        'calendar-multiple',
        'cellphone-android',
        'pencil',
        'clock',
        'history',
        'folder-account',
        'magnify',
        'account-card-details',
        'calendar-clock',
        'account-search',
        'account-multiple-plus',
        'account-off',
        'account-details',
        'undo',
        'contacts',
        'check',
        'calendar',
        'close-circle-outline',
        'mdi-content-save',
        'home-plus',
        'arrow-left',
        'trash-can',
        'plus-circle',
        'account-plus',
        'spray',
        'lock',
        'lock-open',
        'arrow-down-box',
        'arrow-up-box',
        'information-outline',
        'information',
        'download',
        'link-variant',
        'playlist-plus',
        'arrow-down-drop-circle-outline',
        'google-chrome',
        'firefox',
        'alert-circle-outline',
        'account-alert',
        'star',
        'star-outline',
        'message-bulleted',
        'comment',
        'checkbox-marked',
        'checkbox-blank-outline',
        'account-remove',
        'account-check',
        'account-switch',
        'folder-account',
        'comment-outline',
        'account-off',
        'stop',
        'emoticon-happy',
        'message',
        'arrow-left',
        'check',
        'pencil',
        'refresh',
        'alert-outline',
        'arrow-up-bold-circle-outline',
        'arrow-up-bold-circle',
        'delete',
        'pause',
        'sync-alert',
        'content-copy',
        'play',
        'account-plus',
        'format-list-checks',
        'printer',
        'calendar-today',
        'hospital',
        'account',
        'message-alert',
        'message-text-outline',
        'message-processing',
        'emoticon-sad',
        'clock',
        'timelapse',
        'check-circle',
        'key',
        'backup-restore',
        'routes',
        'sign-direction',
        'account-convert',
        'arrow-down-drop-circle-outline',
        'arrow-up-drop-circle-outline',
        'eye',
        'eye-off',
        'emoticon',
        'account-card-details',
        'map-marker',
        'information-outline',
        'close-box',
        'information',
        'calendar-clock',
        'account-outline',
        'close-circle',
        'content-save',
        'account-star',
        'barcode-scan',
        'alert',
        'lock-alert',
        'chevron-double-left',
        'chevron-double-right',
        'account-search',
        'checkbox-blank-circle-outline',
        'share',
        'plus',
        'file-pdf',
        'folder-remove',
        'clipboard-arrow-left',
        'file-tree',
        'close',
        'chevron-down',
        'clipboard-account',
        'account-multiple-outline',
        'calendar',
        'contacts',
        'folder',
        'hotel',
        'account-key',
        'chart-line',
        'poll',
        'dialpad',
        'help-circle',
        'format-list-bulleted',
        'crop-square',
        'view-list',
        'gender-male-female',
        'gender-male',
        'gender-female',
        'calendar-multiple',
        'timetable',
        'clipboard-check-outline',
        'flask-empty-outline',
        'eyedropper-variant',
        'magnify',
        'chevron-up',
        'drag-vertical',
        'menu-down',
        'menu-up',
        'chevron-left',
        'link-variant-off',
        'plus-circle',
        'delete-empty',
        'chevron-right',
    ];

    adi = [
        'abecedario',
        'adn',
        'alarma',
        'ambulancia',
        'anciana',
        'andes',
        'anestesia',
        'auto-policia',
        'bisturi',
        'bloques-reloj',
        'calendario',
        'calendario-fecha-outline',
        'calendario-flecha-abajo',
        'calendario-flechas-circulares',
        'calendario-mas',
        'calendario-rango-bold',
        'calendario-tilde',
        'calendarios',
        'cama',
        'cama-candado',
        'cama-destendida',
        'cama-engranaje',
        'cama-herramienta',
        'cama-paciente',
        'cama-reloj',
        'camara-foto',
        'camilla',
        'camion-bomberos',
        'candado',
        'celular',
        'celular-llave',
        'celular-mano',
        'celular-paciente',
        'centro-salud',
        'circulo-botella',
        'circulo-camara',
        'circulo-hospital',
        'circulo-madre-hijo',
        'circulo-medico',
        'circulo-paciente',
        'click',
        'clinica',
        'corazon',
        'corazon-cruz',
        'corazon-outline',
        'credencial-paciente',
        'credencial-usuario',
        'cruz',
        'cruz-hospital',
        'cuentagota',
        'cuerpo',
        'cuna-candado',
        'cuna-destendida',
        'cuna-herramienta',
        'cuna-paciente',
        'cuna-reloj',
        'defensa-civil',
        'desvinculo',
        'diario',
        'doctora',
        'docuemento-manzana',
        'documento',
        'documento-corazon',
        'documento-cruz',
        'documento-cruz-hospital',
        'documento-lapiz',
        'documento-lupa',
        'documento-mas',
        'documento-paciente',
        'documento-reloj',
        'documento-termometro',
        'documento-tilde',
        'documento-tubo',
        'documentos',
        'enfermera-outline',
        'enfermero',
        'entrada',
        'enviar',
        'escritorio',
        'estadistica',
        'estetoscopio',
        'exclamacion',
        'farmacia',
        'familia',
        'enfermero-outline-125',
        'enfermero-outline-134',
        'estomago',
        'femenino',
        'ferula',
        'flecha-abajo',
        'flecha-arriba',
        'flecha-derecha',
        'flecha-izquierda',
        'formula',
        'frasco',
        'frasco-pastillas',
        'garganta',
        'ginecologia',
        'giro',
        'herramienta',
        'zoom-in',
        'zoom-out',
        'zoom',
        'vinculo',
        'inhalador-52',
        'pildora',
        'recipiente',
        'silencio',
        'salida',
        'reloj',
        'paciente',
        'pastillas',
        'pastilla-79',
        'planilla-tubo',
        'planilla-pipeta',
        'planilla-electro',
        'pipeta',
        'pico-izquierda',
        'pico-derecha',
        'pico-arriba',
        'pico-abajo',
        'mano-nio',
        'marcador',
        'marcador-salud',
        'mas',
        'masculino',
        'oxigeno',
        'oreja',
        'nube-subir',
        'nube-bajar',
        'nodos',
        'molecula',
        'microscopio',
        'interaccion',
        'lapiz-documento',
        'lapiz',
        'paciente-hombre',
        'paciente-mujer',
        'medico',
        'tilde',
        'vacuna',
        'puerta-salir',
        'prohibido',
        'pregunta',
        'telefono',
        'termometro-55',
        'tablet',
        'recuperar',
        'paciente-rayos',
        'paciente-sol',
        'particulas',
        'turno-menos',
        'turno-mas',
        'usuarios',
        'usuario-tilde',
        'usuario-mas',
        'llamada-saliente',
        'usuario-reloj-outline',
        'usuario-tilde-outline',
        'pulmones',
        'logo-youtube',
        'logo-facebook',
        'logo-github',
        'mail',
        'paciente-casa',
        'mano-gota',
        'mano-herramienta',
        'logo-github-outline',
        'logo-facebook-outline',
        'logo-youtube-outline',
        'logo-whatsapp',
        'logo-twitter-outline',
        'logo-twitter',
        'plasma',
        'laboratorio',
        'pc',
        'pie',
        'traumatologia',
        'turno-tilde',
        'infante',
        'informacion',
        'mano',
        'mail-outline',
        'paciente-completo',
        'hombre-corriendo',
        'hombre-caminando',
        'turno-codigo',
        'intestino',
        'inhalador-80',
        'paciente-medico',
        'interconsulta',
        'hospital',
        'historial',
        'jerarquia',
        'riones',
        'microbios',
        'resonancia',
        'calendario-fecha-abajo',
        'calendario-fecha-arriba',
        'impresora',
        'madre-hijo',
        'mano-corazon',
        'turno-bold',
        'turno-tilde-bold',
        'turno-mas-bold',
        'rayos',
        'informe-medico',
        'web',
        'trastorno',
        'termometro',
        'rayos-1',
        'semantics',
        'logo-ministerio',
        'logo-hpn',
        'logo-bpn',
        'medica',
        'logo-tics',
        'logo-ministerio-salud',
        'esqueleto',
        'hallazgo',
        'etiqueta',
        'universidad',
        'estudiante',
        'engranaje-outline',
    ];


}
