// https://github.com/angular/angular/blob/d2ad871279c410334314def0be5c5d0599f4368e/modules/%40angular/forms/src/directives/validators.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'plex-number',
    // [ngClass]="{'has-error':isError}">
    template: `
    <div class="form-group">

      <label >
          {{plexLabel}}
      </label>

      <input type="number" placeholder="{{placeholder}}"
      class="form-control {{ngClass}}" name="{{name}}" id="{{id}}"

      [attr.required]="plexRequired" [attr.minlength]="plexMinLength" [attr.maxlength]="plexMaxLength"
      [attr.readonly]="plexReadOnly" [attr.disabled]="plexDisabled" [attr.autofocus]="plexAutofocus"

      [(ngModel)]="plexModel" (ngModelChange)="updateData($event)"
      #name="ngModel"

      />

    </div>
     `,
})

export class PlexNumberComponent {
    // atributos html
    @Input() id: string;
    @Input() name: string;
    @Input() placeholder: string;
    // @Input() type:string;
    // @Input() required:boolean;


    // opciones
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
        // if (this.plexMin){
        //   this.plexMin = parseInt(this.plexMin);
        // }
        // if (this.id && !this.name){
        //   this.name = this.id;
        // }
        console.log(this.plexModel);
    }

    // note that this must be named as the input name + "Change"
    @Output() plexModelChange: any = new EventEmitter();

    updateData(value: any) {
        this.plexModel = value;
        this.plexModelChange.emit(value);
    }
}
