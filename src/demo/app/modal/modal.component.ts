import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Plex } from '../../../lib/core/service'

@Component({
    templateUrl: 'modal.html',
})
export class ModalDemoComponent {   
    public alertText: string = "Se ha detectado un error en la base de datos";
    public confirmText: string = "¿Desea eliminar el archivo?";
    constructor(private plex: Plex) { }

    alert(){
        this.plex.alert(this.alertText).then(function(result){
            alert("El modal se cerró. Resultado: " + result);
        });
    }

    confirm(){
        this.plex.confirm(this.confirmText).then(function(result){
            debugger;
            alert("El modal se cerró. Resultado: " + result);
        });
    }
}
