import { Component } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'modal.html',
})
export class ModalDemoComponent {
    public alertText = 'Se ha detectado un error en la base de datos';
    public alertTimeout = 0;
    public toastText = 'Esta es una rica tostada';
    public toastTimeout = 3000;
    public confirmText = '¿Desea eliminar el archivo?';
    public resultado: boolean;
    constructor(private plex: Plex) { }

    info(type) {
        this.plex.info(type, this.alertText, 'Información', this.alertTimeout);
    }

    toast(type) {
        this.plex.toast(type, this.toastText, 'Información', this.toastTimeout);
    }

    confirm() {
        this.plex.confirm(this.confirmText).then((resultado) => {
            this.resultado = resultado;
        });
    }
}
