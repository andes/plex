import { Component, Input, HostBinding, Renderer2, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Plex } from '../../lib/core/service';
import { DropdownItem } from './dropdown-item.inteface';

@Component({
    selector: 'plex-dropdown',
    template: ` <div class="dropdown" [ngClass]="{show: open}">
                    <button plexRipples data-toggle="dropdown" class="btn btn-{{type}} {{( 'size' ? 'btn-' + size : '' )}}" [ngClass]="{'dropdown-toggle': label}" type="button" [disabled]="disabled" (click)="toggleMenu(); $event.stopImmediatePropagation();">
                        <plex-icon *ngIf="icon" [name]="icon" [size]="size"></plex-icon>
                        {{label}}
                    </button>
                    <ul class="dropdown-menu" [ngClass]="{'dropdown-menu-right': right, 'dropdown-menu-left': !right}" *ngIf="items">
                        <li *ngFor="let item of items">
                            <!--Item con router asociado-->
                            <ng-template [ngIf]="!item.divider && item.route">
                                <a plexRipples class="dropdown-item" href="#" [routerLink]="item.route" routerLinkActive="active" (click)="open=false">
                                    <plex-icon *ngIf="item.icon" type="default" [name]="item.icon"></plex-icon>
                                    {{item.label}}
                                </a>
                            </ng-template>
                            <!--Item con handler asociado-->
                            <ng-template [ngIf]="!item.divider && item.handler">
                                <a plexRipples class="dropdown-item" href="#" (click)="toggleMenu(); item.handler($event); false;">
                                    <plex-icon *ngIf="item.icon" type="default" [name]="item.icon"></plex-icon>
                                    {{item.label}}
                                </a>
                            </ng-template>
                            <!--Divider-->
                            <ng-template [ngIf]="item.divider">
                                <div role="separator" class="dropdown-divider"></div>
                            </ng-template>
                        </li>
                    </ul>
                    <div class="dropdown-menu p-2" [ngClass]="{'dropdown-menu-right': right, 'dropdown-menu-left': !right}" *ngIf="!items">
                        <ng-content></ng-content>
                    </div>
                </div>`,
})
export class PlexDropdownComponent implements OnInit, OnDestroy {
    @Input() label: string;
    @Input() icon: string;
    @Input() open: boolean;
    @Input() items: DropdownItem[];
    @Input() type: string;
    @Input() right: boolean;
    @Input() size: 'sm' | 'md' | 'lg' | 'block' = 'md';
    @Input() @HostBinding('attr.disabled') disabled: boolean;
    @Input() autodisabled = false;


    @Output() onOpen: EventEmitter<void> = new EventEmitter();

    private unlisten: Function;
    private onDestroy$ = new Subject<void>();


    constructor(
        public plex: Plex,
        private renderer: Renderer2
    ) {
        this.open = false;
        this.disabled = false;
        this.type = 'secondary';
        this.right = false;
    }

    ngOnInit() {
        if (this.autodisabled) {
            this.plex.networkCounter.pipe(takeUntil(this.onDestroy$)).subscribe((n) => {
                this.disabled = n > 0;
            });
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
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
