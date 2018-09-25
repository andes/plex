import { WizardConfig } from './../../../lib/core/wizard-config.interface';
import { Component } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'wizard.html',
})
export class WizardDemoComponent {
    public config: WizardConfig = {
        id: 'demo',
        updatedOn: moment('2018-08-01').toDate(),
        steps: [
            { title: 'Uno', content: 'Contenido uno' },
            { title: 'Dos', content: 'Contenido dos' },
            { title: 'Tres', content: 'Contenido tres' },
            { title: 'Cuatro', content: 'Contenido cuatro' },
        ],
        forceShow: false,
        fullScreen: false,
        showNumbers: false
    };
    private configFullScreen: WizardConfig = {
        id: 'demo-fullscreen',
        updatedOn: moment('2018-08-01').toDate(),
        steps: [
            { title: 'Uno', content: 'Contenido uno', imageClass: 'plex-wizard-demo-1' },
            { title: 'Dos', content: 'Contenido dos', imageClass: 'plex-wizard-demo-2' },
            { title: 'Tres', content: 'Contenido tres', imageClass: 'plex-wizard-demo-1' },
        ],
        forceShow: false,
        fullScreen: true,
        showNumbers: false
    };
    public field = '';
    constructor(private plex: Plex) { }

    mostrar(fullscreen: boolean) {
        if (fullscreen) {
            this.plex.wizard(this.configFullScreen);
        } else {
            this.plex.wizard(this.config);
        }
    }

    changeForce() {
        this.configFullScreen.forceShow = this.config.forceShow;
    }

    guardar($event) {

    }
}
