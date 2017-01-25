import { ValidatorFn, AbstractControl } from '@angular/forms';

export class PlexValidator {
    static min(min: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let v = control.value;
            return v < min ? { 'min': { 'limit': min, 'actual': v } } : null;
        };
    }

    static max(max: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let v = control.value;
            return v > max ? { 'max': { 'limit': max, 'actual': v } } : null;
        };
    }
}