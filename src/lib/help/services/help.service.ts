import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HelpService {

    private helpCache = new BehaviorSubject<any>(null);

    setHelp(help: any) {
        this.helpCache.next(help);
    }

    closePrevious(id: number) {
        const help = this.helpCache.value;

        if (help && help.id !== id) {
            help.toggleClose();
            this.helpCache.next(null);
        }
    }
}
