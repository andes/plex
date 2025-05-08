import { Component, Input, Output, Renderer2, EventEmitter } from '@angular/core';
import { Plex } from '../core/service';

@Component({
    selector: 'plex-menu',
    template: `
        <div role="navigation" aria-label="Menú principal" *ngIf="menu && menu.length" class="dropdown" tabindex="1" [ngClass]="{show: menuOpen}" (click)="toggleMenu(); $event.stopImmediatePropagation();" (keyup)="onMenuKeyup($event)">
            <plex-icon type="light" size="xl" name="menu"></plex-icon>
            <ul class="dropdown-menu dropdown-menu-right main-menu">
                <li *ngFor="let item of menu; let i = index">
                    <!--Item con router asociado-->
                    <ng-template [ngIf]="!item.divider && !item.submodulos">
                        <a *ngIf="item.route" class="dropdown-item" href="#" tabindex="{{i + 1}}" (click)="selectItem(item)" [ngStyle]="{'background-color': item.route ? item.color : ''}" [routerLink]="item.route" routerLinkActive="active">
                            <plex-icon *ngIf="item.icon" type="dark" [prefix]="item.prefix" [name]="item.icon"></plex-icon>
                            {{item.label}}
                        </a>
                        <a *ngIf="!item.route" class="dropdown-item" (click)="selectItem(item)">
                            <plex-icon *ngIf="item.icon" type="dark" [prefix]="item.prefix" [name]="item.icon"></plex-icon>
                            {{item.label}}
                        </a>
                    </ng-template>
                    <!--Item con submodulos-->
                    <ng-template [ngIf]="item.submodulos">
                        <a [ngStyle]="{'background-color': !item.collapsed ? item.color : ''}" class="dropdown-item {{ !item.collapsed ? 'active' : ''}}" tabindex="{{i + 1}}" (click)="selectItem(item); toggleSubmenu($event, item)">
                            <plex-icon name="{{!item.collapsed ? 'chevron-down' : 'chevron-right'}}" type="default" size="md"></plex-icon>
                            <plex-icon *ngIf="item.icon" type="dark" [prefix]="item.prefix" [name]="item.icon"></plex-icon>
                            {{item.label}}
                        </a>
                        <ul class="submenu" *ngIf="!item.collapsed">
                            <li *ngFor="let subItem of item.submodulos">
                                <a *ngIf="subItem.route" class="dropdown-item" href="#" [routerLink]="subItem.route" routerLinkActive="active" (click)="selectItem(subItem)">
                                    {{subItem.label}}
                                </a>
                                <a *ngIf="!subItem.route" class="dropdown-item" (click)="selectItem(subItem)">
                                    {{subItem.label}}
                                </a>
                            </li>
                        </ul>
                    </ng-template>
                    <!--Item con handler asociado-->
                    <ng-template [ngIf]="!item.divider && item.handler">
                        <a class="dropdown-item" href="#" tabindex="{{i + 1}}" (click)="item.handler($event); false;">
                            <plex-icon *ngIf="item.icon" type="dark" [prefix]="item.prefix" [name]="item.icon"></plex-icon>
                            {{item.label}}
                        </a>
                    </ng-template>
                    <!--Divider-->
                    <ng-template [ngIf]="item.divider">
                        <div role="separator" class="dropdown-divider"></div>
                    </ng-template>
                </li>
            </ul>
        </div>
    `,
})

export class PlexMenuComponent {
    @Input() menu: any[] = [];
    @Input() menuOpen = false;
    @Input() static = false;
    @Output() menuToggled = new EventEmitter<boolean>();
    @Output() collapseMenu = new EventEmitter<void>();
    @Output() selected = new EventEmitter<void>();

    constructor(public plex: Plex, private renderer: Renderer2) { }

    private unlisten: Function;

    public toggleMenu() {
        if (!this.static) {
            this.menuOpen = !this.menuOpen;
            this.menuToggled.emit(this.menuOpen);

            if (this.menuOpen && !this.static) {
                this.unlisten = this.renderer.listen('document', 'click', () => {
                    this.toggleMenu();
                    this.unlisten();
                });
            } else {
                if (this.unlisten) {
                    this.unlisten();
                }

                this.plex.collapse();
            }
        }
    }

    public toggleSubmenu(e, item) {
        e.stopPropagation();
        item.collapsed = !item.collapsed;
    }

    public onMenuKeyup($event) {
        if ($event.keyCode === 32 || $event.keyCode === 13) {
            this.toggleMenu();
        }
    }

    public selectItem(item) {
        this.selected.emit(item);
    }
}
