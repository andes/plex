import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PlexAccordionComponent } from './accordion.component';

@Component({
    selector: 'plex-panel',
    template: ` <div class="card">
                    <div class="card-header" role="tab" id="headingOne" (click)="selectPanel()">
                        <a  *ngIf="tituloPrincipal" class="card-action" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseOne">
                            <plex-icon type="default" size="xl" [name]="icon"></plex-icon>
                            <span class="title ml-1">
                                {{tituloPrincipal}}
                            </span>
                        </a>
                        <a class="card-action hover" *ngIf="!tituloPrincipal">
                            <div>
                                <ng-content select="[plex-accordion-title]"></ng-content>
                            </div>
                        </a>
                    </div>

                    <div id="collapseOne" class="collapse" [class.show]="active" role="tabpanel" aria-labelledby="headingOne">
                        <div class="card-block">
                            <h6 class="box-title-secundario" *ngIf="tituloSecundario">{{tituloSecundario}}</h6>
                            <ng-content class="box-title-element"></ng-content>
                        </div>
                    </div>
                </div>
                `,
})
export class PlexPanelComponent {
    @Input() tituloPrincipal: string;
    @Input() tituloSecundario: string;
    @Input() icon: string;
    @Input() content: string;
    @Input() active: boolean;
    @Output() toggle = new EventEmitter();

    constructor(accordion: PlexAccordionComponent) {
        accordion.addPanel(this);
    }

    selectPanel() {
        this.active = !this.active;
        this.toggle.emit(this.active);
    }

}
