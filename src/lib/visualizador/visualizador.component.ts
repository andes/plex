import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface FileObject {
    url: String;
    ext: String;
}

export type PlexVisualizadorItem = FileObject | string;

@Component({
    selector: 'plex-visualizador',
    template: `
    <div *ngIf="opened" class="lightbox hover" (click)="close()" justify>
        <plex-icon (click)="previous();$event.stopPropagation();" type="info" size="xl" name="chevron-double-left" class="parpadeo"></plex-icon>


        <img [src]="imageSrc" alt="" *ngIf="isImage" (click)="imageClick();$event.stopPropagation();">
        <a [href]="imageSrc" target="_blank" *ngIf="!isImage" class="adjunto m-1 p-2"
        (click)="imageClick();$event.stopPropagation();">
            {{ desc }}
        </a>

        <plex-icon (click)="next();$event.stopPropagation();" type="info" size="xl" name="chevron-double-right" class="parpadeo"></plex-icon>
    </div>
    `
})
export class PlexVisualizadorComponent {

    /**
     * Listado de archivos a visualizar
     */

    @Input() files: PlexVisualizadorItem[] = [];

    /**
     * Evento emitido cuando el visualizador se cierra
     */

    @Output() closed = new EventEmitter<void>();

    /**
     * Evento emitido cuando se cambio de imagen
     */

    @Output() change = new EventEmitter<any>();


    /**
     * Evento emitido cuando se hace click en una imagen
     */

    @Output() click = new EventEmitter<any>();

    @Input() public opened = false;

    @Input() public index = 0;

    private imagenes = ['bmp', 'jpg', 'jpeg', 'gif', 'png', 'tif', 'tiff', 'raw'];

    private extensions = [
        // Documentos
        'pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'xml', 'html', 'txt',
        // Audio/Video
        'mp3', 'mp4', 'm4a', 'mpeg', 'mpg', 'mov', 'flv', 'avi', 'mkv',
        // Otros
        'dat'
    ];

    get imageSrc() {
        const file = this.files[this.index];
        return this.url(file);
    }


    get isImage() {
        const item = this.files[this.index];
        if (typeof item === 'string') {
            return true;
        } else {
            return this.imagenes.find(x => x === item.ext.toLowerCase());
        }
    }

    get desc() {
        const item = this.files[this.index];
        if (typeof item === 'string') {
            return 'img';
        } else {
            return item.ext;
        }
    }

    constructor(
        private domSanitizer: DomSanitizer
    ) { }

    private secureUrl(url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }

    url(item: PlexVisualizadorItem) {
        if (typeof item === 'string') {
            return this.secureUrl(item);
        } else {
            return this.secureUrl(item.url);
        }
    }

    public open(index: number = undefined) {
        this.opened = true;
        if (typeof index === 'number') {
            this.index = index;
        } else {
            this.index = 0;
        }
    }

    close() {
        this.opened = false;
        this.closed.emit();
    }

    public previous() {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.change.emit(this.index);
        }
    }

    public next() {
        if (this.index < this.files.length - 1) {
            this.index = this.index + 1;
            this.change.emit(this.index);
        }
    }

    imageClick() {
        this.click.emit(this.index);
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (!this.open) {
            return false;
        }
        if (event.which === 37) {
            return this.previous();
        }
        if (event.which === 39) {
            return this.next();
        }
        if (event.which === 27) {
            return this.close();
        }
    }

}
