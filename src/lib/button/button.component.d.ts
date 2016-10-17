import { ElementRef, Renderer } from '@angular/core';
export declare class PlexButtonComponent {
    private renderer;
    ref: ElementRef;
    title: string;
    icon: string;
    type: string;
    disabled: boolean;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnTouched(): void;
    registerOnChange(fn: any): void;
}
