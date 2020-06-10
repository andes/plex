import { Directive, TemplateRef, ViewContainerRef, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlexHelpComponent } from './help.component';

export interface ObserveContext<T> {
    $implicit: T;
    observe: T;
}

export interface ErrorContext {
    $implicit: Error;
}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[plHelp]'
})
export class HelpDirective<T> implements OnDestroy, OnInit {
    private openSubscription: Subscription;
    private closeSubscription: Subscription;

    constructor(
        private view: ViewContainerRef,
        private nextRef: TemplateRef<ObserveContext<T>>,
        private changes: ChangeDetectorRef,
        private plexHelp: PlexHelpComponent
    ) { }


    ngOnDestroy() {
        this.openSubscription.unsubscribe();
        this.closeSubscription.unsubscribe();
    }

    ngOnInit() {
        this.openSubscription = this.plexHelp.open.subscribe(() => {
            this.view.clear();
            this.view.createEmbeddedView(this.nextRef);
            this.changes.markForCheck();
        });

        this.closeSubscription = this.plexHelp.close.subscribe(() => {
            this.view.clear();
            this.changes.markForCheck();
        });
    }

}
