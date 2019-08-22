import { Component, Input, HostBinding, Renderer2, Output, EventEmitter } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { DropdownItem } from './dropdown-item.inteface';

@Component({
    selector: 'plex-dropdown',
    template: ` <div class="dropdown" [ngClass]="{show: open}">
                    <button plexRipples data-toggle="dropdown" class="btn btn-{{type}}" [ngClass]="{'dropdown-toggle': label}" type="button" [disabled]="disabled" (click)="toggleMenu(); $event.stopImmediatePropagation();">
                    <i *ngIf="icon" class="mdi mdi-{{icon}} mdi-md"></i> {{label}}
                    </button>
                    <ul class="dropdown-menu" [ngClass]="{'dropdown-menu-right': right, 'dropdown-menu-left': !right}">
                    <li *ngFor="let item of items">
                        <!--Item con router asociado-->
                        <ng-template [ngIf]="!item.divider && item.route">
                        <a plexRipples class="dropdown-item" href="#" [routerLink]="item.route" routerLinkActive="active" (click)="open=false">
                            <span *ngIf="item.icon" class="mdi mdi-{{item.icon}} mdi-md"></span> {{item.label}}</a>
                        </ng-template>
                        <!--Item con handler asociado-->
                        <ng-template [ngIf]="!item.divider && item.handler">
                        <a plexRipples class="dropdown-item" href="#" (click)="toggleMenu(); item.handler($event); false;">
                            <span *ngIf="item.icon" class="mdi mdi-{{item.icon}} mdi-md"></span> {{item.label}}</a>
                        </ng-template>
                        <!--Divider-->
                        <ng-template [ngIf]="item.divider">
                        <div role="separator" class="dropdown-divider"></div>
                        </ng-template>
                    </li>
                    </ul>
                </div>`,
})
export class PlexDropdownComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() open: boolean;
    @Input() items: DropdownItem[];
    @Input() type: string;
    @Input() right: boolean;
    @Input() @HostBinding('attr.disabled') disabled: boolean;

    @Output() onOpen: EventEmitter<void> = new EventEmitter();

    private unlisten: Function;

    constructor(public plex: Plex, private renderer: Renderer2) {
        this.open = false;
        this.disabled = false;
        this.type = 'secondary';
        this.right = false;
    }

    public toggleMenu() {
        this.open = !this.open;
        if (this.open) {
            this.onOpen.emit();
            this.unlisten = this.renderer.listen('document', 'click', (event) => {
                this.toggleMenu();
                this.unlisten();
            });
        } else {
            if (this.unlisten) {
                this.unlisten();
            }
        }
    }

}
