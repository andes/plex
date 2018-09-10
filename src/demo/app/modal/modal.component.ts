import { Component } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'modal.html'
})
export class ModalDemoComponent {
    public alertText = 'Se ha detectado un error en la base de datos';
    public alertTimeout = 0;
    public toastText = 'Esta es una rica tostada';
    public toastTimeout = 3000;
    public confirmText = '¿Desea descargar el archivo?';
    public resultado: boolean;
    constructor(private plex: Plex) { }

    info(type) {
        let params = {
            type: type,
            content: this.alertText,
            title: 'Información',
            confirmButtonText: 'Aceptar',
            timeOut: this.alertTimeout
        };

        this.plex.info(params);
    }

    toast(type) {
        this.plex.toast(type, this.toastText, 'Información', this.toastTimeout);
    }

    confirm() {

        let params = {
            content: this.confirmText,
            title: 'El archivo se generó correctamente',
            confirmButtonText: 'Descargar archivo',
            cancelButtonText: 'Cancelar'
        };

        this.plex.confirm(params).then((resultado) => {
            this.resultado = resultado;
        });
    }
}
