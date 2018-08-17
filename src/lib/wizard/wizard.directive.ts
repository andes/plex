import { Directive, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';


@Directive({ selector: '[plexWizard]' })
export class PlexWizardDirective implements AfterViewInit {
    @Input() plexWizard: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit() {
        // Crea una referencia para que lo pueda encontrar PlexService a través de document.querySelector()
        this.renderer.setAttribute(this.elementRef.nativeElement, 'plex-wizard-ref', this.plexWizard);
    }
}
