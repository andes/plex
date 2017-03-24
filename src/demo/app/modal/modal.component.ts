import { Component } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'modal.html',
})
export class ModalDemoComponent {
    public alertText = 'Se ha detectado un error en la base de datos';
    public confirmText = '¿Desea eliminar el archivo?';
    public resultado: boolean;
    constructor(private plex: Plex) { }

    alert() {
        this.plex.alert(this.alertText);
    }

    confirm() {
        this.plex.confirm(this.confirmText).then((resultado) => {
            this.resultado = resultado;
        });
    }
}
