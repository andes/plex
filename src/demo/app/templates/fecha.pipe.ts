import { Pipe, PipeTransform } from '@angular/core';

/**
 * Esta es una copia del pipe 'fecha' del proyecto /app con el fin utilizarlo en los templates
 *
 * @export
 * @class FechaPipe
 * @implements {PipeTransform}
 */
@Pipe({ name: 'fecha' })
export class FechaPipe implements PipeTransform {
    transform(value: any, hora: boolean): any {
        return hora ? moment(value).format('HH:mm') : moment(value).format('DD/MM/YYYY');
    }
}
