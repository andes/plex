import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { interval, NEVER, Subscription, merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PlexPanelComponent } from './panel.component';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[plAccordion]'
})

export class AccordionDirective implements OnInit, OnDestroy {
    private openSubscription: Subscription;
    private viewRef: any = null;

    // En el caso que se indique una cantidad de milisegundos, se renderiza al cumplirse el tiempo ingresado.
    @Input() plAccordion: number;

    constructor(
        private view: ViewContainerRef,
        private nextRef: TemplateRef<any>,
        private plexPanel: PlexPanelComponent,
        private changes: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        const timer = this.plAccordion ? interval(this.plAccordion) : NEVER;
        this.openSubscription = merge(
            this.plexPanel.toggle.pipe(filter(active => active)),
            timer
        ).subscribe(() => {
            if (!this.viewRef) {
                this.viewRef = this.view.createEmbeddedView(this.nextRef);
                this.changes.markForCheck();
                this.openSubscription.unsubscribe();
            }
        });
    }

    ngOnDestroy() {
        this.openSubscription.unsubscribe();
    }
}
