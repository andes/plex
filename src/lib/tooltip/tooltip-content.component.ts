import { Component, Input, AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tooltip-content',
    template: `<div *ngIf="hostElement"
                    class="tooltip show tooltip-{{ placement }} no-wrap"
                    [style.top]="top + 'px'"
                    [style.left]="left + 'px'"
                    [style.visibility]="isIn ? 'visible' : 'hidden'"
                    [style.pointer-events]="'none'"
                    role="tooltip">
                    <div class="tooltip-inner">
                        <ng-content></ng-content>
                        <div [innerHTML]="content"></div>
                    </div>
                </div>
            `
})
export class TooltipContentComponent implements AfterViewInit, OnDestroy {

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------

    @Input()
    hostElement: HTMLElement;

    @Input()
    content: string;

    @Input()
    placement: 'top' | 'bottom' | 'left' | 'right' = 'top';

    @Input()
    animation = false;

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    top = -100000;
    left = -100000;
    isIn = false;
    isFade = false;

    private destroyed = false;
    private watchId: any = null;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(
        private element: ElementRef,
        private cdr: ChangeDetectorRef) {
    }

    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------

    ngAfterViewInit(): void {
        this.reset();
        this.startHostWatch();
        this.cdr.detectChanges();
    }

    ngOnDestroy(): void {
        this.destroyed = true;
        this.stopHostWatch();
        this.reset();
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    show(): void {
        const effectiveHost = this.getEffectiveHost();
        if (!this.isHostRenderable(effectiveHost)) {
            this.reset();
            return;
        }

        const tooltipEl = this.getTooltipElement();
        if (!tooltipEl) {
            return;
        }

        const p = this.positionElements(effectiveHost as HTMLElement, tooltipEl, this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;

        if (this.animation) {
            this.isFade = true;
        }
    }

    hide(): void {
        this.reset();
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private reset(): void {
        this.top = -100000;
        this.left = -100000;
        this.isIn = false;
        this.isFade = false;
        if (this.animation) {
            this.isFade = false;
        }
    }

    private startHostWatch(): void {
        if (this.watchId || this.destroyed) {
            return;
        }

        this.watchId = setInterval(() => {
            if (this.destroyed) {
                this.stopHostWatch();
                return;
            }

            const effectiveHost = this.getEffectiveHost();

            if (!this.isHostRenderable(effectiveHost)) {
                this.reset();
                this.stopHostWatch();
                return;
            }

            if (!this.isHostHovered(effectiveHost)) {
                this.reset();
                return;
            }

            this.show();
        }, 100);
    }

    private stopHostWatch(): void {
        if (this.watchId) {
            clearInterval(this.watchId);
            this.watchId = null;
        }
    }

    private getTooltipElement(): HTMLElement | null {
        return this.element?.nativeElement?.children?.[0] ?? null;
    }

    /**
     * Si el host es un wrapper como <plex-button>, intenta usar el botón real interno.
     * Eso mejora medición, hover real y evita inconsistencias con pointer-events.
     */
    private getEffectiveHost(): HTMLElement | null {
        if (!this.hostElement) {
            return null;
        }

        const innerButton = this.hostElement.querySelector('button');
        return (innerButton as HTMLElement) || this.hostElement;
    }

    private isHostRenderable(host: HTMLElement | null): boolean {
        if (!host) {
            return false;
        }

        if (!host.isConnected) {
            return false;
        }

        const rect = host.getBoundingClientRect();

        if (rect.width === 0 && rect.height === 0) {
            return false;
        }

        return true;
    }

    private isHostHovered(host: HTMLElement | null): boolean {
        if (!host) {
            return false;
        }

        try {
            return host.matches(':hover');
        } catch {
            return false;
        }
    }

    private positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: string, appendToBody = false): { top: number; left: number } {
        const positionStrParts = positionStr.split('-');
        const pos0 = positionStrParts[0];
        const pos1 = positionStrParts[1] || 'center';
        const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        const targetElWidth = targetEl.offsetWidth;
        const targetElHeight = targetEl.offsetHeight;

        const shiftWidth: any = {
            center(): number {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left(): number {
                return hostElPos.left;
            },
            right(): number {
                return hostElPos.left + hostElPos.width;
            }
        };

        const shiftHeight: any = {
            center(): number {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top(): number {
                return hostElPos.top;
            },
            bottom(): number {
                return hostElPos.top + hostElPos.height;
            }
        };

        let targetElPos: { top: number; left: number };

        switch (pos0) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;

            case 'left':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;

            case 'bottom':
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;

            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }

        return targetElPos;
    }

    private position(nativeEl: HTMLElement): { width: number; height: number; top: number; left: number } {
        let offsetParentBCR = { top: 0, left: 0 };
        const elBCR = this.offset(nativeEl);
        const offsetParentEl = this.parentOffsetEl(nativeEl);

        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        const boundingClientRect = nativeEl.getBoundingClientRect();

        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    }

    private offset(nativeEl: any): { width: number; height: number; top: number; left: number } {
        const boundingClientRect = nativeEl.getBoundingClientRect();

        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    }

    private getStyle(nativeEl: HTMLElement, cssProp: string): string {
        if ((nativeEl as any).currentStyle) {
            return (nativeEl as any).currentStyle[cssProp];
        }

        if (window.getComputedStyle) {
            return (window.getComputedStyle(nativeEl) as any)[cssProp];
        }

        return (nativeEl.style as any)[cssProp];
    }

    private isStaticPositioned(nativeEl: HTMLElement): boolean {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    }

    private parentOffsetEl(nativeEl: HTMLElement): any {
        let offsetParent: any = nativeEl.offsetParent || window.document;

        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || window.document;
    }
}
