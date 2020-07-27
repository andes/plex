import { Directive, ElementRef, AfterViewChecked, Renderer2, HostListener, OnInit, NgZone, OnDestroy } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[responsive]'
})
export class ResponsiveDirective implements AfterViewChecked, OnInit, OnDestroy {
    // ResizeObserver es soportado desde la version 64 de Chrome.
    // Tenemos algunos usuarios en la version 59 todavía.
    ResizeObserver = (window as any).ResizeObserver;

    constructor(
        private el: ElementRef,
        private render: Renderer2,
        private zone: NgZone
    ) { }

    width = 0;
    observer;
    handler;


    ngOnInit() {
        if (this.ResizeObserver) {
            this.observer = new this.ResizeObserver(entries => {
                this.zone.run(() => {
                    this.checkDimension();
                });
            });
            this.observer.observe(this.el.nativeElement);
        } else {
            this.handler = this.onResize.bind(this);
            window.addEventListener('resize', this.handler);
        }
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
        }
        if (this.handler) {
            window.removeEventListener('resize', this.handler);
        }
    }

    checkDimension() {
        this.width = this.el.nativeElement.clientWidth;
        this.render.removeClass(this.el.nativeElement, 'size-sm');
        this.render.removeClass(this.el.nativeElement, 'size-md');
        this.render.removeClass(this.el.nativeElement, 'size-lg');
        this.render.removeClass(this.el.nativeElement, 'size-xl');

        if (this.width >= 1024) {
            this.render.addClass(this.el.nativeElement, 'size-xl');
        } else if (this.width >= 768 && this.width < 1024) {
            this.render.addClass(this.el.nativeElement, 'size-lg');
        } else if (this.width >= 576 && this.width < 768) {
            this.render.addClass(this.el.nativeElement, 'size-md');
        } else if (this.width < 576) {
            this.render.addClass(this.el.nativeElement, 'size-sm');
        }
    }

    ngAfterViewChecked() {
        if (!this.ResizeObserver) {
            this.checkDimension();
        }
    }

    onResize() {
        this.zone.run(() => {
            this.checkDimension();
        });
    }
}
