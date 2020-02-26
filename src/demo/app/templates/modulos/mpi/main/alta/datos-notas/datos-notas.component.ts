import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datos-notas',
  templateUrl: './datos-notas.component.html',
})
export class DatosNotasComponent implements OnInit {

  public templateModel1: any;
  public templateModel2: any;
  public nuevaNota = false;

  constructor(
  ) { }

  ngOnInit() {
    // plex-text
    this.templateModel2 = { nombre: null, min: 8, max: 8 };
  }

  onFocus() {
    this.templateModel1.usuario = 'FOCUSED';
  }

  agregarNota() {
    this.nuevaNota = !this.nuevaNota;
  }

  notas = [
    {
      fecha: '07/03/2008',
      titulo: 'titulo de nota',
      nota: 'Este es el texto de la nota que puede superar las dos lineas de texto, por esto se agrega la propiedad "multilinea" al input de carga de notas',
      destacada: false,
    },
    {
      fecha: '21/11/2012',
      titulo: 'titulo de nota',
      nota: 'Pellentesque eleifend, lorem in vestibulum bibendum volutpat massa a ultricies. In sed vestibulum lorem. Vivamus sit amet posuere massa.',
      destacada: false,
    },
    {
      fecha: '23/09/2017',
      titulo: 'titulo de nota',
      nota: 'Nunc elementum libero non libero interdum, id varius tortor pharetra. Morbi semper, metus a ultrices condimentum, diam arcu dictum ligula, a euismod neque mauris eget lacus. Donec porttitor quam nisi, at aliquam sem rhoncus vel. Duis ullamcorper nisl a sapien auctor',
      destacada: true,
    },
  ];

}
