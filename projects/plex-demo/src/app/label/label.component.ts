import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'label.html',
})

export class LabelDemoComponent {

    foto = true;
    icon = false;
    icono = {
        caracter: 'pencil',
        color: 'info',
    };

    datos = [
        { label: 'edad', valor: '41 años', type: 'success' },
        { label: 'documento', valor: '29.879.253', type: 'info' },
        { label: 'sexo', valor: 'Masculino', type: 'default' },
        { label: 'género', valor: 'Hospital Provincial de Neuquen Castro Rendon', type: 'warning' },
        { label: 'fecha de nacimiento', valor: '14 de Julio de 1953', type: 'success' },
        { label: 'CUIL', valor: '20-16879253-5', type: 'warning' },
        { label: 'Nota', valor: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum sonnet.', type: 'warning' },
        { label: 'Comience buscando un paciente en la barra superior', valor: 'Ingrese al menos tres caracteres. Si la búsqueda no arroja el resultado esperado, presione el botón "Paciente Nuevo"', type: 'warning' },
    ];

    pasos = [
        { label: 'A', valor: 'Ingrese al menos tres caracteres. Si la búsqueda no arroja el resultado esperado, presione el botón "Paciente Nuevo".', titulo: 'Busque un paciente', subtitulo: 'Alteración que se produce en el desarrollo normal de un proceso', semantic: 'Trastorno', icono: 'trastorno', color: '#ff4a1a' },
        { label: 'B', valor: 'La selección se realiza desde los campos desplegables que se encuentran sobre el calendario de agendas.', titulo: 'Seleccione prestación', subtitulo: 'Procedimiento, entidad observable, régimen/tratamiento', semantic: 'Procedimiento', icono: 'termometro', color: '#92278e' },
        { label: 'C', valor: 'Una vez seleccionado el profesional y la prestación, podrá visualizar las opciones de bloques y horarios.', titulo: 'Confirme horario', subtitulo: 'Producto, objeto físico, medicamento clínico, fármaco de uso clínico', semantic: 'Producto', icono: 'pildoras', color: '#00bcb4' },
        { label: 'D', valor: '', titulo: '', subtitulo: 'Pedidos realizados desde un efector, sector o servicio', semantic: 'Solicitudes', icono: 'mano-corazon', color: '#0070cc' }
    ];

    eventos = [
        { label: '27/11/2020', valor: 'Texto descriptivo de un item perteneciente a una línea de tiempo en el que se desarrollan varios eventos.', type: 'Asignada por Alberto Carranza' },
        { label: '12/10/2020', valor: 'Texto descriptivo de un item perteneciente a una línea de tiempo en el que se desarrollan varios eventos.', type: 'Asignada por Alberto Carranza' },
        { label: '09/07/2020', valor: 'Texto descriptivo de un item perteneciente a una línea de tiempo en el que se desarrollan varios eventos.', type: 'Asignada por Alberto Carranza' },
        { label: '21/05/2020', valor: 'Texto descriptivo de un item perteneciente a una línea de tiempo en el que se desarrollan varios eventos.', type: 'Asignada por Alberto Carranza' },
        { label: '21/12/2019', valor: 'Texto descriptivo de un item perteneciente a una línea de tiempo en el que se desarrollan varios eventos.', type: 'Asignada por Alberto Carranza' },
        { label: '17/06/2019', valor: 'Texto descriptivo de un item perteneciente a una línea de tiempo en el que se desarrollan varios eventos.', type: 'Asignada por Alberto Carranza' },
    ];
}
