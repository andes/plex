import { Directive, TemplateRef, ViewContainerRef, OnDestroy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Subscription, merge, interval, NEVER } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PlexTabComponent } from './tab.component';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[plTab]'
})
export class TabDirective<T> implements OnDestroy, OnInit {
    private openSubscription: Subscription;
    private viewRef: any = null;

    /**
     * Renderizar el contenido de una tab de forma asyncrona. Si se indica milisegundos se pospone la carga aunque no se active la tab.
     **/
    @Input() plTab: number;

    constructor(
        private view: ViewContainerRef,
        private nextRef: TemplateRef<ObserveContext<T>>,
        private changes: ChangeDetectorRef,
        private plexTab: PlexTabComponent
    ) { }


    ngOnDestroy() {
        this.openSubscription.unsubscribe();
    }

    ngOnInit() {
        const timer = this.plTab ? interval(this.plTab) : NEVER;
        this.openSubscription = merge(
            this.plexTab.toggle.pipe(filter(active => active)),
            timer
        ).subscribe(() => {
            if (!this.viewRef) {
                this.viewRef = this.view.createEmbeddedView(this.nextRef);
                this.changes.markForCheck();
                this.openSubscription.unsubscribe();
            }
        });
    }

}

interface ObserveContext<T> {
    $implicit: T;
    observe: T;
}
