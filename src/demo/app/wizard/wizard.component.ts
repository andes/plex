import { WizardConfig } from './../../../lib/core/wizard-config.interface';
import { Component } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'wizard.html',
})
export class WizardDemoComponent {
    private config: WizardConfig = {
        id: 'demo',
        updatedOn: moment('2018-08-01').toDate(),
        steps: [
            { title: 'Uno', content: 'Contenido uno' }, // Imagen automática
            { title: 'Dos', content: 'Contenido dos', imageClass: 'manual' }, // Imagen manual
        ],
        forceShow: false,
    }

    constructor(private plex: Plex) { }

    mostrar(forceShow: boolean) {
        this.config.forceShow = forceShow;
        this.plex.wizard(this.config);
    }
}
