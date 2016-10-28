import { OnInit, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class PlexButtonComponent implements OnInit, ControlValueAccessor {
    private renderer;
    private onChange;
    ref: ElementRef;
    title: string;
    icon: string;
    type: string;
    disabled: boolean;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnTouched(fn: any): void;
    registerOnChange(fn: any): void;
}
