import { Component } from '@angular/core';

@Component({
    templateUrl: './card.component.html',
})
export class CardDemoComponent {

    color = '#92278e';

    datos = [
        { label: 'Funcionar como botones destacados en una interfaz', valor: 'Por ejemplo en puntos de inicio', type: 'default' },
        { label: 'Representar opciones seleccionables', valor: 'Usuarios, organizaciones, items propios de un módulo', type: 'success' },
        { label: 'Enriquecer las celdas de una grilla', valor: 'Por este motivo se combina con el componente plex-grid', type: 'info' },
        { label: 'Card Warning', valor: 'Es un elemento seleccionable', type: 'warning' },
        { label: 'Card Danger', valor: 'Es un elemento seleccionable', type: 'danger' },
        { label: 'Card custom', valor: 'El color se define mediante el atributo [color]', type: 'custom' },
        { label: 'Definir bloques de información destacada', valor: 'Recomendable la tipología "invert"', type: 'custom' },
    ];

    agendas = [
        { horario: '09:00 - 12:00 hs.', profesional: 'Monteverde, María Laura', prestacion: 'Consulta de niño sano', efector: 'Hospital Provincial Neuquén', turnos: '3 turnos', type: 'warning' },
        { horario: '12:00 - 14:00 hs.', profesional: 'Molini, Walter Juan', prestacion: 'Exámen médico del adulto', efector: 'Consultorios Huemul', turnos: '15 turnos', type: 'success' },
        { horario: '14:00 - 16:00 hs.', profesional: 'Ramirez, Jorge Sebastián', prestacion: 'Consulta de medicina general', efector: 'Centro de salud Progreso', turnos: 'sin turnos', type: 'danger' },
    ];

    efectores = [
        { nombre: 'Hospital Provincial Neuquén', localidad: 'Neuquén', img: 'https://www.saludneuquen.gob.ar/wp-content/uploads/2020/02/castro-rend%C3%B3n-1-1440x1080.jpg', },
        { nombre: 'Hospital Dr. Horacio Heller', localidad: 'Neuquén', img: 'https://www.saludneuquen.gob.ar/wp-content/uploads/2019/11/Frente-Hospital-Horacio-Heller-4-1620x1080.jpg', },
    ];

    horarios = [
        { hora: '09:00 hs.' },
        { hora: '09:30 hs.' },
        { hora: '10:00 hs.' },
        { hora: '10:30 hs.' },
        { hora: '11:00 hs.' },
        { hora: '11:30 hs.' },
        { hora: '12:00 hs.' },
    ];

    calendario = [
        { fecha: '1', turnos: '5 turnos' },
        { fecha: '2', turnos: '5 turnos' },
        { fecha: '3', turnos: '5 turnos' },
        { fecha: '4', turnos: '5 turnos' },
        { fecha: '5', turnos: '5 turnos' },
        { fecha: '6', turnos: '5 turnos' },
        { fecha: '7', turnos: '5 turnos' },
        { fecha: '8', turnos: '5 turnos' },
        { fecha: '9', turnos: '5 turnos' },
        { fecha: '10', turnos: 'sin turnos' },
        { fecha: '11', turnos: 'sin turnos' },
        { fecha: '12', turnos: 'sin turnos' },
        { fecha: '13', turnos: 'sin turnos' },
        { fecha: '14', turnos: 'sin turnos' },
        { fecha: '15', turnos: 'sin turnos' },
        { fecha: '16', turnos: 'sin turnos' },
        { fecha: '17', turnos: '11 turnos' },
        { fecha: '18', turnos: '11 turnos' },
        { fecha: '19', turnos: '11 turnos' },
        { fecha: '20', turnos: '11 turnos' },
        { fecha: '21', turnos: '11 turnos' },
        { fecha: '22', turnos: '11 turnos' },
        { fecha: '23', turnos: 'sin turnos' },
        { fecha: '24', turnos: 'sin turnos' },
        { fecha: '25', turnos: 'sin turnos' },
        { fecha: '26', turnos: 'sin turnos' },
        { fecha: '27', turnos: 'sin turnos' },
        { fecha: '28', turnos: 'sin turnos' },
        { fecha: '29', turnos: 'sin turnos' },
        { fecha: '30', turnos: 'sin turnos' },
        { fecha: '31', turnos: 'sin turnos' },
    ];
}
