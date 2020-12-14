import { Directive, EmbeddedViewRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { combineLatest } from 'rxjs';
import { PlexColumnDirective } from './columns.directive';

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
        private render: Renderer2,
        private nextRef: TemplateRef<ObserveContext<T>>,
    ) {

    }

    ngOnInit() {
        combineLatest([
            this.table.columns$,
            this.table.displayColumns$
        ]).subscribe(([definitions, cols]) => {
            const colDef = definitions.find(item => item.key === this.name);
            if (cols[this.name]) {
                this.createView(colDef.right);
            } else {
                this.cleanView();
            }
        });
    }

    private createView(right: boolean) {
        if (!this.viewRef) {
            this.viewRef = this.view.createEmbeddedView(this.nextRef);
            if (right) {
                this.render.addClass(this.viewRef.rootNodes[0], 'column-right');
            }
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
