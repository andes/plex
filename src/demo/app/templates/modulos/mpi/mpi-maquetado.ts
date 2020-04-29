import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Plex } from './../../../../../lib/core/service';
import { Router } from '@angular/router';

// Servicios y modelo
import { PacienteService } from '../../service/paciente.service';
import { Paciente } from '../../service/paciente';

@Component({
    templateUrl: 'mpi-maquetado.html',
    styleUrls: ['mpi-maquetado.scss'],
})
export class MpiMaquetadoComponent implements OnInit {

    sidebar = 12;

    recibirSidebar($event) {
        this.sidebar = $event;
    }

    // public listadoPaciente: Paciente[];
    pacientes$: Observable<Paciente[]>;
    selectedId: Number;
    public prueba = '';
    public cambio = '';
    public tModel: any;
    public opciones: any[];
    public modelo1 = { select: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };
    public templateModel2: any;
    public modelo: any;

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private plex: Plex,
        private router: Router,
    ) { }

    ngOnInit() {
        this.pacientes$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = +params.get('id');
                return this.pacienteService.getPacientes();
            })
        );

        // plex-datetime
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            horados: null,
            disabled: false,
            min: new Date(1970, 0, 1),
            minHora: moment().add(30, 'minutes'),
            maxHora: moment().add(180, 'minutes'),
            fechaDecounce: new Date(1970, 0, 1),
        };


        // Template-Form2 model
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // plex-phone
        // plex-float
        this.tModel = { valor: null };



        // plex-select
        this.opciones = [{
            id: 1,
            nombre: 'Hospital "Dr. Horacio Heller',
            continente: 'Zona metro',
        },
        {
            id: 2,
            nombre: 'Hospital Bouquet Roldán',
            continente: 'Zona metro',
        },
        {
            id: 3,
            nombre: 'Hospital San Martín de los Andes "Dr. Ramón Carrillo"',
            continente: 'Zona tres',
        },
        {
            id: 4,
            nombre: 'Hospital Centenario',
            continente: 'Zona metro',
        },
        {
            id: 5,
            nombre: 'Hospital Provincial Neuquen "Dr. Eduardo Castro Rendón"',
            continente: 'Zona metro',
        }
        ];

        this.modelo1.select = this.modelo2.select = this.opciones[1];

        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // plex-bool
        this.modelo = { checkbox: false, slide: false };
    }

    updateMaxHora() {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    }

    horaPlus() {
        return moment(this.tModel.hora).add(30, 'minutes');
    }

    onChange() {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    }


    goToAlta() {
        this.router.navigate(['templates/mpi-maquetado/mpi-alta']);
    }

}




