import { OnInit, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class PlexTextComponent implements OnInit, ControlValueAccessor {
    private renderer;
    private onChange;
    ref: ElementRef;
    autofocus: boolean;
    label: string;
    placeholder: string;
    control: any;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnTouched(): void;
    registerOnChange(fn: any): void;
}
