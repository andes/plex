// https://github.com/angular/angular/blob/d2ad871279c410334314def0be5c5d0599f4368e/modules/%40angular/forms/src/directives/validators.ts
import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { FormGroup, FormControl }                   from '@angular/forms';

@Component({
    selector: 'plex-text',
    // [ngClass]="{'has-error':isError}">
    template: `
    <div [formGroup]="form">
        <div class="form-group" [ngClass]="{'has-error': control.touched && !control.valid }">

            <label >{{plexLabel}}</label>
            <input type="text" formControlName="{{plexName}}" class="form-control" placeholder="{{plexPlaceholder}}"

             [(ngModel)]="plexModel" (ngModelChange)="updateData($event)"
            />

            <validation-messages [control]="control"></validation-messages>

        </div>
    </div>
    `,

    //  <input type="number" placeholder="{{placeholder}}"
    //    class="form-control {{plexClass}}" name="{{name}}" id="{{id}}"
    //
    //  [attr.required]="plexRequired" [attr.minlength]="plexMinLength" [attr.maxlength]="plexMaxLength"
    //  [attr.readonly]="plexReadOnly" [attr.disabled]="plexDisabled" [attr.autofocus]="plexAutofocus"
    //
    //  [(ngModel)]="plexModel" (ngModelChange)="updateData($event)"
    //  #name="ngModel"
    //
    //  />
})

export class PlexTextComponent implements OnInit {
    @Input() control: FormControl;  // * requerido si o si
    @Input() form: FormGroup;       // * requerido si o si
    @Input() plexName: string;      // * requerido si o si

    // atributos html
    @Input() id: string;
    // @Input() name: string;
    @Input() plexPlaceholder: string;
    // @Input() type:string;
    // @Input() required:boolean;

    // opciones
    @Input() plexModel: string;
    @Input() plexClass: boolean;

    @Input() plexAutofocus: boolean;
    @Input() plexDisabled: boolean;
    @Input() plexLabel: string;
    @Input() plexMaxLength: number;
    @Input() plexMinLength: number;
    @Input() plexMax: number;
    @Input() plexMin: number;
    @Input() plexModel: any;
    @Input() plexRequired: boolean;
    @Input() plexReadOnly: boolean;

    @Input() isError: boolean = false;

    constructor() {
        // console.log(this.form.);
        //         console.log("CONTROL NAME");
        //         console.log(this.form + ".controls." + this.plexName);
        //         return form + ".controls." + plexName;
        //         // if (this.plexMin){
        //         //   this.plexMin = parseInt(this.plexMin);
        //         // }
        //         // if (this.id && !this.name){
        //         //   this.name = this.id;
        //         // }
        //         console.log(this.plexModel);
        //         console.log(this.form);
        //         console.log(this.control);
        console.log("CONSTRUCTOR:");
    }

    ngOnInit(){
        console.log("INIT:");
        console.log("form: " + this.form);
        console.log("control: " + this.control);
        console.log("plexName: " + this.plexName);
        console.log("plexPlaceholder: " + this.plexPlaceholder);
        console.log(this.form.controls);
    }

    hasError(){
        // if (this.form.controls.this.plexName.touched && !form.controls.plexName.valid
        console.log(this.form);
    }

    controlName(){
        // console.log("CONTROL NAME");
        // console.log(form + ".controls." + plexName);
        // return form + ".controls." + plexName;
    }
    // note that this must be named as the input name + "Change"
    @Output() plexModelChange: any = new EventEmitter();

    updateData(value: any) {
        this.plexModel = value;
        this.plexModelChange.emit(value);
    }
}
