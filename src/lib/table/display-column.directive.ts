import { Directive, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PlexColumnDirective } from './columns.directive';
import { PlexTableComponent } from './table.component';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[plTableCol]'
})
export class PlexTableColDirective<T> implements OnInit {

    @Input('plTableCol') name: string;

    private viewRef: EmbeddedViewRef<any> = null;

    constructor(
        private table: PlexColumnDirective,
        private view: ViewContainerRef,
        private nextRef: TemplateRef<ObserveContext<T>>,
    ) {

    }

    ngOnInit() {
        this.table.displayColumns$.subscribe((cols) => {
            if (cols[this.name]) {
                this.createView();
            } else {
                this.cleanView();
            }
        });
    }

    private createView() {
        if (!this.viewRef) {
            this.viewRef = this.view.createEmbeddedView(this.nextRef);
        }
    }

    private cleanView() {
        if (this.viewRef) {
            this.view.clear();
            this.viewRef.destroy();
            this.viewRef = null;
        }
    }

}

interface ObserveContext<T> {
    $implicit: T;
    observe: T;
}
