import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../../service/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Plex } from '../../../../../../../../lib/core/service';

@Component({
  selector: 'datos-contacto',
  templateUrl: './datos-contacto.component.html',
})
export class DatosContactoComponent implements OnInit {
  selectedId: string;
  public prueba = '';
  public cambio = '';
  public tModel: any;
  public opciones: any[];
  public opciones2: any[];
  public opciones3: any[];
  public opciones4: any[];
  public opciones5: any[];
  public opciones6: any[];
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
    private router: Router,
    private route: ActivatedRoute,
    private plex: Plex,
  ) { }

  ngOnInit() {

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

    // plex-float
    this.tModel = { valor: null };

    // plex-select
    this.opciones = [{
      id: 1,
      nombre: 'Femenino',
    },
    {
      id: 2,
      nombre: 'Masculino',
    }
    ];

    // género
    this.opciones2 = [{
      id: 1,
      nombre: 'Femenino',
    },
    {
      id: 2,
      nombre: 'Masculino',
    },
    {
      id: 3,
      nombre: 'Otro',
    }
    ];

    // contacto
    this.opciones3 = [{
      id: 1,
      nombre: 'Teléfono celular',
    },
    {
      id: 2,
      nombre: 'Teléfono fijo',
    },
    {
      id: 3,
      nombre: 'Email"',
    }
    ];

    // provincias
    this.opciones4 = [{
      id: 1,
      nombre: 'Neuquén',
    },
    {
      id: 2,
      nombre: 'Rio Negro',
    },
    {
      id: 3,
      nombre: 'Santiago del Estero"',
    }
    ];

    // localidades
    this.opciones5 = [{
      id: 1,
      nombre: 'Las Lajas',
    },
    {
      id: 2,
      nombre: 'Neuquén',
    },
    {
      id: 3,
      nombre: 'Chos Malal"',
    }
    ];

    this.modelo1.select = this.modelo2.select = this.opciones[1];

    // plex-text
    this.templateModel2 = { nombre: null, min: 8, max: 8 };

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
}
