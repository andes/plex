import { Directive, ViewContainerRef, ComponentFactoryResolver, HostListener, ComponentRef, ElementRef } from '@angular/core';
import { PlexVisualizadorComponent } from './visualizador.component';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'img[preview]'
})
export class PreviewDirective {

    private visualizador: ComponentRef<PlexVisualizadorComponent>;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        private el: ElementRef
    ) { }


    @HostListener('click')
    click(): void {
        const source = this.el.nativeElement.src;

        const factory = this.resolver.resolveComponentFactory(PlexVisualizadorComponent);
        this.visualizador = this.viewContainerRef.createComponent(factory);

        this.visualizador.instance.files = [
            source
        ];

        this.visualizador.instance.open();

        this.visualizador.instance.closed.subscribe(() => {
            this.visualizador.destroy();
            this.visualizador = null;
        });
    }
}
