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
        { label: 'género', valor: 'Femenino', type: 'warning' },
        { label: 'fecha de nacimiento', valor: '14 de Julio de 1953', type: 'success' },
        { label: 'CUIL', valor: '20-16879253-5', type: 'warning' },
        { label: 'Nota', valor: 'Donec quam felis, ultricies nec.', type: 'warning' },
        { label: 'Búsque y seleccione un paciente', valor: 'Ingrese al menos tres caracteres. Si la búsqueda no arroja el resultado esperado, presione el botón "Paciente Nuevo"', type: 'A' },
        { label: 'Seleccione el profesional', valor: 'La selección se realiza desde los campos desplegables que se encuentran sobre el calendario de agendas', type: 'B' },
        { label: 'Indique agenda y horario', valor: 'Una vez seleccionado el profesional y la prestación, podrá visualizar las opciones de bloques y horarios', type: 'C' },
        { label: 'Aceptada por Rubén Palma', valor: 'Texto descriptivo del evento de la línea de tiempo. En el que se desarrolla el item.', type: '03/11/2020' },
        { label: 'Validada por Carolina Celeste', valor: 'Texto descriptivo del evento de la línea de tiempo. En el que se desarrolla el item.', type: '03/07/2020' },
        { label: 'Profesional asignado por Alberto Carranza', valor: 'Texto descriptivo del evento de la línea de tiempo. En el que se desarrolla el item.', type: '11/09/2019' },
        { label: 'Ejecutada por Juan Ignacio Gonzalez', valor: 'Texto descriptivo del evento de la línea de tiempo. En el que se desarrolla el item.', type: '19/05/2019' },
        { label: 'Creada por Carolina Celeste', valor: 'Texto descriptivo del evento de la línea de tiempo. En el que se desarrolla el item.', type: '01/03/2018' }
    ];
}
