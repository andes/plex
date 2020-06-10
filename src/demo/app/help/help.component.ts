import { Plex } from '../../../lib/core/service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    templateUrl: 'help.html',
})
export class HelpDemoComponent implements OnInit {

    showContent = false;

    asyncContent = from([1, 2, 3, 4]).pipe(
        tap((index) => {
            // tslint:disable-next-line:no-console
            console.log('Contenido evaluado recien al abrirse', index);
        })
    );

    constructor(private plex: Plex) { }

    ngOnInit() {
    }
}
