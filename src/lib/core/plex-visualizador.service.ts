import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PlexVisualizadorItem } from '../visualizador/visualizador.component';

@Injectable()
export class PlexVisualizadorService {

    public state$ = new Subject<{ documentos: PlexVisualizadorItem[], index: number }>();

    public close$: Subject<void>;

    public click$: Subject<void>;

    /**
     * Abre plex-visualizador
     * @param files Archivos a renderizar
     * @param index Indice a mostrar
     */
    open(files: PlexVisualizadorItem[], index: number = 0) {
        this.state$.next({ documentos: files, index });

        this.close$ = new Subject();
        this.click$ = new Subject();
    }

    close() {
        this.state$.next(null);
        this.close$.next();
        this.close$.complete();
        this.click$.complete();
    }

    click() {
        this.click$.next();
    }

}
