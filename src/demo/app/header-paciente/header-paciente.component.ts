import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-header-paciente',
    templateUrl: 'header-paciente.html',
    styleUrls: ['header-paciente.scss']
})
export class HeaderPacienteComponent {
    @Input() paciente: any;
}
